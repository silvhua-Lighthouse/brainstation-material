export let teams = [
  {
    id: 1,
    name: "Blizzard Brushers",
    abbreviation: "blb",
    mascot: "snow",
  },
  {
    id: 2,
    name: "Sweeping Snowmen",
    abbreviation: "sws",
    mascot: "frosty",
  },
  {
    id: 3,
    name: "Polar Bears Precision Curling",
    abbreviation: "pbp",
    mascot: "bear",
  },
  {
    id: 4,
    name: "Hammer Hikers",
    abbreviation: "hike",
    mascot: "mountain",
  },
];

export let players = [
  {
    id: 1,
    name: "Emilio Sabbatini",
    position: "thrower",
    is_captain: false,
    number: 88,
    team_id: 2,
  },
  {
    id: 2,
    name: "Haiden Wallace",
    position: "skip",
    is_captain: true,
    number: 16,
    team_id: 2,
  },
  {
    id: 3,
    name: "Louise Milano",
    position: "broom",
    is_captain: true,
    number: 7,
    team_id: 1,
  },
  {
    id: 4,
    name: "Nicki Bluth",
    position: "broom",
    is_captain: true,
    number: 37,
    team_id: 3,
  },
  {
    id: 5,
    name: "Evelyn Souza",
    position: "skip",
    is_captain: false,
    is_active: false,
    number: 99,
    team_id: 3,
  },
  {
    id: 6,
    name: "Jade Moss",
    position: "thrower",
    is_captain: false,
    number: 34,
    team_id: 1,
  },
  {
    id: 7,
    name: "Kai Santos",
    position: "skip",
    is_active: false,
    number: 14,
    team_id: 1,
  },
];

export let quotes = [
  { id: 1, text: "Pass the rock!!", playerId: 1 },
  {
    id: 2,
    text: "Our strategy is to score more goalpoints than the opposing team.",
    playerId: 2,
  },
  {
    id: 3,
    text: "It's like the coach says, there's no 'w' in 'team'.",
    playerId: 2,
  },
];
