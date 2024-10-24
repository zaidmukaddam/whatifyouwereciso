import { Link as NextViewTransition } from "next-view-transitions";

export function ToolsList() {
  const tools = [
    {
      title: "Phishing Campaign Generator",
      href: "/tools/phishing-campaign",
    },
    {
      title: "Breach Impact Calculator",
      href: "/tools/breach-impact",
    },
    {
      title: "Training Content Generator",
      href: "/tools/training-content",
    },
  ];

  return (
    <div className="mt-6">
      <NextViewTransition href="/tools" className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          Tools ({tools.length})
        </h2>
      </NextViewTransition>
      <div className="border-border border-t" />
      <div className="flex flex-col">
        {tools.map((tool) => (
          <NextViewTransition
            key={tool.title}
            href={tool.href}
            className="border-border border-b py-2 transition-colors"
          >
            <p >{tool.title}</p>
          </NextViewTransition>
        ))}
      </div>
    </div>
  );
}