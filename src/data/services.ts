export interface Service {
  slug: string;
  icon: string;
  station: string;
  order: number;
}

export const services: Service[] = [
  { slug: "web", icon: "lucide:layout", station: "STN-01", order: 0 },
  { slug: "ai", icon: "lucide:brain-circuit", station: "STN-02", order: 1 },
  { slug: "automation", icon: "lucide:workflow", station: "STN-03", order: 2 },
  { slug: "acquisition", icon: "lucide:trending-up", station: "STN-04", order: 3 },
  { slug: "security", icon: "lucide:shield-check", station: "STN-05", order: 4 },
];
