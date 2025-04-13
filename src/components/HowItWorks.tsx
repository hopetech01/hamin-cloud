import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "AI Infrastructure as a Service",
    description:
      "Access high-performance virtual machines and pods with GPUs for your AI workloads. Pay only for what you use, with flexible scaling options to match your project needs.",
  },
  {
    icon: <MapIcon />,
    title: "Model Deployment and APIs",
    description:
      "Easily deploy and serve pre-trained or custom models on our infrastructure. Integrate with your applications via our simple-to-use APIs for real-time inference.",
  },
  {
    icon: <PlaneIcon />,
    title: "Effortless Integration",
    description:
      "Use our CLI tool and library to train, fine-tune, and deploy models with just a few lines of code. Simplify your workflow and accelerate your development.",
  },
  {
    icon: <GiftIcon />,
    title: "Data Labeling and Management",
    description:
      "Leverage our platform to gather, label, and manage your data efficiently. Access curated datasets tailored to your project requirements.",
  },
];

export const HowItWorks = () => {
  const { theme } = useTheme();

  return (
    <section
      id="howItWorks"
      className="container text-center py-12 sm:py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover how Hamin Cloud simplifies AI development and deployment for your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <MagicCard
            key={title}
            className="cursor-pointer flex-col items-center justify-center shadow-2xl text-center p-6"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="text-center">{icon}</div>
              <h3 className="text-xl font-semibold mt-2">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
