import { css } from "styled-components";

const primaryFontFamily = "Pretendard";

const black = 900;
const bold = 700;
const medium = 400;
const regular = 200;

export const typography = {
  display01B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 72px;
    line-height: 150%;
    letter-spacing: -1.5px;
  `,
  display01M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 72px;
    line-height: 150%;
    letter-spacing: -1.5px;
  `,
  display02B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 64px;
    line-height: 150%;
    letter-spacing: -1px;
  `,
  display02M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 64px;
    line-height: 150%;
    letter-spacing: -1px;
  `,
  display03B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 48px;
    line-height: 150%;
    letter-spacing: -1px;
  `,
  display03BL: css`
    font-family: ${primaryFontFamily};
    font-weight: ${black};
    font-size: 48px;
    line-height: 150%;
    letter-spacing: -0.5px;
  `,
  display03M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 48px;
    line-height: 150%;
    letter-spacing: -0.5px;
  `,

  heading01B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading01M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading01R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading02B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading02M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading02R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading03B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading03M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading03R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading04B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading04M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  heading04R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0px;
  `,

  body01B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body01M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body01R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body02B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body02M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body02R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body03B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body03M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body03R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body04B: css`
    font-family: ${primaryFontFamily};
    font-weight: ${bold};
    font-size: 11px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body04M: css`
    font-family: ${primaryFontFamily};
    font-weight: ${medium};
    font-size: 11px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body04R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 11px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
  body05R: css`
    font-family: ${primaryFontFamily};
    font-weight: ${regular};
    font-size: 10px;
    line-height: 150%;
    letter-spacing: 0px;
  `,
};
