import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

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