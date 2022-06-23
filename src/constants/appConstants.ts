export const THEME_ICONS = {
  light: {
    search: "/svg/search-dark.svg",
    themeToggle: "/svg/sun.svg",
  },
  dark: {
    search: "/svg/search-light.svg",
    themeToggle: "/svg/moon.svg",
  },
};

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

const icofontIcons = [
  'caret-down',
  'caret-left',
  'caret-up',
  'rounded-down',
  'rounded-up',
  'rounded-right',
  'thin-down',
  'thin-left',
  'thin-right',
  'thin-up',
]
let iconsArrayTemp = [];
for (let i = 0; i < letters.length; i++) {
  iconsArrayTemp.push("icon-" + letters[i]);
  if (typeof (letters[i]) !== "number") {
    iconsArrayTemp.push("icon-2-" + letters[i]);
  }
}
for (let i = 0; i < icofontIcons.length; i++) {
  iconsArrayTemp.push("icofont-" + icofontIcons[i]);
}
export const iconsArray = iconsArrayTemp;
