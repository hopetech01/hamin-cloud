import { MagicCard } from "./ui/magic-card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import robot from "../assets/robot_01.png";
import ShineBorder from "./ui/shine-border";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "AI Infrastructure on Demand",
    description:
      "Lend virtual machines and pods with GPUs for businesses, startups, and enterprises. Scale effortlessly and pay as you go.",
    icon: <ChartIcon />,
  },
  {
    title: "Model Hosting and APIs",
    description:
      "Deploy and serve pre-trained models or custom models seamlessly on our infrastructure. Access them via APIs and pay per request.",
    icon: <WalletIcon />,
  },
  {
    title: "CLI and SDK for Seamless Integration",
    description:
      "Use our CLI tool and library to train, fine-tune, load, and infer models with just a few lines of code. Simplify AI workflows like never before.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Data Gathering and Labeling Platform",
    description:
      "Collect, label, and serve high-quality datasets tailored to your needs. Accelerate AI development with curated data resources.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {

  return (
    <section id="services" className="container py-12 sm:py-18">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tailored{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              AI Solutions
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Empowering businesses with flexible, scalable, and efficient AI infrastructure and tools.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }) => (
              <ShineBorder
                key={title}
                className="relative overflow-hidden rounded-lg border bg-background"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <MagicCard
                  className="flex items-start gap-4 cursor-pointer shadow-none bg-transparent border-none p-1"
                  gradientColor="transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </ShineBorder>
            ))}
          </div>
        </div>

        <img
          src={robot}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
