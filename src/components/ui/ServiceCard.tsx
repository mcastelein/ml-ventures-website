interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-surface border border-border hover:border-accent-blue/50 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue mb-4 group-hover:bg-accent-blue/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}
