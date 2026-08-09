import {
  Brain,
  Code2,
  Layers,
  Globe,
  ShoppingBag,
  Megaphone,
  Check,
} from "lucide-react";
import services from "../data/services";

const iconMap = {
  brain: Brain,
  code: Code2,
  layers: Layers,
  globe: Globe,
  shopify: ShoppingBag,
  megaphone: Megaphone,
};

const accentStyles = {
  purple: {
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    check: "text-purple-400",
    pill: "border-purple-500/40 text-purple-300 bg-purple-500/5",
  },
  teal: {
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    check: "text-teal-400",
    pill: "border-teal-500/40 text-teal-300 bg-teal-500/5",
  },
  blue: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    check: "text-blue-400",
    pill: "border-blue-500/40 text-blue-300 bg-blue-500/5",
  },
  green: {
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    check: "text-green-400",
    pill: "border-green-500/40 text-green-300 bg-green-500/5",
  },
  rose: {
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    check: "text-rose-400",
    pill: "border-rose-500/40 text-rose-300 bg-rose-500/5",
  },
};

const OurServices = () => {
  return (
    <div className="w-[90%] m-auto py-10" id="Services">
      <div className="text-center">
        <h1 className="heading mb-3">Our Services</h1>
        <p className="subHeading">Services For Our Worldwide Customers</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((item) => {
          const Icon = iconMap[item.icon];
          const accent = accentStyles[item.accent];

          return (
            <div
              key={item.id}
              className="flex flex-col h-full rounded-xl border border-border_color/60 bg-[#141414] p-6 transition-all duration-300 hover:border-border_color"
            >
              <div
                className={`inline-flex w-12 h-12 items-center justify-center rounded-lg ${accent.iconBg} mb-5`}
              >
                <Icon className={`w-6 h-6 ${accent.iconColor}`} />
              </div>

              <h2 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h2>

              <p className="text-sm text-textColor/80 leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-textColor/90"
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${accent.check}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border_color/40">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full border ${accent.pill}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
