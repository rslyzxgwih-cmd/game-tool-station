import fs from "node:fs";
import path from "node:path";

const rulesPath = path.join(process.cwd(), "src", "lib", "buildAdvisorRules.json");
const rules = JSON.parse(fs.readFileSync(rulesPath, "utf8"));

const requiredExamples = [
  ["Fast", "Complete Beginner", "Very Simple", "Mercenary Crossbow"],
  ["Tanky", "Complete Beginner", "Very Simple", "Warrior"],
  ["Summoner", "Complete Beginner", "Very Simple", "Minion Witch"],
  ["Spellcaster", "Complete Beginner", "Moderate", "Flame Wall"],
  ["Melee", "Some ARPG Experience", "Moderate", "Monk"],
];

const missingExamples = requiredExamples.filter(([playstyle, experience, complexity, expectedTitle]) => {
  return !rules.some((rule) => {
    return (
      rule.playstyles.includes(playstyle) &&
      rule.experienceLevels.includes(experience) &&
      rule.complexities.includes(complexity) &&
      rule.buildTitle.includes(expectedTitle)
    );
  });
});

if (missingExamples.length) {
  throw new Error(`Missing advisor examples: ${missingExamples.map((item) => item.join(" + ")).join("; ")}`);
}

for (const rule of rules) {
  const problems = [];

  if (!rule.id) problems.push("id");
  if (!rule.buildSlug) problems.push("buildSlug");
  if (!rule.classSlug) problems.push("classSlug");
  if (!rule.buildTitle) problems.push("buildTitle");
  if (!Number.isInteger(rule.confidenceScore)) problems.push("confidenceScore");
  if (!Array.isArray(rule.reasons) || rule.reasons.length < 3 || rule.reasons.length > 5) problems.push("reasons");
  if (!Array.isArray(rule.suggestedSkillSlugs) || rule.suggestedSkillSlugs.length < 2) problems.push("suggestedSkillSlugs");
  if (!rule.explanation?.playstyleFit) problems.push("explanation.playstyleFit");
  if (!rule.explanation?.difficultyFit) problems.push("explanation.difficultyFit");
  if (!rule.explanation?.learningCurve) problems.push("explanation.learningCurve");
  if (!rule.explanation?.strengths) problems.push("explanation.strengths");
  if (!rule.explanation?.weaknesses) problems.push("explanation.weaknesses");

  if (problems.length) {
    throw new Error(`Rule ${rule.id ?? "(missing id)"} is missing: ${problems.join(", ")}`);
  }
}

function scoreRule(rule, input) {
  return (
    (rule.playstyles.includes(input.playstyle) ? 100 : 0) +
    (rule.experienceLevels.includes(input.experienceLevel) ? 40 : 0) +
    (rule.complexities.includes(input.complexity) ? 20 : 0) +
    rule.priority
  );
}

for (const [playstyle, experienceLevel, complexity, expectedTitle] of requiredExamples) {
  const selected = [...rules].sort((a, b) =>
    scoreRule(b, { playstyle, experienceLevel, complexity }) - scoreRule(a, { playstyle, experienceLevel, complexity }),
  )[0];

  if (!selected.buildTitle.includes(expectedTitle)) {
    throw new Error(
      `Expected ${playstyle} + ${experienceLevel} + ${complexity} to select ${expectedTitle}, got ${selected.buildTitle}`,
    );
  }
}

console.log(`Validated ${rules.length} deterministic build advisor rules and ${requiredExamples.length} required selections.`);
