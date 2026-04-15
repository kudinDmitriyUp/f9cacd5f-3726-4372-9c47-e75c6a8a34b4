import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import HeroFloatingCard from "./HeroFloatingCard";

type HeroFullBleedImageProps = {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  imageSrc: string;
};

const HeroFullBleedImage = ({
  title,
  description,
  primaryButton,
  imageSrc,
}: HeroFullBleedImageProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative h-screen w-full flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="absolute inset-0 z-0 hidden md:block">
        <HeroFloatingCard
          title="Gourmet Dining"
          description="Exquisite dishes crafted by world-renowned chefs."
          button={{ text: "Explore Menus", href: "#amenities" }}
          className="top-[15%] left-[10%]"
          style={{ animationDelay: '0s' }}
        />
        <HeroFloatingCard
          title="Spa & Wellness"
          description="Rejuvenate your body and soul in our serene spa."
          button={{ text: "View Services", href: "#amenities" }}
          className="bottom-[20%] right-[12%]"
          style={{ animationDelay: '2s' }}
        />
        <HeroFloatingCard
          title="Private Beach Access"
          description="Relax on our pristine, exclusive white-sand beach."
          button={{ text: "Discover More", href: "#about" }}
          className="top-[35%] right-[25%]"
          style={{ animationDelay: '4s' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 w-content-width mx-auto text-primary-cta-text">
        <TextAnimation
          text={title}
          variant="slide-up"
          tag="h1"
          className="text-6xl font-medium text-balance"
        />
        <TextAnimation
          text={description}
          variant="slide-up"
          tag="p"
          className="text-base md:text-lg leading-tight text-balance max-w-3xl"
        />
        <div className="flex flex-wrap max-md:justify-center gap-3 mt-2">
          <Button text={primaryButton.text} href={primaryButton.href} variant="primary" animate />
        </div>
      </div>
    </section>
  );
};

export default HeroFullBleedImage;