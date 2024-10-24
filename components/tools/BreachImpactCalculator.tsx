// /components/tools/BreachImpactCalculator.tsx
"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { experimental_useObject as useObject } from "ai/react";
import { breachImpactSchemaObject } from "@/lib/schema";

export function BreachImpactCalculator() {
  const [input, setInput] = useState("");
  const {
    object: impactData,
    submit,
    isLoading,
  } = useObject({
    api: "/api/tools/breach-impact",
    schema: breachImpactSchemaObject,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(input);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 font-bold text-2xl">Breach Impact Calculator</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the breach scenario to analyze..."
          className="mb-4 min-h-11"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input}
          className="w-full rounded border border-border bg-background/80 px-4 py-2 shadow-sm"
        >
          {isLoading ? "Calculating..." : "Calculate Impact"}
        </button>
      </form>

      {impactData?.impacts?.map((impact) => (
        <div key={impact?.title} className="mb-6 rounded-lg border p-4">
          <h2 className="mb-4 font-bold text-black-a12 text-xl dark:text-white-a12">{impact?.title}</h2>
          <div className="flex flex-col">
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Severity</h3>
              <p className="mt-0 pt-0 font-medium text-pink-11">{impact?.severity}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Financial Impact</h3>
              <p className="mt-0 pt-0 text-destructive">${impact?.financialImpact?.toLocaleString()}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Affected Systems</h3>
              <div className="flex flex-wrap gap-2">
                {impact?.affectedSystems?.map((system, i) => (
                  <span key={system} className="rounded bg-green-400 px-2 py-1 text-sm dark:bg-green-400">
                    {system}
                  </span>
                ))}
              </div>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Recovery Duration</h3>
              <p className="mt-0 pt-0">{impact?.duration}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Mitigation Steps</h3>
              <div
                className='flex flex-col gap-2'
              >
                {impact?.mitigationSteps?.map((step, i) => (
                  <div key={step} className='flex gap-2'>
                    <span>{i+1}.</span>
                    <p className='mt-0 pt-0'>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {impact?.tags?.map((tag, i) => (
                  <span key={tag} className="rounded bg-muted px-2 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
