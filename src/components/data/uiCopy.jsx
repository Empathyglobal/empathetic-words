// UI Copy for Kind Words Builder - Primary Level

export const appTitle = "Kind Words Builder";

export const tagline = "Build a kind sentence in 4 steps: Camera → Heart → Need → Ask";

export const shortDescription = "Read a tiny story. Choose the best step each time. Build kinder words.";

export const howToPlayBullets = [
  "Read the story (or have a grown-up read it).",
  "Pick the best Camera sentence (what happened, no blaming).",
  "Pick the best Heart sentence (a real feeling).",
  "Pick the best Need sentence (what matters).",
  "Pick the best Ask sentence (a kind, doable request)."
];

export const howToPlayClosing = "Try saying it in your own words.";

// Step definitions
export const stepNames = {
  observation: {
    name: "Camera",
    label: "Observation",
    emoji: "📷",
    description: "What happened, no blaming"
  },
  feeling: {
    name: "Heart",
    label: "Feeling",
    emoji: "💛",
    description: "A real feeling"
  },
  need: {
    name: "Need",
    label: "Need",
    emoji: "🌱",
    description: "What matters"
  },
  request: {
    name: "Ask",
    label: "Request",
    emoji: "✋",
    description: "A kind, doable request"
  }
};

// Feedback messages for each step type
export const feedbackMessages = {
  observation: {
    correct: "Yes — that's a camera sentence. It says what happened without blame.",
    tryAgain: "That sounds like a guess or a label. Try a camera sentence (just what happened)."
  },
  feeling: {
    correct: "Nice — that's a real feeling.",
    tryAgain: "That sounds like a thought about the other person. Try an 'I feel…' feeling word."
  },
  need: {
    correct: "Good — that names what matters (a need).",
    tryAgain: "That sounds like a demand or a plan. A need is something like fairness, respect, help, or belonging."
  },
  request: {
    correct: "Great — that's a kind, specific ask.",
    tryAgain: "That sounds like a demand or a put-down. Try a request the other person can actually do."
  }
};

// Final script templates
export const finalTemplates = {
  adult: "When I noticed ___, I felt ___, because I need ___, would you be willing to ___?",
  kidFriendly: "When I saw/heard ___, I felt ___, because I need ___, can you please ___?"
};

// Tips for grown-ups
export const tipsForGrownUps = [
  "Keep it calm: this is practice, not a test.",
  "Let kids pass: \"You can say 'skip' and we'll try another story.\"",
  "If a child is upset, support first (help/space/water), then practice later.",
  "Don't argue about the \"right\" feeling. We're practicing clear sentences.",
  "Offer two choices if kids get stuck: \"More like sad or mad?\" / \"More like fairness or respect?\""
];

// Safety note
export const safetyNote = "If someone is hurting someone, or the situation feels unsafe, get a grown-up's help first. This game is for practicing kind communication — not solving unsafe situations alone.";

// Word banks
export const wordBanks = {
  feelings: [
    "sad", "mad", "frustrated", "worried", "nervous", 
    "embarrassed", "surprised", "disappointed", "lonely", 
    "excited", "calm"
  ],
  needs: [
    "fairness", "respect", "kindness", "safety", "belonging", 
    "quiet", "help", "turn-taking", "understanding", "fun", "rest"
  ],
  requestStarters: [
    "Can you please…?",
    "Would you be willing to…?",
    "Could we…?",
    "Can we take turns…?",
    "Can we try again…?"
  ]
};
