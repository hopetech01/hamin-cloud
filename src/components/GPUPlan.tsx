import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface GPUPlanProps {
  type?: string;
  basePrice: number;
  maxGPUs: number;
  details: {
    [key: number]: string[];
  };
}

export const GPUPlan: React.FC<GPUPlanProps> = ({ type, basePrice, maxGPUs, details }) => {
  const [gpuCount, setGpuCount] = useState<number>(1);

  const handleSliderChange = (value: number[]) => {
    setGpuCount(value[0]);
  };

  const totalPrice = (basePrice * gpuCount).toFixed(2);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full">
        <h3 className="text-lg font-semibold text-center">{type || "Custom GPU Plan"}</h3>
        <div className="text-2xl font-bold text-center mt-2">${totalPrice}/hr</div>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <Slider
          defaultValue={[1]}
          min={1}
          max={maxGPUs}
          step={1}
          onValueChange={handleSliderChange}
          className={cn("w-full", "my-4")}
        />
        <div className="text-center">Number of GPUs: {gpuCount}</div>
      </div>
      <ul className="space-y-2 mt-4 w-full px-2">
        {details[gpuCount]?.map((detail, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" /> {detail}
          </li>
        )) || <li>No details available for this GPU count.</li>}
      </ul>
      <div className="mt-6 w-full">
        <Button className="w-full">Choose Plan</Button>
      </div>
    </div>
  );
};
