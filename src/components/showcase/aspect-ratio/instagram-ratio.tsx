import { AspectRatio } from "@/components/ui/aspect-ratio";

const InstagramRatio = () => {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={1} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Instagram 1:1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default InstagramRatio;
