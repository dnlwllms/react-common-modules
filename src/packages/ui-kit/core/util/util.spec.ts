import { DateUtility } from "./DateUtility";
import { NumberUtility } from "./NumberUtility";

const { getTimeString, getTimeStrings } = DateUtility;
const { getRandomNumber } = NumberUtility;

describe("Date Utility Test", () => {
  it("getTimeStrings - 120", () => {
    expect(getTimeStrings(120).join(":")).toBe("00:02:00");
  });

  it("getTimeStrings - unknown", () => {
    const hours = getRandomNumber(0, 99);
    const minutes = getRandomNumber(0, 59);
    const seconds = getRandomNumber(0, 59);

    const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

    expect(getTimeStrings(totalSeconds).join(":")).toBe(
      `${getTimeString(hours)}:${getTimeString(minutes)}:${getTimeString(
        seconds
      )}`
    );
  });

  it("getTimeStrings - Try 100", () => {
    for (let i = 0; i < 100; i++) {
      const hours = getRandomNumber(0, 99);
      const minutes = getRandomNumber(0, 59);
      const seconds = getRandomNumber(0, 59);

      const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

      expect(getTimeStrings(totalSeconds).join(":")).toBe(
        `${getTimeString(hours)}:${getTimeString(minutes)}:${getTimeString(
          seconds
        )}`
      );
    }
  });
});
