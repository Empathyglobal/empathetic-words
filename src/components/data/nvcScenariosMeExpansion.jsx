// Kind Words Builder — "Me" (Self-Kindness) Scenario Expansion Pack

export const ME_SCENARIO_META_PATCH = {
  "me-wrong-answer": { type: "self", difficulty: "medium", tags: ["mistake", "embarrassment", "learning", "self_kindness"] },
  "me-picked-last": { type: "self", difficulty: "tricky", tags: ["belonging", "sports", "confidence", "self_kindness"] },
  "me-jealous-compliment": { type: "self", difficulty: "medium", tags: ["jealousy", "appreciation", "growth", "self_kindness"] },
  "me-yelled-regret": { type: "self", difficulty: "tricky", tags: ["anger", "repair", "apology", "self_kindness"] },
  "me-lost-game": { type: "self", difficulty: "easy", tags: ["disappointment", "fun", "sportsmanship", "self_kindness"] },
  "me-spilled-juice": { type: "self", difficulty: "easy", tags: ["accident", "embarrassment", "repair", "help"] },
  "me-broke-toy": { type: "self", difficulty: "medium", tags: ["accident", "honesty", "repair", "trust"] },
  "me-forgot-lunch": { type: "self", difficulty: "easy", tags: ["hungry", "support", "problem_solving"] },
  "me-hard-math": { type: "self", difficulty: "medium", tags: ["stuck", "learning", "help", "confidence"] },
  "me-lonely-recess": { type: "self", difficulty: "medium", tags: ["lonely", "belonging", "friendship", "bravery"] },
  "me-compare-myself": { type: "self", difficulty: "medium", tags: ["comparison", "patience", "learning", "self_kindness"] },
  "me-teased-unsafe": { type: "self", difficulty: "tricky", tags: ["teasing", "safety", "respect", "get_help"] },
  "me-overwhelmed-noise": { type: "self", difficulty: "medium", tags: ["overwhelmed", "sensory", "quiet", "self_care"] },
  "me-missed-friend": { type: "self", difficulty: "easy", tags: ["missing", "connection", "comfort"] },
  "me-not-perfect": { type: "self", difficulty: "medium", tags: ["perfectionism", "practice", "patience", "self_kindness"] }
};

