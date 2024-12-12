import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const customers = [
  {
    name: "MCI",
    body: "Revolutionizing AI Infrastructure.",
    img: "/mci.png",
  },
  {
    name: "Bale",
    body: "Driving innovation for businesses.",
    img: "/bale.png",
  },
  {
    name: "HopeTech",
    body: "Empowering tech solutions.",
    img: "/hopetech.png",
  },
  {
    name: "Roshan",
    body: "Scaling AI like never before.",
    img: "/roshan.png",
  },
  {
    name: "Abino",
    body: "Unleashing new possibilities.",
    img: "/abino.png",
  },
];

const firstRow = customers.slice(0, customers.length / 2);
const secondRow = customers.slice(customers.length / 2);

const CustomerCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Customers() {
  return (
    <section id="customers" className="container pt-12 sm:py-18">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Trusted{" "}
        </span>
          by Industry Leaders
      </h2>

      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((customer) => (
            <CustomerCard key={customer.name} {...customer} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((customer) => (
            <CustomerCard key={customer.name} {...customer} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
