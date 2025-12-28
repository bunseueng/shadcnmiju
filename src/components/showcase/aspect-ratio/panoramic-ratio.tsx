import { AspectRatio } from "@/components/ui/aspect-ratio";

const PanomaricRatio = () => {
  return (
    <div className="w-full max-w-4xl">
      <AspectRatio ratio={3} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Panoramic 3:1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default PanomaricRatio;
