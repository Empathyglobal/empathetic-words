import React from 'react';
import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/pages/Home';
import PlayScreen from '../src/components/screens/PlayScreen';
import { ALL_NVC_SCENARIOS } from '../src/components/data/nvcScenariosAll';
it('finishes a story, tracks progress, and replays',()=>{
 render(<Home/>);
 fireEvent.click(screen.getByRole('button',{name:'Choose a story'}));
 const story=ALL_NVC_SCENARIOS[0];
 fireEvent.click(screen.getByText(story.title));
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));
 for(let i=0;i<4;i++){
  const step=story.steps[i];
  if(i===0){fireEvent.click(screen.getByText(step.options[(step.correctIndex+1)%4]));fireEvent.click(screen.getByRole('button',{name:'Try Again'}));}
  fireEvent.click(screen.getByText(step.options[step.correctIndex]));
  fireEvent.click(screen.getByRole('button',{name:i<3?'Next Step':'See My Kind Words'}));
 }
 expect(screen.getByText(story.steps[0].options[story.steps[0].correctIndex])).toBeTruthy();
 expect(screen.getByRole('button',{name:/Play.*Again/i})).toBeTruthy();
});
it('handles a missing scenario and changing to a valid one',()=>{
 const {rerender}=render(<PlayScreen scenarioId='missing' onBack={()=>{}}/>);
 expect(screen.getByText('Oops! Story Not Found')).toBeTruthy();
 rerender(<PlayScreen scenarioId={ALL_NVC_SCENARIOS[0].id} onBack={()=>{}}/>);
 expect(screen.getByRole('button',{name:'Start Building Kind Words'})).toBeTruthy();
});
it('opens and dismisses help using Escape',()=>{
 render(<Home/>);
 fireEvent.click(screen.getByRole('button',{name:/How to Play/}));
 expect(screen.getByRole('dialog')).toBeTruthy();
 fireEvent.keyDown(window,{key:'Escape'});
 expect(screen.queryByRole('dialog')).toBeNull();
 expect(document.body.style.overflow).toBe('');
});
it('does not send network requests during gameplay',()=>{
 const fetch=vi.fn(()=>{throw new Error('Unexpected network request');});vi.stubGlobal('fetch',fetch);
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:/Start \(random story\)/}));
 expect(fetch).not.toHaveBeenCalled();vi.unstubAllGlobals();
});
it('selects Me stories and retains that category when going back',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:'Me'}));
 fireEvent.click(screen.getByRole('button',{name:'Random Me Story'}));
 const title=screen.getByRole('heading',{level:2}).textContent;
 expect(ALL_NVC_SCENARIOS.some(s=>s.title===title)).toBe(true);
 fireEvent.click(screen.getByRole('button',{name:'Go back'}));
 expect(screen.getByRole('button',{name:'Me'}).className).toContain('bg-[#A8C5A8]');
});
it('cancels narrated speech when leaving a story',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:/Start \(random story\)/}));
 fireEvent.click(screen.getByRole('button',{name:'Read aloud'}));expect(window.speechSynthesis.speak).toHaveBeenCalled();
 fireEvent.click(screen.getByRole('button',{name:'Go back'}));expect(window.speechSynthesis.cancel).toHaveBeenCalled();
});
it('shows the empty progress screen without crashing',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:'Progress'}));
 expect(screen.getByRole('button',{name:'Go back'})).toBeTruthy();
});
it('does not write player activity to storage',()=>{
 const storage=vi.spyOn(Storage.prototype,'setItem');
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:/Start \(random story\)/}));
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));
 expect(storage).not.toHaveBeenCalled();storage.mockRestore();
});
it('opens help after gameplay starts and restores keyboard focus',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:/Start \(random story\)/}));
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));
 const opener=screen.getByRole('button',{name:'How to play'});opener.focus();fireEvent.click(opener);
 const dialog=screen.getByRole('dialog');expect(dialog.contains(document.activeElement)).toBe(true);
 const buttons=dialog.querySelectorAll('button');buttons[buttons.length-1].focus();fireEvent.keyDown(window,{key:'Tab'});expect(document.activeElement).toBe(buttons[0]);
 fireEvent.keyDown(window,{key:'Escape'});expect(screen.queryByRole('dialog')).toBeNull();expect(document.activeElement).toBe(opener);
});
it('disables narration if only remote voices exist',()=>{
 const original=window.speechSynthesis.getVoices;window.speechSynthesis.getVoices=()=>[{localService:false,lang:'en-US'}];
 render(<PlayScreen scenarioId={ALL_NVC_SCENARIOS[0].id} onBack={()=>{}}/>);
 expect(screen.getByRole('button',{name:'Read aloud'}).disabled).toBe(true);window.speechSynthesis.getVoices=original;
});
it('stops narration when the four-step activity starts',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:/Start \(random story\)/}));
 fireEvent.click(screen.getByRole('button',{name:'Read aloud'}));window.speechSynthesis.cancel.mockClear();
 fireEvent.click(screen.getByRole('button',{name:'Start Building Kind Words'}));expect(window.speechSynthesis.cancel).toHaveBeenCalled();
});
it('does not start an unrelated story when an empty category is selected',()=>{
 render(<Home/>);fireEvent.click(screen.getByRole('button',{name:'Playground'}));
 expect(screen.getByRole('button',{name:'No stories in this category'}).disabled).toBe(true);
 fireEvent.click(screen.getByRole('button',{name:'Choose a story'}));
 expect(screen.getByText('No stories here yet')).toBeTruthy();
});
