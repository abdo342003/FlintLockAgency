export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
        status: 405,
        headers: corsHeaders,
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { type, name, email, message, lang } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const isFr = lang === "fr";

    let subject, html, text;

    if (type === "lead magnet") {
      subject = "Nouvelle demande ebook — 25 processus à automatiser";
      html = `
        <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px;">
          <div style="background:#0d0d0d;border:1px solid #333;border-radius:12px;padding:32px;text-align:center;">
            <h1 style="color:#19e3f0;font-size:20px;margin:0 0 8px;">📄 Nouvelle demande ebook</h1>
            <p style="color:#999;font-size:14px;margin:0 0 24px;">Lead Magnet — Flintlock Studio</p>
            <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px;text-align:left;">
              <p style="color:#ccc;font-size:14px;margin:0 0 8px;"><strong>Email :</strong> ${email}</p>
              <p style="color:#666;font-size:12px;margin:0;">Demande de téléchargement ebook</p>
            </div>
          </div>
        </div>`;
      text = `Nouvelle demande ebook\nEmail: ${email}`;
    } else {
      subject = `Nouveau message depuis Flintlock — ${name || "Anonyme"}`;
      html = `
        <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px;">
          <div style="background:#0d0d0d;border:1px solid #333;border-radius:12px;padding:32px;text-align:center;">
            <h1 style="color:#19e3f0;font-size:20px;margin:0 0 8px;">📬 Nouveau message</h1>
            <p style="color:#999;font-size:14px;margin:0 0 24px;">Flintlock Website</p>
            <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px;text-align:left;">
              <p style="color:#ccc;font-size:14px;margin:0 0 8px;"><strong>Nom :</strong> ${name || "—"}</p>
              <p style="color:#ccc;font-size:14px;margin:0 0 8px;"><strong>Email :</strong> ${email}</p>
              <p style="color:#ccc;font-size:14px;margin:0 0 8px;"><strong>Message :</strong></p>
              <p style="color:#999;font-size:14px;margin:0;white-space:pre-wrap;">${(message || "").replace(/</g, "&lt;")}</p>
            </div>
          </div>
        </div>`;
      text = `Nouveau message\nNom: ${name || "—"}\nEmail: ${email}\nMessage: ${message || ""}`;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        subject,
        html,
        text,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
        status: 502,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders });
  },
};
