const POSITIONS = {
  broom: "Power broomer",
  skip: "Skipper",
  thrower: "Rock thrower",
};

const formatPosition = (key) => POSITIONS[key] ?? "?";

const LOGOS = {
  snow: "❄️",
  frosty: "⛄️",
  polarBear: "🐻‍❄️",
  mountain: "🏔️",
};

const getLogo = (key) => LOGOS[key] ?? "?";

export { formatPosition, getLogo };
