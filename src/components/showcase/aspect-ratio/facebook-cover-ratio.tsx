import { AspectRatio } from "@/components/ui/aspect-ratio";

const FacebookCoverRatio = () => {
  return (
    <div className="w-full max-w-4xl">
      <AspectRatio ratio={820 / 312} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Facebook Cover 820:312"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default FacebookCoverRatio;