export const NVC_SCENARIOS_ME_EXPANSION = [
  {
    id: "me-wrong-answer",
    title: "I Got an Answer Wrong",
    emoji: "📝",
    situation: "In class, I raised my hand and answered a question. The teacher said it wasn't correct. A couple of kids giggled.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I raised my hand and answered. The teacher said it wasn't correct, and I heard a couple kids giggle.",
          "Everyone laughed at me because I'm bad at school.",
          "They were trying to embarrass me on purpose.",
          "I always mess up in front of everyone."
        ],
        correctIndex: 0,
        explanation: "This sticks to facts: what you did, what the teacher said, and what you heard—no guessing or labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel embarrassed and nervous.",
          "I feel like they think I'm dumb.",
          "I feel that the class is rude.",
          "I feel I shouldn't have tried."
        ],
        correctIndex: 0,
        explanation: "'Embarrassed' and 'nervous' are real feelings. The others are thoughts, guesses, or 'should' talk."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need safety to try and learn, even when I make mistakes.",
          "I need everyone to stop laughing right now.",
          "I need to never get answers wrong.",
          "I need them to be nicer people."
        ],
        correctIndex: 0,
        explanation: "Learning goes best when you feel safe to try. That's a need. The others are demands or impossible rules."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to take one deep breath and ask, \"Can you explain it again?\"",
          "Would I be willing to stop raising my hand forever?",
          "Would I be willing to shout, \"Stop laughing!\"",
          "Would I be willing to pretend I don't care and ignore everyone?"
        ],
        correctIndex: 0,
        explanation: "A deep breath and a clear question helps you learn and keeps your words kind."
      }
    ]
  },
  {
    id: "me-picked-last",
    title: "I Was Picked Last",
    emoji: "⚽",
    situation: "In PE, two captains picked teams. My name was called last.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "The captains picked teams, and my name was called last.",
          "No one wanted me because I'm not good.",
          "They picked me last to be mean.",
          "I'm always the worst at sports."
        ],
        correctIndex: 0,
        explanation: "This is what happened in the moment—no guessing why."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel sad and left out.",
          "I feel like they don't like me.",
          "I feel that they are unfair.",
          "I feel I should be better."
        ],
        correctIndex: 0,
        explanation: "'Sad' and 'left out' are feelings. The other choices are guesses, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need belonging and encouragement.",
          "I need them to pick me first next time.",
          "I need to win every game.",
          "I need everyone to notice me."
        ],
        correctIndex: 0,
        explanation: "Belonging and encouragement help you keep trying. The others are demands or too big."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to tell the teacher, \"I feel left out. Can you help me join a team?\"",
          "Would I be willing to quit and never play again?",
          "Would I be willing to call the captains names?",
          "Would I be willing to keep it all inside and say nothing?"
        ],
        correctIndex: 0,
        explanation: "Asking a grown-up for help is a safe, doable next step."
      }
    ]
  },
  {
    id: "me-jealous-compliment",
    title: "I Felt Jealous",
    emoji: "😔",
    situation: "The teacher told my friend, 'Great job!' I didn't get a compliment, and my stomach felt tight.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I heard the teacher say 'Great job' to my friend, and I didn't hear a compliment for me.",
          "The teacher likes my friend more than me.",
          "My friend is better than me at everything.",
          "The teacher is unfair and mean."
        ],
        correctIndex: 0,
        explanation: "This describes what you heard (and didn't hear) without guessing what anyone thinks."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel jealous and disappointed.",
          "I feel like nobody notices me.",
          "I feel that my friend is showing off.",
          "I feel I shouldn't care."
        ],
        correctIndex: 0,
        explanation: "Jealous and disappointed are feelings. The others are thoughts or 'should' talk."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need appreciation and to know I'm growing.",
          "I need the teacher to compliment me right now.",
          "I need my friend to stop being good at things.",
          "I need to be the best."
        ],
        correctIndex: 0,
        explanation: "Appreciation and growth are needs. The others are demands or comparisons."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to tell myself one thing I did well and ask, \"What can I practice to improve?\"",
          "Would I be willing to glare at my friend and stay mad?",
          "Would I be willing to give up so I never feel jealous?",
          "Would I be willing to say, \"You don't deserve it!\""
        ],
        correctIndex: 0,
        explanation: "This helps you take care of your feelings and find a helpful next step."
      }
    ]
  },
  {
    id: "me-yelled-regret",
    title: "I Yelled and Felt Bad",
    emoji: "😤",
    situation: "At recess, I wanted the ball. I shouted, 'Give it to me!' After that, my friend walked away.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I wanted the ball. I shouted 'Give it to me!' and my friend walked away.",
          "My friend made me yell by not sharing.",
          "They were being selfish, so I had to shout.",
          "I ruined everything and they'll never forgive me."
        ],
        correctIndex: 0,
        explanation: "This is what happened: your words, your friend's action—no blame on either side."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel regret and worried.",
          "I feel like they hate me now.",
          "I feel that they should have shared.",
          "I feel it's too late to fix it."
        ],
        correctIndex: 0,
        explanation: "Regret and worried are feelings. The others are guesses, shoulds, or hopeless thoughts."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need repair and kindness in my friendships.",
          "I need them to forget it happened.",
          "I need to never get upset again.",
          "I need them to say sorry first."
        ],
        correctIndex: 0,
        explanation: "Repair and kindness help rebuild trust. The others are demands or impossible standards."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"I'm sorry I yelled. Can we try again?\"",
          "Would I be willing to pretend it didn't happen?",
          "Would I be willing to avoid them forever?",
          "Would I be willing to blame them instead?"
        ],
        correctIndex: 0,
        explanation: "A real apology and a request to reconnect is brave and kind."
      }
    ]
  },
  {
    id: "me-lost-game",
    title: "I Lost the Game",
    emoji: "🎮",
    situation: "We played a board game. I tried my best, but I lost.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "We played, and when we counted, my score was lower.",
          "They cheated, so I lost.",
          "I'm terrible at games.",
          "Everyone always beats me."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you played, you counted, your score was lower—no blame."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel disappointed.",
          "I feel like I'm the worst.",
          "I feel that the game is stupid.",
          "I feel I should have won."
        ],
        correctIndex: 0,
        explanation: "Disappointed is a feeling. The others are thoughts, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need fun and to know it's okay to lose sometimes.",
          "I need to win every game.",
          "I need them to let me win.",
          "I need to be perfect."
        ],
        correctIndex: 0,
        explanation: "Fun and acceptance help you enjoy playing. The others are demands or impossible rules."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"Good game!\" and ask to play again?",
          "Would I be willing to throw the game away?",
          "Would I be willing to say, \"You're lucky, not good\"?",
          "Would I be willing to refuse to play ever again?"
        ],
        correctIndex: 0,
        explanation: "This keeps it fun and friendly, even when you don't win."
      }
    ]
  },
  {
    id: "me-spilled-juice",
    title: "I Spilled My Juice",
    emoji: "🥤",
    situation: "At snack time, I knocked over my juice. It spilled on the table.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I knocked over my juice, and it spilled on the table.",
          "I'm clumsy and always make messes.",
          "Someone bumped me and made me do it.",
          "Everyone thinks I'm careless."
        ],
        correctIndex: 0,
        explanation: "This is what happened: your action, the spill—no blame or labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel embarrassed.",
          "I feel like everyone is staring.",
          "I feel that I shouldn't have juice.",
          "I feel it's too hard to be careful."
        ],
        correctIndex: 0,
        explanation: "Embarrassed is a feeling. The others are guesses, shoulds, or giving up."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need help to clean up and know accidents are okay.",
          "I need no one to notice.",
          "I need to be perfect.",
          "I need juice to never spill."
        ],
        correctIndex: 0,
        explanation: "Help and knowing accidents happen supports you. The others are demands or impossible."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"Oops! Can someone help me clean this up?\"",
          "Would I be willing to hide it and hope no one sees?",
          "Would I be willing to cry and give up?",
          "Would I be willing to blame the table?"
        ],
        correctIndex: 0,
        explanation: "Asking for help is brave and gets the mess cleaned up quickly."
      }
    ]
  },
  {
    id: "me-broke-toy",
    title: "I Broke My Friend's Toy",
    emoji: "🧸",
    situation: "I was playing with my friend's toy. I dropped it, and it broke.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I was holding the toy. I dropped it, and it broke.",
          "The toy was too fragile.",
          "My friend should have been more careful about who touches it.",
          "I'm so clumsy, I break everything."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you held it, you dropped it, it broke—no blame."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel sorry and nervous.",
          "I feel like they'll hate me.",
          "I feel that they shouldn't be upset.",
          "I feel it was bound to happen."
        ],
        correctIndex: 0,
        explanation: "Sorry and nervous are feelings. The others are guesses or defensive thoughts."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need honesty and to repair trust.",
          "I need them to not be mad.",
          "I need accidents to never happen.",
          "I need them to say it's okay right now."
        ],
        correctIndex: 0,
        explanation: "Honesty and repair build trust. The others are demands or impossible."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"I'm really sorry. Can we see if we can fix it or replace it?\"",
          "Would I be willing to hide it and say nothing?",
          "Would I be willing to blame the toy for breaking?",
          "Would I be willing to say, \"It was an accident, so it's not my fault\"?"
        ],
        correctIndex: 0,
        explanation: "A real apology and offering to help shows you care."
      }
    ]
  },
  {
    id: "me-forgot-lunch",
    title: "I Forgot My Lunch",
    emoji: "🍱",
    situation: "It's lunchtime. I looked in my backpack, and my lunch isn't there.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I looked in my backpack, and my lunch isn't there.",
          "I'm so forgetful and careless.",
          "Someone must have taken it.",
          "This always happens to me."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you looked, it wasn't there—no blame or labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel hungry and worried.",
          "I feel like I'm dumb for forgetting.",
          "I feel that lunch is too hard to remember.",
          "I feel everyone will think I'm silly."
        ],
        correctIndex: 0,
        explanation: "Hungry and worried are feelings. The others are thoughts or guesses."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need food and support to solve this problem.",
          "I need someone to bring me lunch right now.",
          "I need to never forget again.",
          "I need lunch to magically appear."
        ],
        correctIndex: 0,
        explanation: "Food and support help you solve the problem. The others are demands or impossible."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to tell the teacher, \"I forgot my lunch. Can you help me?\"",
          "Would I be willing to go hungry and say nothing?",
          "Would I be willing to take someone else's food?",
          "Would I be willing to cry and give up?"
        ],
        correctIndex: 0,
        explanation: "Asking a grown-up for help is the safe, smart choice."
      }
    ]
  },
  {
    id: "me-hard-math",
    title: "Math Feels Too Hard",
    emoji: "🧮",
    situation: "I'm working on a math problem. I've tried three times, and I still can't figure it out.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I worked on this problem three times, and I haven't found the answer yet.",
          "I'm bad at math.",
          "This problem is impossible.",
          "The teacher gave me something too hard on purpose."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you tried three times, no answer yet—no labels or blame."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel frustrated and stuck.",
          "I feel like I'll never understand.",
          "I feel that math is stupid.",
          "I feel I should be smarter."
        ],
        correctIndex: 0,
        explanation: "Frustrated and stuck are feelings. The others are thoughts, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need help and to know I'm learning.",
          "I need the answer right now.",
          "I need math to be easy.",
          "I need to get it perfect the first time."
        ],
        correctIndex: 0,
        explanation: "Help and knowing you're learning supports you. The others are demands or impossible."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to ask, \"Can you show me one step at a time?\"",
          "Would I be willing to give up and skip it?",
          "Would I be willing to copy someone else's work?",
          "Would I be willing to crumple my paper and throw it away?"
        ],
        correctIndex: 0,
        explanation: "Asking for step-by-step help is how learning happens."
      }
    ]
  },
  {
    id: "me-lonely-recess",
    title: "I Felt Lonely at Recess",
    emoji: "🏫",
    situation: "At recess, I saw groups of kids playing. I stood by the fence alone.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I saw groups of kids playing, and I stood by the fence alone.",
          "No one likes me.",
          "They left me out on purpose.",
          "I'm always alone."
        ],
        correctIndex: 0,
        explanation: "This is what happened: kids playing, you by the fence—no guessing why."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel lonely and sad.",
          "I feel like they don't want me.",
          "I feel that recess is unfair.",
          "I feel I'm not fun enough."
        ],
        correctIndex: 0,
        explanation: "Lonely and sad are feelings. The others are guesses, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need connection and to feel included.",
          "I need them to invite me right now.",
          "I need to never be alone.",
          "I need everyone to notice me."
        ],
        correctIndex: 0,
        explanation: "Connection and inclusion help you feel safe. The others are demands or too big."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to walk over and ask, \"Can I play too?\"",
          "Would I be willing to stay by the fence and feel sad?",
          "Would I be willing to glare at them and walk away?",
          "Would I be willing to pretend I don't care?"
        ],
        correctIndex: 0,
        explanation: "Asking to join is brave and gives you a chance to connect."
      }
    ]
  },
  {
    id: "me-compare-myself",
    title: "I Compared Myself",
    emoji: "👀",
    situation: "I looked at my friend's drawing. It looked so good. Mine didn't look as nice.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I looked at my friend's drawing and my drawing.",
          "My friend is better than me at everything.",
          "I'm terrible at art.",
          "They must have practiced more, so it's unfair."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you looked at two drawings—no comparison or labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel discouraged.",
          "I feel like I'll never be good.",
          "I feel that art is too hard.",
          "I feel I should give up."
        ],
        correctIndex: 0,
        explanation: "Discouraged is a feeling. The others are thoughts, judgments, or giving up."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need patience and to know I'm learning at my own pace.",
          "I need to be as good as them right now.",
          "I need their drawing to look worse.",
          "I need to be perfect."
        ],
        correctIndex: 0,
        explanation: "Patience and your own pace support growth. The others are demands or comparisons."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"Your drawing is cool! What should I practice to improve mine?\"",
          "Would I be willing to rip up my drawing?",
          "Would I be willing to say, \"Mine is better\"?",
          "Would I be willing to never draw again?"
        ],
        correctIndex: 0,
        explanation: "This turns comparison into learning and keeps you growing."
      }
    ]
  },
  {
    id: "me-teased-unsafe",
    title: "Someone Teased Me and I Felt Unsafe",
    emoji: "😟",
    situation: "On the bus, an older kid said mean things to me. I didn't know what to do.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "An older kid said mean things to me on the bus.",
          "They're a bully and everyone knows it.",
          "I must have done something wrong.",
          "The bus is always unsafe."
        ],
        correctIndex: 0,
        explanation: "This is what happened: what they said—no labels or blame on either side."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel scared and hurt.",
          "I feel like they hate me.",
          "I feel that they're a terrible person.",
          "I feel I should fight back."
        ],
        correctIndex: 0,
        explanation: "Scared and hurt are feelings. The others are guesses, judgments, or shoulds."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need safety and respect.",
          "I need them to stop right now.",
          "I need to never ride the bus.",
          "I need them to be punished."
        ],
        correctIndex: 0,
        explanation: "Safety and respect matter. The others are demands or avoiding the problem."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to tell a grown-up, \"Someone said mean things to me. I need help.\"",
          "Would I be willing to say mean things back?",
          "Would I be willing to keep it a secret?",
          "Would I be willing to skip school to avoid them?"
        ],
        correctIndex: 0,
        explanation: "Telling a trusted grown-up keeps you safe and gets you support."
      }
    ]
  },
  {
    id: "me-overwhelmed-noise",
    title: "Too Much Noise Overwhelmed Me",
    emoji: "🔊",
    situation: "The cafeteria was really loud. I felt my body getting tight, and my head hurt.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "The cafeteria was loud, and my head hurt.",
          "Everyone is too noisy and doesn't care.",
          "The cafeteria is the worst place.",
          "I can't handle normal things like other kids."
        ],
        correctIndex: 0,
        explanation: "This is what happened: loud sounds, your head hurt—no blame or labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel overwhelmed.",
          "I feel like I'm weak.",
          "I feel that everyone is mean.",
          "I feel I should be tougher."
        ],
        correctIndex: 0,
        explanation: "Overwhelmed is a feeling. The others are judgments, guesses, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need quiet and calm so my body can feel okay.",
          "I need everyone to be silent.",
          "I need to avoid cafeterias forever.",
          "I need to not be sensitive."
        ],
        correctIndex: 0,
        explanation: "Quiet and calm help your body relax. The others are demands or impossible."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to ask, \"Can I go somewhere quieter for a few minutes?\"",
          "Would I be willing to cover my ears and stay miserable?",
          "Would I be willing to yell at everyone to be quiet?",
          "Would I be willing to skip lunch forever?"
        ],
        correctIndex: 0,
        explanation: "Asking for a quieter space takes care of your need and is totally okay."
      }
    ]
  },
  {
    id: "me-missed-friend",
    title: "I Missed My Friend",
    emoji: "💭",
    situation: "My friend moved to another city. I looked at a photo of us and felt heavy inside.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "My friend moved. I looked at a photo of us.",
          "They left me.",
          "Moving is unfair.",
          "I'll never have friends again."
        ],
        correctIndex: 0,
        explanation: "This is what happened: they moved, you looked at a photo—no blame or forever talk."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel sad and miss them.",
          "I feel like they forgot about me.",
          "I feel that moving is cruel.",
          "I feel I should be over it."
        ],
        correctIndex: 0,
        explanation: "Sad and missing them are feelings. The others are guesses, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need connection and comfort.",
          "I need them to move back right now.",
          "I need to never care about anyone.",
          "I need to stop feeling this way."
        ],
        correctIndex: 0,
        explanation: "Connection and comfort help you through missing someone. The others are demands or shutting down."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to ask a grown-up, \"Can we call or write to my friend?\"",
          "Would I be willing to throw away all reminders of them?",
          "Would I be willing to be angry at them forever?",
          "Would I be willing to pretend I don't care?"
        ],
        correctIndex: 0,
        explanation: "Staying in touch helps you feel connected even when they're far away."
      }
    ]
  },
  {
    id: "me-not-perfect",
    title: "My Work Wasn't Perfect",
    emoji: "✏️",
    situation: "I finished my project. I looked at it and noticed it wasn't perfect.",
    steps: [
      {
        type: "observation",
        title: "Camera (Observation)",
        prompt: "Which sentence is only what a camera could see or hear (no blaming words)?",
        options: [
          "I finished my project and noticed some parts I'd do differently.",
          "I'm terrible at everything.",
          "My project is trash.",
          "Everyone else's will be perfect, and mine won't."
        ],
        correctIndex: 0,
        explanation: "This is what happened: you finished, you noticed things—no harsh labels."
      },
      {
        type: "feeling",
        title: "Heart (Feeling)",
        prompt: "Which sentence is a real feeling (inside your body), not a thought or a judgment?",
        options: [
          "I feel disappointed in myself.",
          "I feel like I'm not good enough.",
          "I feel that perfection is required.",
          "I feel I should start over."
        ],
        correctIndex: 0,
        explanation: "Disappointed is a feeling. The others are thoughts, judgments, or pressure."
      },
      {
        type: "need",
        title: "Need",
        prompt: "Which sentence names a need (what matters), not a demand?",
        options: [
          "I need patience and to know I'm learning and growing.",
          "I need my project to be perfect.",
          "I need to never make mistakes.",
          "I need everyone to think it's amazing."
        ],
        correctIndex: 0,
        explanation: "Patience and growth support you. The others are demands or impossible standards."
      },
      {
        type: "request",
        title: "Ask (Request)",
        prompt: "Which request is kind, specific, and doable right now?",
        options: [
          "Would I be willing to say, \"I did my best. What can I learn for next time?\"",
          "Would I be willing to throw it away and give up?",
          "Would I be willing to tell myself I'm worthless?",
          "Would I be willing to pretend it's perfect when it's not?"
        ],
        correctIndex: 0,
        explanation: "Celebrating your effort and planning to learn keeps you growing."
      }
    ]
  }
];
