const colors = {
  primary100: "#ff94a9",
  primary200: "#ff7a94",
  primary300: "#ff617f",
  primary400: "#ff476a",
  primary500: "#ff2d55",
  primary600: "#f91a45",
  primary700: "#ed0c38",
  primary800: "#d01136",
  primary900: "#b31433",

  gray100: "#fafafa",
  gray200: "#eeeeee",
  gray300: "#dddddd",
  gray400: "#bbbbbb",
  gray500: "#999999",
  gray600: "#777777",
  gray700: "#555555",
  gray800: "#333333",
  gray900: "#111111",

  white: "#ffffff",
  black: "#000000",

  grayDimmedEffectBlack100D: "rgba(0, 0, 0, 1)",
  grayDimmedEffectBlack95D: "rgba(0, 0, 0, 0.95)",
  grayDimmedEffectBlack90D: "rgba(0, 0, 0, 0.9)",
  grayDimmedEffectBlack85D: "rgba(0, 0, 0, 0.85)",
  grayDimmedEffectBlack80D: "rgba(0, 0, 0, 0.8)",
  grayDimmedEffectBlack75D: "rgba(0, 0, 0, 0.75)",
  grayDimmedEffectBlack70D: "rgba(0, 0, 0, 0.7)",
  grayDimmedEffectBlack65D: "rgba(0, 0, 0, 0.65)",
  grayDimmedEffectBlack60D: "rgba(0, 0, 0, 0.6)",
  grayDimmedEffectBlack55D: "rgba(0, 0, 0, 0.55)",
  grayDimmedEffectBlack50D: "rgba(0, 0, 0, 0.5)",
  grayDimmedEffectBlack45D: "rgba(0, 0, 0, 0.45)",
  grayDimmedEffectBlack40D: "rgba(0, 0, 0, 0.4)",
  grayDimmedEffectBlack35D: "rgba(0, 0, 0, 0.35)",
  grayDimmedEffectBlack30D: "rgba(0, 0, 0, 0.3)",
  grayDimmedEffectBlack25D: "rgba(0, 0, 0, 0.25)",
  grayDimmedEffectBlack20D: "rgba(0, 0, 0, 0.2)",
  grayDimmedEffectBlack15D: "rgba(0, 0, 0, 0.15)",
  grayDimmedEffectBlack10D: "rgba(0, 0, 0, 0.1)",
  grayDimmedEffectBlack05D: "rgba(0, 0, 0, 0.05)",
  grayDimmedEffectBlack00D: "rgba(0, 0, 0, 0.0)",

  green100: "#72ee90",
  green200: "#5fe781",
  green300: "#4edf72",
  green400: "#3fd564",
  green500: "#34c759",
  green600: "#34ad52",
  green700: "#33944b",
  green800: "#317d44",
  green900: "#2d673c",

  blue100: "#66afff",
  blue200: "#4da2ff",
  blue300: "#3395ff",
  blue400: "#1a87ff",
  blue500: "#007aff",
  blue600: "#066ee0",
  blue700: "#1462b8",
  blue800: "#16569c",
  blue900: "#174a82",

  red100: "#ff9a94",
  red200: "#ff817a",
  red300: "#ff6961",
  red400: "#ff5147",
  red500: "#ff3b30",
  red600: "#f9261a",
  red700: "#ed190c",
  red800: "#d01b11",
  red900: "#b31c14",

  orange100: "#ffbf66",
  orange200: "#ffb54d",
  orange300: "#ffaa33",
  orange400: "#ffa01a",
  orange500: "#ff9500",
  orange600: "#e08506",
  orange700: "#c2750a",
  orange800: "#a5660d",
  orange900: "#8a570f",

  data01: "#464f69",
  data02: "#af52de",
  data03: "#5856d6",
  data04: "#007aff",
  data05: "#5ac8fa",
  data06: "#34c759",
  data07: "#8ad74e",
  data08: "#ffcc00",
  data09: "#ff9500",
  data10: "#ff3b30",

  plus100: "#FF9A94",
  plus200: "#FF817A",
  plus300: "#FF6961",
  plus400: "#FF5147",
  plus500: "#FF3B30",
  plus600: "#F9261A",
  plus700: "#ED190C",
  plus800: "#D01B11",
  plus900: "#B31C14",

  minus100: "#66AFFF",
  minus200: "#4DA2FF",
  minus300: "#3395FF",
  minus400: "#1A87FF",
  minus500: "#007AFF",
  minus600: "#066EE0",
  minus700: "#1462B8",
  minus800: "#16569C",
  minus900: "#174A82",
};

const getColor = (
  cssKey: string,
  colorKey: keyof typeof colors,
  darkModeColorKey?: keyof typeof colors
) => {
  return `
    ${cssKey}: ${colors[colorKey]};
    `;
  // darkmode 임시 작동 중지
  // ${
  //   darkModeColorKey
  //     ? `@media (prefers-color-scheme: dark) {
  //       ${cssKey}: ${colors[darkModeColorKey]};
  //     }`
  //     : ""
  // }
};

export { getColor, colors };
