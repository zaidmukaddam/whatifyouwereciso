"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { experimental_useObject as useObject } from "ai/react";
import { trainingModuleSchemaObject } from "@/lib/schema";

export function TrainingContentGenerator() {
  const [input, setInput] = useState("");
  const {
    object: trainingData,
    submit,
    isLoading,
  } = useObject({
    api: "/api/tools/training-content",
    schema: trainingModuleSchemaObject,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(input);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 font-bold text-2xl">Security Training Content Generator</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the training content you need..."
          className="mb-4"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input}
          className="w-full rounded border border-border bg-background/80 px-4 py-2 shadow-sm"
        >
          {isLoading ? "Generating..." : "Generate Training"}
        </button>
      </form>

      {trainingData?.modules?.map((module, index) => (
        <div key={module?.title} className="mb-6 rounded-lg border p-4">
          <h2 className="mb-4 font-bold text-black-a12 text-xl dark:text-white-a12">{module?.title}</h2>
          <div className="flex flex-col">
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Learning Objectives</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{module?.goal}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Target Audience</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{module?.targetAudience}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Duration</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{module?.duration}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Difficulty Level</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{module?.difficulty}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {module?.topics?.map((topic, i) => (
                  <span key={topic} className="rounded border bg-secondary px-2 py-1 text-sm shadow-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Format</h3>
              <p className='mt-0 pt-0 font-medium text-green-500'>{module?.format}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {module?.tags?.map((tag, i) => (
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