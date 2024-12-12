import image1 from "../assets/scalable.png";
import image2 from "../assets/api.png";
import image3 from "../assets/data.png";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Scalable AI Infrastructure",
    description:
      "Access powerful GPU-based virtual machines and pods with our pay-as-you-go pricing. Scale effortlessly to meet the demands of your AI workloads.",
    image: image1,
  },
  {
    title: "Seamless Model Deployment",
    description:
      "Deploy pre-trained or custom AI models with ease. Use our APIs to serve models for inference and integrate them into your applications effortlessly.",
    image: image2,
  },
  {
    title: "Data Platform",
    description:
      "Gather, label, and manage data for your AI projects with our intuitive platform. Enhance your models with high-quality, well-labeled datasets.",
    image: image3,
  },
];

const featureList: string[] = [
  "GPU-based virtual machines",
  "Pay-as-you-go pricing",
  "Pre-trained model deployment",
  "Custom model fine-tuning",
  "API for inference",
  "Data labeling platform",
  "Scalable infrastructure",
  "CLI and library integration",
  "Flexible and responsive design",
];

export const Features = () => {
  const { theme } = useTheme();

  return (
    <section id="features" className="container py-12 sm:py-18 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <span className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <MagicCard
            key={title}
            className="cursor-pointer flex flex-col items-center justify-between shadow-2xl p-6 space-y-4 text-center"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center justify-center h-[200px] w-full">
              <img
                src={image}
                alt={title}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
