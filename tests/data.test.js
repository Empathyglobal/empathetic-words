import { describe, it, expect } from 'vitest';
import { ALL_NVC_SCENARIOS as scenarios, getScenarioMeta, filterScenariosByType, SCENARIO_TYPE_ORDER, groupScenariosByType, getRandomScenario } from '../src/components/data/nvcScenariosAll';
import { getEarnedBadges } from '../src/components/data/badges';
describe('scenario integrity', () => {
 it('has unique identifiers and valid four-step stories', () => {
  expect(scenarios.length).toBeGreaterThan(20);
  expect(new Set(scenarios.map(s=>s.id)).size).toBe(scenarios.length);
  for(const s of scenarios) {
   expect(s.title).toBeTruthy(); expect(s.situation).toBeTruthy();
   expect(s.steps.map(x=>x.type)).toEqual(['observation','feeling','need','request']);
   for(const step of s.steps){expect(step.options).toHaveLength(4);expect(step.options[step.correctIndex]).toBeTruthy();expect(step.explanation).toBeTruthy();}
  }
 });
 it('uses expansion metadata for filtering and random picks', () => {
  for(const type of SCENARIO_TYPE_ORDER){
   const expected=scenarios.filter(s=>getScenarioMeta(s.id).type===type);
   expect(filterScenariosByType(scenarios,type)).toEqual(expected);
   if(expected.length)for(let i=0;i<20;i++)expect(expected).toContain(getRandomScenario(type));
  }
  expect(filterScenariosByType(scenarios,'self').length).toBeGreaterThan(0);
 });
 it('groups every story exactly once',()=>expect(Object.values(groupScenariosByType(scenarios)).flat().length).toBe(scenarios.length));
 it('earns progress badges without requiring user accounts',()=>{
  const groups=groupScenariosByType(scenarios);
  expect(getEarnedBadges(new Set(),scenarios.length,groups,{})).toEqual([]);
  expect(getEarnedBadges(new Set([scenarios[0].id]),scenarios.length,groups,{}).some(b=>b.id==='first-story')).toBe(true);
  expect(getEarnedBadges(new Set(scenarios.map(s=>s.id)),scenarios.length,groups,{}).some(b=>b.id==='all-stories')).toBe(true);
 });
});
