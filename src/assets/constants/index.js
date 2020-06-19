import { requireNativeComponent } from "react-native";
export const ENUM = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
};
export const CATEGORIES = {
  LOOSE: "LOOSE",
  MATCHA: "MATCHA",
  SACHETS: "SACHETS",
};
export const previews = [
  {
    title: "Enjoy The Beaty\n" + "Of Silence",
    description: "lorem ipsum lorem",
    image: require("../images/japanese-tea-ceremony.png"),
    value: ENUM.FIRST,
  },
  {
    title: "Some Small But\n" + "Meaningful Ways",
    description: "lorem ipsum lorem",
    image: require("../images/Tea+Ceremony1.png"),
    value: ENUM.SECOND,
  },

  {
    title: "Renowned For\n" + "The Quality",
    description: "lorem ipsum lorem",
    image: require("../images/6826733651_da378ffb92_z.png"),
    value: ENUM.THIRD,
  },
  {
    title: "Social Impact\n" + "Source With Care",
    description: "lorem ipsum lorem",
    image: require("../images/private-tea-ceremony-at-camellia-gardens-100-years-old-house.png"),
    value: ENUM.FOURTH,
  },
];
export const categories = [
  {
    title: "Loose leaf",
    value: CATEGORIES.LOOSE,
  },
  {
    title: "Sachets",
    value: CATEGORIES.SACHETS,
  },
  {
    title: "Matcha",
    value: CATEGORIES.MATCHA,
  },
];
export const tea = [
  {
    title: "Black tea",
    description: "lorem ipsum lorem",
    image: require("../images/black_tea.png"),
    category: {
      title: "Loose leaf",
      value: CATEGORIES.LOOSE,
    },
  },
  {
    title: "Pumpkin seeds tea",
    description: "lorem ipsum lorem",
    image: require("../images/pumpkin_tea.png"),
    category: {
      title: "Loose leaf",
      value: CATEGORIES.LOOSE,
    },
  },
];
/*
const SET_USER_VALUE = "SET_USER_VALUE";


module.exports = {
  SET_USER_VALUE
};
*/
