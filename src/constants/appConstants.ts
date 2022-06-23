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


export const generateRandomAvtar = () => {
  const avtars = [
    "https://gravatar.com/avatar/8fab154171e299e9b8fe24305267a8fd?s=200&d=robohash&r=r",
    "https://gravatar.com/avatar/9e5a6d786d0a582d2efd40c9a0fa7a03?s=200&d=robohash&r=r",
    "https://robohash.org/3be17b6865f19a865d952d3197603fc2?set=set4&bgset=&size=400x400",
    "https://robohash.org/1f2fb9642c825da07a83e5cac078e838?set=set3&bgset=&size=200x200",
    "https://robohash.org/bd8c21b3272a3425a1fc974899697109?set=set1&bgset=&size=200x200"
  ]

  return avtars[Math.floor(Math.random()*avtars.length)]
}