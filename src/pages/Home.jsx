import React, { useState } from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import StoryPickerScreen from '../components/screens/StoryPickerScreen';
import PlayScreen from '../components/screens/PlayScreen';
import EndScreen from '../components/screens/EndScreen';
import ProgressScreen from '../components/screens/ProgressScreen';
import { ALL_NVC_SCENARIOS, getRandomScenario, getScenarioById, groupScenariosByType } from '../components/data/nvcScenariosAll';
import { getEarnedBadges } from '../components/data/badges';

export default function Home() {
  // Screen state machine: "home" | "pick" | "play" | "end" | "progress"
  const [screen, setScreen] = useState("home");
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);
  const [chosenTexts, setChosenTexts] = useState({});
  const [completedStories, setCompletedStories] = useState(new Set());
  const [selectedType, setSelectedType] = useState("all");
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  
  // Performance tracking: { stepType: { attempts: number, correct: number } }
  const [performanceData, setPerformanceData] = useState({
    observation: { attempts: 0, correct: 0 },
    feeling: { attempts: 0, correct: 0 },
    need: { attempts: 0, correct: 0 },
    request: { attempts: 0, correct: 0 }
  });

  // Navigation handlers
  const handleStartRandom = () => {
    const scenario = getRandomScenario(selectedType);
    setSelectedScenarioId(scenario.id);
    setChosenTexts({});
    setScreen("play");
  };

  const handleChooseStory = () => {
    setScreen("pick");
  };

  const handleSelectStory = (storyId) => {
    setSelectedScenarioId(storyId);
    setChosenTexts({});
    setScreen("play");
  };

  const handleBackToHome = () => {
    setScreen("home");
    setSelectedScenarioId(null);
  };

  const handleBackFromPicker = () => {
    setScreen("home");
  };

  const handleBackFromPlay = () => {
    setScreen("pick");
  };

  const handleCompletePlay = (texts) => {
    setChosenTexts(texts);
    setCompletedStories(prev => new Set([...prev, selectedScenarioId]));
    setScreen("end");
  };

  const handleRestartFromEnd = () => {
    const scenario = getRandomScenario(selectedType);
    setSelectedScenarioId(scenario.id);
    setChosenTexts({});
    setScreen("play");
  };

  const handlePlayAgainSameStory = () => {
    setChosenTexts({});
    setScreen("play");
  };

  const handleViewProgress = () => {
    setScreen("progress");
  };

  const handleTrackPerformance = (stepType, isCorrect) => {
    setPerformanceData(prev => {
      const newData = {
        ...prev,
        [stepType]: {
          attempts: prev[stepType].attempts + 1,
          correct: prev[stepType].correct + (isCorrect ? 1 : 0)
        }
      };
      
      // Update streak tracking
      if (isCorrect) {
        newData[stepType].streak = (prev[stepType].streak || 0) + 1;
      } else {
        newData[stepType].streak = 0;
      }
      
      return newData;
    });
  };

  // Calculate earned badges
  const scenariosByType = groupScenariosByType(ALL_NVC_SCENARIOS);
  const earnedBadges = getEarnedBadges(
    completedStories,
    ALL_NVC_SCENARIOS.length,
    scenariosByType,
    performanceData
  );

  // Render the appropriate screen
  switch (screen) {
    case "home":
      return (
        <HomeScreen
          onStartRandom={handleStartRandom}
          onChooseStory={handleChooseStory}
          completedCount={completedStories.size}
          totalCount={ALL_NVC_SCENARIOS.length}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          showHowToPlay={showHowToPlay}
          onHowToPlayToggle={() => setShowHowToPlay(!showHowToPlay)}
          onViewProgress={handleViewProgress}
          earnedBadges={earnedBadges}
        />
      );

    case "pick":
      return (
        <StoryPickerScreen
          onBack={handleBackFromPicker}
          onSelectStory={handleSelectStory}
          completedStories={completedStories}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      );

    case "play":
      return (
        <PlayScreen
          scenarioId={selectedScenarioId}
          onBack={handleBackFromPlay}
          onComplete={handleCompletePlay}
          onTrackPerformance={handleTrackPerformance}
        />
      );

    case "end":
      return (
        <EndScreen
          kindWords={chosenTexts}
          onRestart={handleRestartFromEnd}
          onGoHome={handleBackToHome}
          onPlayAgain={handlePlayAgainSameStory}
        />
      );

    case "progress":
      return (
        <ProgressScreen
          onBack={handleBackToHome}
          completedCount={completedStories.size}
          totalCount={ALL_NVC_SCENARIOS.length}
          performance={performanceData}
          earnedBadges={earnedBadges}
          completedStories={completedStories}
          scenariosByType={scenariosByType}
        />
      );

    default:
      return (
        <HomeScreen
          onStartRandom={handleStartRandom}
          onChooseStory={handleChooseStory}
          completedCount={completedStories.size}
          totalCount={ALL_NVC_SCENARIOS.length}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          showHowToPlay={showHowToPlay}
          onHowToPlayToggle={() => setShowHowToPlay(!showHowToPlay)}
          onViewProgress={handleViewProgress}
          earnedBadges={earnedBadges}
        />
      );
  }
}