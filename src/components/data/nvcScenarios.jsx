// NVC Scenarios for Kind Words Builder - Primary Level
// Each scenario has 4 steps: Camera (Observation), Heart (Feeling), Need, Ask (Request)

export const NVC_SCENARIOS = [
  {
    id: "borrowed-toy",
    title: "The Borrowed Toy",
    emoji: "🧸",
    situation: "You were playing with your favorite toy car. Then your friend came and took it without asking. Now they're playing with it across the room.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What happened? Just the facts, like a camera sees it.",
        options: [
          "You always take my things!",
          "When you took my toy car without asking",
          "You're being mean to me",
          "I don't like you anymore"
        ],
        correctIndex: 1,
        explanation: "Great! You described exactly what you saw, without judging or blaming. That's what a camera does—it just shows what happened."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel about this?",
        options: [
          "I feel frustrated and a bit sad",
          "You make me angry",
          "I feel like you're wrong",
          "I feel that you should ask first"
        ],
        correctIndex: 0,
        explanation: "Perfect! You named your feelings. Feelings are inside you—they tell you how something affected your heart."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need right now?",
        options: [
          "I need you to never do that again",
          "I need to be asked before someone uses my things",
          "I need you to be nice",
          "I need my toy back right now"
        ],
        correctIndex: 1,
        explanation: "Wonderful! You identified your need. Needs are things everyone has—like respect, fairness, and being included."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you kindly ask for?",
        options: [
          "Give it back or I won't be your friend!",
          "Would you please ask me next time before taking my things?",
          "You have to say sorry right now",
          "Don't ever touch my stuff again"
        ],
        correctIndex: 1,
        explanation: "Beautiful! You made a clear, kind request. A good request tells someone what you'd like them to do, without demanding or threatening."
      }
    ]
  },
  {
    id: "long-line",
    title: "The Long Line",
    emoji: "🎢",
    situation: "You've been waiting in line for the slide for a very long time. Other kids keep running to the front instead of waiting their turn.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What happened? Just the facts.",
        options: [
          "Everyone is being unfair",
          "When kids cut in front of the line",
          "People don't care about me",
          "This always happens to me"
        ],
        correctIndex: 1,
        explanation: "Excellent! You described what you observed without adding judgments. Just like a camera captures what's really there."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel disappointed and impatient",
          "I feel like they're wrong",
          "I feel that it's not fair",
          "You all make me upset"
        ],
        correctIndex: 0,
        explanation: "Great job! You named your true feelings. Feelings help us understand what's important to us."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need them to stop being mean",
          "I need everyone to follow the rules",
          "I need fairness and my turn to be respected",
          "I need to go first this time"
        ],
        correctIndex: 2,
        explanation: "Perfect! You identified your needs—fairness and respect. These are things everyone needs to feel good."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you ask for?",
        options: [
          "Stop cutting or I'll tell the teacher!",
          "Would you please wait your turn like I'm doing?",
          "You should know better than this",
          "Get to the back of the line now"
        ],
        correctIndex: 1,
        explanation: "Wonderful! You made a respectful request that explains what you'd like to happen."
      }
    ]
  },
  {
    id: "spilled-drink",
    title: "The Spilled Drink",
    emoji: "🥤",
    situation: "You were drinking your juice at the table. Someone walked by and accidentally knocked it over. Now your juice is all over the floor.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What happened?",
        options: [
          "You ruined my juice!",
          "When you bumped the table and my juice spilled",
          "You weren't watching where you were going",
          "You always mess things up"
        ],
        correctIndex: 1,
        explanation: "Great! You described the facts without blaming. That helps everyone understand what happened."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel upset and surprised",
          "I feel like you should be more careful",
          "You make me so frustrated",
          "I feel that was careless"
        ],
        correctIndex: 0,
        explanation: "Perfect! Those are real feelings from your heart. Feelings tell us what matters to us."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need you to watch where you're going",
          "I need you to buy me a new juice",
          "I need care and to enjoy my drink",
          "I need people to be more careful around me"
        ],
        correctIndex: 2,
        explanation: "Wonderful! You identified your needs—to be cared for and to enjoy things. Everyone has these needs."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What would you like to ask for?",
        options: [
          "Clean this up right now!",
          "Would you help me clean this up, please?",
          "You need to be more careful next time",
          "I want a new juice from you"
        ],
        correctIndex: 1,
        explanation: "Beautiful! A kind request asks for help and shows respect. It gives people a chance to make things better."
      }
    ]
  },
  {
    id: "quiet-corner",
    title: "The Quiet Corner",
    emoji: "🤫",
    situation: "Everyone around you is being very loud and playing exciting games. You're feeling overwhelmed and need some quiet time to think.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What's happening around you?",
        options: [
          "Everyone is being too loud",
          "When everyone is playing loudly nearby",
          "People don't understand I need quiet",
          "It's always so noisy here"
        ],
        correctIndex: 1,
        explanation: "Excellent! You described what's happening without judging others. Sometimes what's fun for some people is too much for others."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How are you feeling?",
        options: [
          "I feel overwhelmed and need space",
          "I feel like everyone is annoying",
          "I feel that they should be quieter",
          "I feel mad at the noise"
        ],
        correctIndex: 0,
        explanation: "Great! You named your feelings honestly. It's okay to feel overwhelmed—everyone needs different amounts of quiet and activity."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need right now?",
        options: [
          "I need everyone to be quiet",
          "I need them to play somewhere else",
          "I need some peace and calm to recharge",
          "I need people to think about others"
        ],
        correctIndex: 2,
        explanation: "Perfect! You identified your need for peace and calm. That's a real need everyone has sometimes—space to rest and recharge."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you kindly ask for?",
        options: [
          "Stop being so loud!",
          "Could I have a few minutes of quiet time in the corner?",
          "You all need to go play outside",
          "Be quiet or I'll leave"
        ],
        correctIndex: 1,
        explanation: "Wonderful! You made a clear request that takes care of your needs while respecting others. That's being kind to yourself and others!"
      }
    ]
  },
  {
    id: "group-project",
    title: "The Group Project",
    emoji: "✏️",
    situation: "Your group is working on a poster together. Everyone wants to draw different things, and people are starting to argue about whose idea is best.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What's happening in your group?",
        options: [
          "Nobody likes my ideas",
          "When we have different ideas and start talking over each other",
          "Everyone thinks their idea is better",
          "My group doesn't work well together"
        ],
        correctIndex: 1,
        explanation: "Great observation! You described what's happening without blaming anyone. Different ideas can be hard to sort out."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How does this make you feel?",
        options: [
          "I feel confused and want everyone to get along",
          "I feel like they don't listen to me",
          "I feel that my idea is better",
          "I feel frustrated with my group"
        ],
        correctIndex: 0,
        explanation: "Perfect! You shared your genuine feelings. It's normal to feel confused when lots of people want different things."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What does your group need?",
        options: [
          "We need someone to pick the best idea",
          "We need everyone to agree with me",
          "We need cooperation and to hear all voices",
          "We need to work faster"
        ],
        correctIndex: 2,
        explanation: "Excellent! You saw that the group needs cooperation and fairness—everyone's voice matters. That's thinking about everyone's needs!"
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What would help your group?",
        options: [
          "Everyone should just use my idea",
          "Can we take turns sharing ideas and then choose together?",
          "Stop arguing and let's just start",
          "Let's vote and the loser has to listen"
        ],
        correctIndex: 1,
        explanation: "Beautiful! You suggested a way that respects everyone. Taking turns and choosing together helps everyone feel included."
      }
    ]
  },
  {
    id: "new-game",
    title: "The New Game",
    emoji: "🎮",
    situation: "Your friends are playing a new game you don't know. They keep playing without explaining the rules, and you feel left out.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What do you observe?",
        options: [
          "They're leaving me out on purpose",
          "When my friends play the new game without explaining it",
          "They don't want me to play",
          "Nobody cares that I don't understand"
        ],
        correctIndex: 1,
        explanation: "Great! You described what you see without assuming what others are thinking. That keeps things clear and kind."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel confused and left out",
          "I feel like they're being mean",
          "I feel that they should teach me",
          "I feel upset with them"
        ],
        correctIndex: 0,
        explanation: "Perfect! You identified your feelings. Feeling left out is hard, and naming it helps you understand what you need."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need them to stop and teach me",
          "I need to be included and understand what's happening",
          "I need a turn to choose the game",
          "I need them to play something I know"
        ],
        correctIndex: 1,
        explanation: "Excellent! You identified your needs—to be included and to understand. Those are needs everyone has in friendships."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you ask?",
        options: [
          "Stop playing and teach me right now!",
          "Would you please explain the rules so I can join in?",
          "I don't want to play your game anyway",
          "Play something else that I know"
        ],
        correctIndex: 1,
        explanation: "Wonderful! Your request is clear and kind. It tells your friends what would help you join in."
      }
    ]
  },
  {
    id: "broken-crayon",
    title: "The Broken Crayon",
    emoji: "🖍️",
    situation: "Someone borrowed your favorite crayon and it came back broken in half. You were looking forward to using it.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What happened?",
        options: [
          "You broke my crayon!",
          "When my crayon came back broken after I lent it to you",
          "You don't take care of other people's things",
          "You always break stuff"
        ],
        correctIndex: 1,
        explanation: "Great! You stuck to the facts—what happened to the crayon. Facts help us talk about problems without blaming."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel disappointed and a little sad",
          "I feel like you were careless",
          "I feel that you should replace it",
          "I feel angry at you"
        ],
        correctIndex: 0,
        explanation: "Perfect! You named your true feelings. It's okay to feel disappointed when something we care about gets broken."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need you to buy me a new crayon",
          "I need people to be more careful with my things",
          "I need care for my belongings and honesty when things break",
          "I need you to say sorry"
        ],
        correctIndex: 2,
        explanation: "Excellent! You identified important needs—care for belongings and honesty. These help friendships stay strong."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What would you like to ask?",
        options: [
          "Give me one of your crayons now!",
          "Would you let me know if something breaks next time, and be gentle with my things?",
          "I won't lend you anything ever again",
          "You have to replace this today"
        ],
        correctIndex: 1,
        explanation: "Beautiful! You made a request that helps prevent this from happening again, and you stayed respectful."
      }
    ]
  },
  {
    id: "shared-snack",
    title: "The Shared Snack",
    emoji: "🍪",
    situation: "You brought cookies to share with the class. One person took three cookies when everyone else only took one.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What did you notice?",
        options: [
          "That's so greedy!",
          "When you took three cookies while others took one",
          "You don't know how to share",
          "You're being selfish"
        ],
        correctIndex: 1,
        explanation: "Great! You described what you saw without name-calling. Observations help us talk about what happened clearly."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel concerned and want everyone to have some",
          "I feel like you're being unfair",
          "I feel that you took too many",
          "I feel annoyed with you"
        ],
        correctIndex: 0,
        explanation: "Perfect! You named your feelings and showed you care about fairness for everyone. That's thoughtful!"
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What's important here?",
        options: [
          "I need you to put two cookies back",
          "I need fairness so everyone can enjoy some",
          "I need people to think of others",
          "I need more cookies next time"
        ],
        correctIndex: 1,
        explanation: "Excellent! You identified fairness as the need. When sharing, fairness helps everyone feel included and cared for."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you ask?",
        options: [
          "Put those cookies back right now!",
          "Would you take just one so there's enough for everyone?",
          "Don't be so greedy next time",
          "I won't share with you again"
        ],
        correctIndex: 1,
        explanation: "Wonderful! Your request explains what would help and why, without shaming. That's speaking with kindness!"
      }
    ]
  },
  {
    id: "homework-help",
    title: "The Homework Helper",
    emoji: "📚",
    situation: "Your friend keeps asking you for answers to homework instead of trying to figure it out themselves. You want to help but also want them to learn.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What's happening?",
        options: [
          "You're just copying from me",
          "When you ask me for answers without trying first",
          "You're being lazy",
          "You never do your own work"
        ],
        correctIndex: 1,
        explanation: "Great! You described the behavior you're seeing. That's more helpful than making guesses about why someone does something."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How does this make you feel?",
        options: [
          "I feel torn between helping and wanting you to try",
          "I feel like you're using me",
          "I feel that you should work harder",
          "I feel annoyed"
        ],
        correctIndex: 0,
        explanation: "Perfect! You described a complex feeling—wanting to help but also wanting your friend to learn. That shows you care!"
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you both need?",
        options: [
          "I need you to stop asking me",
          "We both need learning and growth, not just answers",
          "I need to do my own homework",
          "You need to try harder"
        ],
        correctIndex: 1,
        explanation: "Excellent! You thought about both people's needs—learning is more important than just getting answers. That's wise!"
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you suggest?",
        options: [
          "Do your own homework!",
          "Would you try the problem first, and then I'll help if you're stuck?",
          "I'm not helping you anymore",
          "You should ask the teacher instead"
        ],
        correctIndex: 1,
        explanation: "Beautiful! You suggested a way to help that also encourages learning. That's being a true friend!"
      }
    ]
  },
  {
    id: "team-captain",
    title: "The Team Captain",
    emoji: "⚽",
    situation: "During PE, the team captains are picking players. You've been waiting a long time and haven't been chosen yet.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What's happening?",
        options: [
          "Nobody wants me on their team",
          "When I'm standing here and haven't been picked yet",
          "They think I'm not good at sports",
          "I'm always picked last"
        ],
        correctIndex: 1,
        explanation: "Great! You described the situation without guessing what others think. Just the facts helps us stay calm."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How are you feeling?",
        options: [
          "I feel nervous and hope to be included soon",
          "I feel like I'm not good enough",
          "I feel that this isn't fair",
          "I feel bad about myself"
        ],
        correctIndex: 0,
        explanation: "Perfect! You named your feelings honestly. Waiting to be chosen can bring up nervous feelings—that's completely normal."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need to be picked first",
          "I need to be included and feel like I belong",
          "I need people to like me",
          "I need to be better at sports"
        ],
        correctIndex: 1,
        explanation: "Excellent! You identified the need to be included and belong. Everyone has this need—it's not about being the best at sports."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What might help?",
        options: [
          "Pick me next or it's not fair!",
          "Could we take turns choosing who goes first, so everyone gets a turn?",
          "I should get to be captain next time",
          "This is a mean way to pick teams"
        ],
        correctIndex: 1,
        explanation: "Wonderful! You suggested a fairer system that helps everyone feel included. That's thinking of solutions for everyone!"
      }
    ]
  },
  {
    id: "noisy-neighbor",
    title: "The Noisy Desk Neighbor",
    emoji: "🎵",
    situation: "The person sitting next to you keeps humming and tapping their pencil while you're trying to concentrate on your work.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What's happening?",
        options: [
          "You're being annoying",
          "When you hum and tap your pencil while I'm working",
          "You're trying to distract me",
          "You never think about others"
        ],
        correctIndex: 1,
        explanation: "Great! You described the specific actions you notice. That helps the other person understand exactly what's happening."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How does this affect you?",
        options: [
          "I feel distracted and finding it hard to focus",
          "I feel like you're doing this on purpose",
          "I feel that you should be quiet",
          "I feel annoyed with you"
        ],
        correctIndex: 0,
        explanation: "Perfect! You expressed how it affects your ability to concentrate. That's being clear about your experience."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need you to stop making noise",
          "I need quiet so I can concentrate on my work",
          "I need you to be more considerate",
          "I need to sit somewhere else"
        ],
        correctIndex: 1,
        explanation: "Excellent! You identified your need for quiet to focus. That's a clear need that's easy for others to understand."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What can you ask?",
        options: [
          "Stop being so noisy!",
          "Would you be willing to work more quietly so I can focus?",
          "Be quiet or I'll tell the teacher",
          "You're too loud"
        ],
        correctIndex: 1,
        explanation: "Beautiful! You made a polite request that explains what you need. The other person might not have realized the noise was distracting!"
      }
    ]
  },
  {
    id: "birthday-invite",
    title: "The Birthday Party",
    emoji: "🎂",
    situation: "Some classmates are talking about a birthday party. You realize you weren't invited, and it hurts your feelings.",
    steps: [
      {
        type: "observation",
        title: "📷 Camera (What I See)",
        prompt: "What did you notice?",
        options: [
          "They don't like me",
          "When I heard about the party and realized I wasn't invited",
          "They're leaving me out on purpose",
          "Nobody wants me at their party"
        ],
        correctIndex: 1,
        explanation: "Great! You described what you noticed without assuming why. Sometimes there are reasons we don't know about."
      },
      {
        type: "feeling",
        title: "💛 Heart (How I Feel)",
        prompt: "How do you feel?",
        options: [
          "I feel hurt and left out",
          "I feel like I'm not wanted",
          "I feel that it's mean not to invite everyone",
          "I feel upset with them"
        ],
        correctIndex: 0,
        explanation: "Perfect! You named your feelings honestly. Not being invited can really hurt—those feelings are valid and important."
      },
      {
        type: "need",
        title: "🌱 Need (What I Need)",
        prompt: "What do you need?",
        options: [
          "I need them to invite me",
          "I need to feel valued and included in friendships",
          "I need everyone to invite everyone",
          "I need to not care about parties"
        ],
        correctIndex: 1,
        explanation: "Excellent! You identified the need to feel valued in friendships. That's a deep need everyone has—to feel we matter to others."
      },
      {
        type: "request",
        title: "✋ Ask (My Kind Request)",
        prompt: "What might help?",
        options: [
          "Why didn't you invite me?",
          "Can I talk with you about how I'm feeling left out?",
          "I won't invite you to my party either",
          "You should have invited everyone"
        ],
        correctIndex: 1,
        explanation: "Wonderful! You asked to have a conversation about your feelings. That's brave and gives you a chance to understand what happened."
      }
    ]
  }
];

// Helper function to get a random scenario
export const getRandomScenario = () => {
  const randomIndex = Math.floor(Math.random() * NVC_SCENARIOS.length);
  return NVC_SCENARIOS[randomIndex];
};

// Helper function to find a scenario by id
export const getScenarioById = (id) => {
  return NVC_SCENARIOS.find(scenario => scenario.id === id);
};
