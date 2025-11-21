import { GlobeDemo } from "./Globe";
import ShimmerButton from "./ui/shimmer-button";

export const Hero = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 px-4 lg:px-0 py-5 md:py-10 overflow-x-hidden">
      <div className="text-center lg:text-start space-y-6 max-w-full">
        <main className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight flex flex-col lg:flex-row lg:flex-wrap lg:items-baseline gap-x-2 max-w-full break-words">
          <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            OtterByte
          </span>
          <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Global AI Infrastructure
          </span>
        </main>

        <p className="text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          On-demand GPUs, seamless model training, and scalable deployments—fully managed, pay-as-you-go. Accelerate your AI projects with a few lines of code.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:items-center">
          <ShimmerButton
            className="w-full md:w-1/3 shadow-2xl bg-green-500 dark:bg-green-500 hover:bg-green-600 active:bg-green-700"
            onClick={() => {
              window.location.href = "mailto:smbhop@gmail.com";
            }}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Contact Us
            </span>
          </ShimmerButton>
        </div>

      </div>

      {/* Globe column */}
      <div className="z-10 flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-[520px]">
          <GlobeDemo />
        </div>
      </div>

      <div className="shadow" />
    </section>
  );
};
