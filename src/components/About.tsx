"use client";
import { Statistics } from "./Statistics";
import gpu from "../assets/gpu.png";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "./ui/particles";

export const About = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section
      id="about"
      className="container py-12 sm:py-16"
    >
      <div className="relative bg-muted/50 border rounded-lg py-12 overflow-hidden">
        {/* Particles Background */}
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />

        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={gpu}
            alt="Illustration of DataFlux services"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                DataFlux
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At DataFlux, we empower businesses, startups, and enterprises with state-of-the-art AI infrastructure. Our platform provides GPU-powered virtual machines and pods, enabling you to train, fine-tune, and deploy AI models seamlessly. With our pay-as-you-go model, you only pay for the resources you use.
                <br /><br />
                We offer a comprehensive suite of services including pre-trained models, customer-specific model hosting, and APIs to integrate AI into your applications effortlessly. Our CLI tool and library allow you to leverage these capabilities with just a few lines of code.
                <br /><br />
                Additionally, our data platform streamlines data gathering and labeling, delivering high-quality datasets tailored to your needs. Whether you’re building cutting-edge AI solutions or scaling your existing infrastructure, DataFlux is your trusted partner in innovation.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
