// @/lib/schema.ts

import { z } from "zod";

// Phishing Campaign Schema
export const phishingCampaignSchema = z.object({
  title: z.string(),
  goal: z.string().describe("The main objective of the phishing awareness campaign"),
  targetAudience: z.string().describe("The department or group of employees to target"),
  budget: z.number().describe("Estimated budget in USD"),
  platforms: z.array(z.string()).describe("Delivery platforms (email, intranet, etc.)"),
  duration: z.string().describe("Campaign duration in weeks or months"),
  keyMessage: z.string().describe("Core security awareness message"),
  tags: z.array(z.string().describe("Keywords to categorize the campaign")),
});

export const phishingCampaignsSchema = z.array(phishingCampaignSchema);
export const phishingCampaignSchemaObject = z.object({ campaigns: phishingCampaignsSchema });

export type PhishingCampaign = z.infer<typeof phishingCampaignSchema>;

// Breach Impact Schema
export const breachImpactSchema = z.object({
  title: z.string(),
  severity: z.string().describe("Overall severity level of the breach"),
  financialImpact: z.number().describe("Estimated financial impact in USD"),
  affectedSystems: z.array(z.string()).describe("List of affected systems and services"),
  duration: z.string().describe("Estimated recovery time"),
  mitigationSteps: z.array(z.string().describe("Recommended steps to mitigate the breach")),
  tags: z.array(z.string().describe("Keywords to categorize the breach")),
});

export const breachImpactsSchema = z.array(breachImpactSchema);
export const breachImpactSchemaObject = z.object({ impacts: breachImpactsSchema });

export type BreachImpact = z.infer<typeof breachImpactSchema>;

// Training Content Schema
export const trainingModuleSchema = z.object({
  title: z.string(),
  goal: z.string().describe("Learning objectives of the training module"),
  targetAudience: z.string().describe("Intended audience for the training"),
  duration: z.string().describe("Expected duration of the training module"),
  difficulty: z.string().describe("Difficulty level of the content"),
  topics: z.array(z.string()).describe("Main topics covered in the module"),
  format: z.string().describe("Delivery format (video, interactive, presentation)"),
  tags: z.array(z.string()),
});

export const trainingModulesSchema = z.array(trainingModuleSchema);
export const trainingModuleSchemaObject = z.object({ modules: trainingModulesSchema });

export type TrainingModule = z.infer<typeof trainingModuleSchema>;