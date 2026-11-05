// Single source of truth for all NVC scenarios

import { NVC_SCENARIOS } from './nvcScenarios';
import { 
  NVC_SCENARIOS_EXTRA,
  SCENARIO_TYPE_ORDER,
  SCENARIO_TYPE_LABELS as SCENARIO_TYPE_LABELS_ORIGINAL,
  SCENARIO_META,
} from './nvcScenariosExtra';
import { NVC_SCENARIOS_ME_EXPANSION, ME_SCENARIO_META_PATCH } from './nvcScenariosMeExpansion';

// Combine all scenarios
export const ALL_NVC_SCENARIOS = [...NVC_SCENARIOS, ...NVC_SCENARIOS_EXTRA, ...NVC_SCENARIOS_ME_EXPANSION];

// Merge metadata
const SCENARIO_META_ALL = { ...SCENARIO_META, ...ME_SCENARIO_META_PATCH };

// Override getScenarioMeta to use merged metadata with fallback
export function getScenarioMeta(id) {
  return SCENARIO_META_ALL[id] || { type: "school", difficulty: "easy", tags: [] };
}

// Update label for "self" to "Me"
export const SCENARIO_TYPE_LABELS = {
  ...SCENARIO_TYPE_LABELS_ORIGINAL,
  self: "Me"
};

// Re-export utilities
export {
  SCENARIO_TYPE_ORDER,
  SCENARIO_META_ALL as SCENARIO_META
};

// Helper to get a random scenario (optionally filtered by type)
export function getRandomScenario(type = "all") {
  const filtered = filterScenariosByType(ALL_NVC_SCENARIOS, type);
  if (filtered.length === 0) return ALL_NVC_SCENARIOS[0];
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

// Helper to find a scenario by ID
export function getScenarioById(id) {
  return ALL_NVC_SCENARIOS.find(scenario => scenario.id === id);
}

// Group scenarios by type
export function groupScenariosByType(scenarios) {
  const groups = {};
  
  SCENARIO_TYPE_ORDER.forEach(type => {
    groups[type] = scenarios
      .filter(s => getScenarioMeta(s.id).type === type)
      .sort((a, b) => a.title.localeCompare(b.title));
  });
  
  return groups;
}

// Use the merged metadata for both original and expansion scenarios.
export function filterScenariosByType(scenarios, type) {
  return type === 'all' ? scenarios : scenarios.filter(s => getScenarioMeta(s.id).type === type);
}
export function sortScenariosByTypeThenTitle(scenarios) {
  return [...scenarios].sort((a, b) => SCENARIO_TYPE_ORDER.indexOf(getScenarioMeta(a.id).type) - SCENARIO_TYPE_ORDER.indexOf(getScenarioMeta(b.id).type) || a.title.localeCompare(b.title));
}
