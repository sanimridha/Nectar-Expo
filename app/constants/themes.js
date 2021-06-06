import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const SIZES = {
    h1: height / 17,
    h2: height / 25,
    h3: height / 32,
    width,
    height,
};
export const COLORS = {
    // base colors
    primary: "#53B175", // green
    primary2: "#BAE0C8", // green
    secondary: "#7C7C7C", // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    lightGray5: "#cccccc",
    transparent: "transparent",
    darkgray: "#898C95",
};
const appTheme = { COLORS, SIZES };

export default appTheme;
