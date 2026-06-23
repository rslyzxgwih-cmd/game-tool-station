import advisorRules from "./buildAdvisorRules.json";

export type PreferredPlaystyle = "Fast" | "Tanky" | "Summoner" | "Ranged" | "Melee" | "Spellcaster";
export type ExperienceLevel = "Complete Beginner" | "Some ARPG Experience" | "Experienced";
export type ComplexityPreference = "Very Simple" | "Moderate" | "Doesn't Matter";

export type AdvisorInput = {
  playstyle: PreferredPlaystyle;
  experienceLevel: ExperienceLevel;
  complexity: ComplexityPreference;
};

export type AdvisorExplanation = {
  playstyleFit: string;
  difficultyFit: string;
  learningCurve: string;
  strengths: string;
  weaknesses: string;
};

export type BuildAdvisorRule = {
  id: string;
  priority: number;
  playstyles: PreferredPlaystyle[];
  experienceLevels: ExperienceLevel[];
  complexities: ComplexityPreference[];
  buildTitle: string;
  buildSlug: string;
  classTitle: string;
  classSlug: string;
  confidenceScore: number;
  reasons: string[];
  suggestedSkillSlugs: string[];
  explanation: AdvisorExplanation;
};

export const preferredPlaystyles: PreferredPlaystyle[] = ["Fast", "Tanky", "Summoner", "Ranged", "Melee", "Spellcaster"];
export const experienceLevels: ExperienceLevel[] = ["Complete Beginner", "Some ARPG Experience", "Experienced"];
export const complexityPreferences: ComplexityPreference[] = ["Very Simple", "Moderate", "Doesn't Matter"];

export const buildAdvisorRules = advisorRules as BuildAdvisorRule[];

function scoreRule(rule: BuildAdvisorRule, input: AdvisorInput) {
  const playstyleMatch = rule.playstyles.includes(input.playstyle);
  const experienceMatch = rule.experienceLevels.includes(input.experienceLevel);
  const complexityMatch = rule.complexities.includes(input.complexity);

  return (
    (playstyleMatch ? 100 : 0) +
    (experienceMatch ? 40 : 0) +
    (complexityMatch ? 20 : 0) +
    rule.priority
  );
}

export function getBuildAdvisorRecommendation(input: AdvisorInput) {
  return [...buildAdvisorRules].sort((a, b) => scoreRule(b, input) - scoreRule(a, input))[0];
}
