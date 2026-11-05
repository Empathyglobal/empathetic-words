import React from 'react';
import { it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/pages/Home';
import { ALL_NVC_SCENARIOS, getScenarioMeta } from '../src/components/data/nvcScenariosAll';
function finish(story){
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));
 for(let i=0;i<4;i++){
  const step=story.steps[i];fireEvent.click(screen.getByText(step.options[step.correctIndex]));
  fireEvent.click(screen.getByRole('button',{name:i<3?'Next Step':'See My Kind Words'}));
 }
 expect(screen.getByRole('heading',{name:'Wonderful! 🌟'})).toBeTruthy();
}
it.each(ALL_NVC_SCENARIOS)('completes and replays $id',story=>{
 const {unmount}=render(<Home/>);fireEvent.click(screen.getByRole('button',{name:'Choose a story'}));
 fireEvent.click(screen.getByText(story.title));finish(story);
 fireEvent.click(screen.getByRole('button',{name:'Play Again'}));expect(screen.getByRole('heading',{name:story.title})).toBeTruthy();finish(story);
 fireEvent.click(screen.getByRole('button',{name:'Home'}));expect(screen.getByText(`1 of ${ALL_NVC_SCENARIOS.length} stories completed`)).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:'Progress'}));expect(screen.getAllByText('100%').length).toBeGreaterThan(0);expect(screen.getByText('First Steps')).toBeTruthy();
 unmount();render(<Home/>);expect(screen.queryByText(`1 of ${ALL_NVC_SCENARIOS.length} stories completed`)).toBeNull();
});
it('random replay retains Me filter and partial play does not count completion',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:'Me'}));fireEvent.click(screen.getByRole('button',{name:'Random Me Story'}));
 const story=ALL_NVC_SCENARIOS.find(s=>s.title===screen.getByRole('heading',{level:2}).textContent);expect(getScenarioMeta(story.id).type).toBe('self');finish(story);
 fireEvent.click(screen.getByRole('button',{name:'New Random Story'}));const next=ALL_NVC_SCENARIOS.find(s=>s.title===screen.getByRole('heading',{level:2}).textContent);expect(getScenarioMeta(next.id).type).toBe('self');
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));fireEvent.click(screen.getByText(next.steps[0].options[next.steps[0].correctIndex]));
 fireEvent.click(screen.getByRole('button',{name:'Go back'}));fireEvent.click(screen.getByRole('button',{name:'Go back'}));
 expect(screen.getByText(`1 of ${ALL_NVC_SCENARIOS.length} stories completed`)).toBeTruthy();
});
