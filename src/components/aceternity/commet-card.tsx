import { CometCard } from "@/components/ui/comet-card";

export function CometCardDemo() {
  return (
    <CometCard>
      <div className="relative cursor-grab">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl" />
        <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-zinc-500">component.tsx</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <pre className="text-zinc-300">
              <code>
                <span className="text-purple-400">import</span>{" "}
                <span className="text-zinc-300">
                  {"{"} Button {"}"}
                </span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">
                  &quot;@/components/ui/button&quot;
                </span>
                {"\n\n"}
                <span className="text-purple-400">export default</span>{" "}
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">MyComponent</span>
                <span className="text-zinc-300">() {"{"}</span>
                {"\n  "}
                <span className="text-purple-400">return</span>{" "}
                <span className="text-zinc-300">(</span>
                {"\n    "}
                <span className="text-pink-400">&lt;Button</span>{" "}
                <span className="text-blue-300">variant</span>
                <span className="text-zinc-300">=</span>
                <span className="text-green-400">&quot;default&quot;</span>
                <span className="text-pink-400">&gt;</span>
                {"\n      "}
                <span className="text-zinc-300">Hover The Card</span>
                {"\n    "}
                <span className="text-pink-400">&lt;/Button&gt;</span>
                {"\n  "}
                <span className="text-zinc-300">)</span>
                {"\n"}
                <span className="text-zinc-300">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </CometCard>
  );
}
