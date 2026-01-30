import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Car, 
  Truck, 
  Database, 
  Lock, 
  Cpu, 
  Globe, 
  Share2, 
  BarChart3, 
  Handshake, 
  Zap, 
  MapPin, 
  Users, 
  ArrowRight, 
  ShieldCheck,
  LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Platform, 
  Feature, 
  Statistic, 
  cn, 
  ROUTE_PATHS 
} from "@/lib/index";

const IconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Car,
  Truck,
  Database,
  Lock,
  Cpu,
  Globe,
  Share2,
  BarChart3,
  Handshake,
  Zap,
  MapPin,
  Users,
  ShieldCheck
};

export function PlatformCard({ platform }: { platform: Platform }) {
  const Icon = IconMap[platform.iconName] || Globe;
  const routeMap = {
    medilink: ROUTE_PATHS.MEDILINK,
    carlink: ROUTE_PATHS.CARLINK,
    exlink: ROUTE_PATHS.EXLINK
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-2xl"
    >
      <div className={cn(
        "absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20",
        platform.bgClass
      )} />
      
      <div className="flex flex-col h-full">
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm",
          platform.bgClass, "bg-opacity-10"
        )}>
          <Icon className={cn("h-7 w-7", platform.colorClass)} />
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {platform.name}
          </h3>
          <p className="text-sm font-medium text-muted-foreground opacity-80">
            {platform.slogan}
          </p>
        </div>

        <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed">
          {platform.description}
        </p>

        <ul className="mb-8 space-y-3">
          {platform.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-foreground/80 font-medium">
              <div className={cn("mr-3 h-1.5 w-1.5 rounded-full", platform.bgClass)} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            to={routeMap[platform.id]}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all",
              platform.bgClass, "text-white hover:brightness-110"
            )}
          >
            자세히 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = IconMap[feature.iconName] || Share2;
  
  const platformColors = {
    medilink: "border-chart-1/20 bg-chart-1/5 text-chart-1",
    carlink: "border-chart-2/20 bg-chart-2/5 text-chart-2",
    exlink: "border-chart-3/20 bg-chart-3/5 text-chart-3",
    common: "border-primary/20 bg-primary/5 text-primary"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:bg-card hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          platformColors[feature.platformId]
        )}>
          <Icon className="h-6 w-6" />
        </div>
        {feature.isSecure && (
          <div className="flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground border border-accent/30">
            <ShieldCheck className="h-3 w-3" />
            ENCRYPTED
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="text-lg font-bold text-foreground">
          {feature.title}
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>

      {feature.targetAudience && (
        <div className="mt-2 flex flex-wrap gap-2">
          {feature.targetAudience.map((audience, idx) => (
            <span 
              key={idx} 
              className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground"
            >
              {audience}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function StatCard({ stat }: { stat: Statistic }) {
  const Icon = IconMap[stat.iconName] || BarChart3;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <div className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted",
        stat.colorClass
      )}>
        <Icon className="h-7 w-7" />
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {stat.value}
          </span>
          <span className={cn("text-lg font-semibold", stat.colorClass)}>
            {stat.suffix}
          </span>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}