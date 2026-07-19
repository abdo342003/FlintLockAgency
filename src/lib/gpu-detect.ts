/**
 * GPU / hardware detection utility.
 * Returns a simple capability object used to degrade heavy effects
 * on CPU-only or low-end devices.
 */

export interface DeviceCapability {
  /** True if a hardware GPU renderer was detected */
  hasGPU: boolean;
  /** True on low-end devices (<=4 cores, no GPU, or software renderer) */
  isLowEnd: boolean;
}

const SOFTWARE_RENDERERS = [
  "swiftshader",
  "llvmpipe",
  "softpipe",
  "software",
  "mesa",
  "swrast",
  "google swiftshader",
  "google inc. swiftshader",
  "chromium swiftshader",
];

function detectGPU(): DeviceCapability {
  if (typeof document === "undefined") {
    return { hasGPU: false, isLowEnd: true };
  }

  const cores = navigator.hardwareConcurrency || 2;
  let hasGPU = false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("webgl2");

    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        const renderer = (
          gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ""
        ).toLowerCase();
        hasGPU = !SOFTWARE_RENDERERS.some((sw) => renderer.includes(sw));
      } else {
        hasGPU = true;
      }
      // Lose the context to free resources
      const loseCtx = gl.getExtension("WEBGL_lose_context");
      if (loseCtx) loseCtx.loseContext();
    }
  } catch {
    hasGPU = false;
  }

  const isLowEnd = !hasGPU || cores <= 4;
  return { hasGPU, isLowEnd };
}

let _cached: DeviceCapability | null = null;

export function getDeviceCapability(): DeviceCapability {
  if (!_cached) _cached = detectGPU();
  return _cached;
}
