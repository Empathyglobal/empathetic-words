// Badge definitions for gamification

export const BADGES = [
  {
    id: "first-story",
    title: "First Steps",
    description: "Complete your first story",
    emoji: "🌱",
    color: "#A8C5A8",
    requirement: { type: "total", count: 1 }
  },
  {
    id: "five-stories",
    title: "Kind Words Explorer",
    description: "Complete 5 stories",
    emoji: "⭐",
    color: "#E8C97E",
    requirement: { type: "total", count: 5 }
  },
  {
    id: "ten-stories",
    title: "Communication Champion",
    description: "Complete 10 stories",
    emoji: "🏆",
    color: "#E8C97E",
    requirement: { type: "total", count: 10 }
  },
  {
    id: "twenty-stories",
    title: "Kind Words Master",
    description: "Complete 20 stories",
    emoji: "👑",
    color: "#E8C97E",
    requirement: { type: "total", count: 20 }
  },
  {
    id: "all-stories",
    title: "Complete Collection",
    description: "Complete all stories",
    emoji: "💎",
    color: "#B8A5D6",
    requirement: { type: "all" }
  },
  {
    id: "master-home",
    title: "Home Hero",
    description: "Complete all Home scenarios",
    emoji: "🏠",
    color: "#7EB5D6",
    requirement: { type: "category", category: "home" }
  },
  {
    id: "master-school",
    title: "School Star",
    description: "Complete all School scenarios",
    emoji: "📚",
    color: "#7EB5D6",
    requirement: { type: "category", category: "school" }
  },
  {
    id: "master-self",
    title: "Self-Kindness Guru",
    description: "Complete all Me scenarios",
    emoji: "💚",
    color: "#A8C5A8",
    requirement: { type: "category", category: "self" }
  },
  {
    id: "perfect-observer",
    title: "Perfect Observer",
    description: "Get 10 observation steps correct in a row",
    emoji: "📷",
    color: "#7EB5D6",
    requirement: { type: "streak", step: "observation", count: 10 }
  },
  {
    id: "feeling-expert",
    title: "Feeling Expert",
    description: "Get 10 feeling steps correct in a row",
    emoji: "❤️",
    color: "#E8A5A5",
    requirement: { type: "streak", step: "feeling", count: 10 }
  },
  {
    id: "needs-master",
    title: "Needs Master",
    description: "Get 10 need steps correct in a row",
    emoji: "✨",
    color: "#B8A5D6",
    requirement: { type: "streak", step: "need", count: 10 }
  },
  {
    id: "request-champion",
    title: "Request Champion",
    description: "Get 10 request steps correct in a row",
    emoji: "💬",
    color: "#E8C97E",
    requirement: { type: "streak", step: "request", count: 10 }
  }
];

// Check if a badge is earned
export function checkBadgeEarned(badge, completedStories, totalStories, scenariosByType, performance) {
  const req = badge.requirement;
  
  if (req.type === "total") {
    return completedStories.size >= req.count;
  }
  
  if (req.type === "all") {
    return completedStories.size === totalStories;
  }
  
  if (req.type === "category") {
    const categoryScenarios = scenariosByType[req.category] || [];
    if (categoryScenarios.length === 0) return false;
    return categoryScenarios.every(s => completedStories.has(s.id));
  }
  
  if (req.type === "streak" && performance) {
    const stepData = performance[req.step];
    if (!stepData || !stepData.streak) return false;
    return stepData.streak >= req.count;
  }
  
  return false;
}

// Get all earned badges
export function getEarnedBadges(completedStories, totalStories, scenariosByType, performance) {
  return BADGES.filter(badge => 
    checkBadgeEarned(badge, completedStories, totalStories, scenariosByType, performance)
  );
}

// Get next badge to earn (closest unearned)
export function getNextBadge(completedStories, totalStories, scenariosByType, performance) {
  const unearnedBadges = BADGES.filter(badge => 
    !checkBadgeEarned(badge, completedStories, totalStories, scenariosByType, performance)
  );
  
  // Prioritize total count badges that are close
  const totalBadges = unearnedBadges.filter(b => b.requirement.type === "total");
  if (totalBadges.length > 0) {
    return totalBadges.sort((a, b) => a.requirement.count - b.requirement.count)[0];
  }
  
  return unearnedBadges[0];
}
