import Button from "@/components/ui/Button";

type HeroFloatingCardProps = {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  className?: string;
  style?: React.CSSProperties;
};

const HeroFloatingCard = ({ title, description, button, className, style }: HeroFloatingCardProps) => {
  return (
    <div 
      className={`hero-floating-card ${className || ''}`}
      style={style}
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-base text-foreground/75 leading-tight">{description}</p>
      <div className="mt-2">
        <Button text={button.text} href={button.href} variant="secondary" />
      </div>
    </div>
  );
};

export default HeroFloatingCard;