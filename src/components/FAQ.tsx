import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="container py-12 sm:py-18">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is OtterByte?</AccordionTrigger>
          <AccordionContent>
          OtterByte provides cutting-edge AI infrastructure solutions for businesses, startups, and companies. We offer GPU-powered virtual machines, pods, and platforms to train, fine-tune, and deploy AI models efficiently.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How does OtterByte pricing work?</AccordionTrigger>
          <AccordionContent>
            We use a pay-as-you-go model for our virtual machines and GPU pods. For our model-serving platform, customers are charged per request.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What services do you offer?</AccordionTrigger>
          <AccordionContent>
          OtterByte offers:
            <ul className="list-disc pl-6">
              <li>GPU-powered virtual machines and pods.</li>
              <li>A platform to deploy pre-trained and customer-specific AI models with APIs.</li>
              <li>A CLI tool and library for seamless integration into your workflows.</li>
              <li>Data gathering and labeling services to support your AI projects.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I train and fine-tune my models on OtterByte?</AccordionTrigger>
          <AccordionContent>
            Absolutely! Our infrastructure allows you to train and fine-tune models with just a few lines of code using our CLI tool or library. We support a variety of frameworks and configurations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Do you provide data labeling services?</AccordionTrigger>
          <AccordionContent>
            Yes, we have a dedicated platform for data gathering and labeling. We ensure high-quality, labeled datasets tailored to your project requirements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How do I get started with OtterByte?</AccordionTrigger>
          <AccordionContent>
            Getting started is easy! Sign up on our platform, choose the services you need, and start leveraging our AI infrastructure. Our CLI and library documentation will guide you through the process.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions? {" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
}
