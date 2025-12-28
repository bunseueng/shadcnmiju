import ThemeTesting from "./ThemeTesting";

const ThemePage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-2 py-10 border border-dashed">
        <p>Themes</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Production-ready shadcn/ui themes powered by TweakCN.
        </h1>
        <p className="max-w-4xl mx-auto">
          Drop-in themes with carefully crafted color tokens, typography, and
          dark mode support. Use with shadcn CLI or import CSS into your design
          system.
        </p>
      </div>
      <div className="border border-dashed p-5">
        <ThemeTesting />
      </div>
    </section>
  );
};

export default ThemePage;
