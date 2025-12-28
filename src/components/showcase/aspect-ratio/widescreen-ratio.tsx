import { AspectRatio } from "@/components/ui/aspect-ratio";

const WidescreenRatio = () => {
  return (
    <div className="w-full max-w-2xl">
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Widescreen 16:9"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default WidescreenRatio;
