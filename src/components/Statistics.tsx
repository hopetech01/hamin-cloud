import NumberTicker from "./ui/number-ticker";

export const Statistics = () => {
  interface statsProps {
    quantity: number;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: 15, // Example: Number of businesses served
      description: "Businesses Served",
    },
    {
      quantity: 2800, // Example: Number of AI models deployed
      description: "AI Models Deployed",
    },
    {
      quantity: 120, // Example: Number of datasets labeled and delivered
      description: "Datasets Labeled",
    },
    {
      quantity: 6, // Example: Number of services/products offered
      description: "Service Offerings",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <NumberTicker value={quantity} decimalPlaces={0} />
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
