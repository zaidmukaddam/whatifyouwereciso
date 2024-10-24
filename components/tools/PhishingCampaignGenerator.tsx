"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { experimental_useObject as useObject } from "ai/react";
import { phishingCampaignSchemaObject } from "@/lib/schema";

export function PhishingCampaignGenerator() {
  const [input, setInput] = useState("");
  const {
    object: campaignData,
    submit,
    isLoading,
  } = useObject({
    api: "/api/tools/phishing-campaign",
    schema: phishingCampaignSchemaObject,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(input);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 font-bold text-2xl">Phishing Campaign Generator</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your phishing awareness campaign needs..."
          className="mb-4 min-h-11"
          disabled={isLoading}
        />
       <button
          type="submit"
          disabled={isLoading || !input}
          className="w-full rounded border border-border bg-background/80 px-4 py-2 shadow-sm"
        >
          {isLoading ? "Generating..." : "Generate Campaign"}
        </button>
      </form>

      {campaignData?.campaigns?.map((campaign) => (
        <div key={campaign?.title} className="mb-6 rounded-lg border p-4">
          <h2 className="mb-4 font-bold text-black-a12 text-xl dark:text-white-a12">{campaign?.title}</h2>
          <div className="flex flex-col">
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Goal</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{campaign?.goal}</p>
            </div>
            <div className='mb-2 gap-1'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Target Audience</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{campaign?.targetAudience}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Key Message</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{campaign?.keyMessage}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Duration</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>{campaign?.duration}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Budget</h3>
              <p className='mt-0 pt-0 font-medium text-gray-11'>${campaign?.budget?.toLocaleString()}</p>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {campaign?.platforms?.map((platform, i) => (
                  <span key={platform} className="rounded bg-blue-400 px-2 py-1 text-sm dark:bg-blue-300">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className='mb-2'>
              <h3 className="font-semibold text-black-a12 dark:text-white-a12">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {campaign?.tags?.map((tag, i) => (
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