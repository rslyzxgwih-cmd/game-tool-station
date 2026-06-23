import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertIncludes(file, text) {
  const content = read(file);
  if (!content.includes(text)) {
    throw new Error(`${file} is missing ${text}`);
  }
}

function assertOrder(file, first, second) {
  const content = read(file);
  const firstIndex = content.indexOf(first);
  const secondIndex = content.indexOf(second);

  if (firstIndex === -1 || secondIndex === -1 || firstIndex > secondIndex) {
    throw new Error(`${file} expected ${first} before ${second}`);
  }
}

const requiredFiles = [
  "src/components/BuildDecisionSections.tsx",
  "src/lib/buildDecisionData.ts",
  "app/builds/[slug]/page.tsx",
  "app/builds/monk-crossbow-build/page.tsx",
  "src/components/TopicClusterSupportPage.tsx",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Missing required file: ${file}`);
  }
}

assertIncludes("src/components/BuildDecisionSections.tsx", "function BuildStarRating");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function BuildSnapshot");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function PlayerProfileCard");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function BuildStrengthsWeaknesses");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function BuildQuickJumpNav");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function DecisionAnswerCard");
assertIncludes("src/components/BuildDecisionSections.tsx", "export function AlternativeRecommendations");
for (const text of [
  "Build Snapshot",
  "This Build Is For You If...",
  "Skip This Build If...",
  "Strengths",
  "Weaknesses",
  "Not For You?",
  "#decision-answer",
  "#recommended-skills",
  "#strengths-weaknesses",
  "#faq",
]) {
  assertIncludes("src/components/BuildDecisionSections.tsx", text);
}

for (const key of ["poe2-beginner-minion-witch-build", "poe2-mercenary-crossbow-starter-build", "monk-crossbow-build", "beginnerBuilds"]) {
  assertIncludes("src/lib/buildDecisionData.ts", key);
}

for (const file of ["app/builds/[slug]/page.tsx", "app/builds/monk-crossbow-build/page.tsx", "src/components/TopicClusterSupportPage.tsx"]) {
  assertIncludes(file, "BuildDecisionIntroSections");
  assertIncludes(file, "DecisionAnswerCard");
  assertIncludes(file, "AlternativeRecommendations");
  assertIncludes(file, "BuildQuickJumpNav");
  assertIncludes(file, "recommended-skills");
  assertIncludes(file, "faq");
}

assertOrder("app/builds/[slug]/page.tsx", 'id="faq"', "Fix Lag Before Changing This Build");

console.log("Validated build decision-support page templates.");
