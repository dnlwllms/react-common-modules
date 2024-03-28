import { NumberUtility } from "./NumberUtility";
import { UtilError } from "./UtilError";

const { getRandomNumber } = NumberUtility;

export namespace DateUtility {
  const majorMonths = [1, 3, 5, 7, 8, 10, 12];

  export function getIsDate(value: any) {
    return !!value.toISOString;
  }
  export function getTimeString(num: number) {
    if (num < 10) {
      return `0${num}`;
    }

    return num.toString();
  }

  /**
   * 초(s)를 HH:mm:ss 형식으로 사용할 수 있게 배열에 담아 반환하는 함수
   *
   * @example ["00", "00", "00"] 0번 인덱스 부터 시, 분, 초를 나타낸다.
   * @param seconds
   */
  export function getTimeStrings(seconds: number) {
    const hours = Math.floor(seconds / (60 * 60));
    const min = Math.floor(seconds / 60) - hours * 60;
    const sec = seconds - hours * 60 * 60 - min * 60;

    return [hours, min, sec].map((value) => getTimeString(value));
  }

  export function getRandomDate(
    dateRange: [Date, Date] = [new Date("2020-01-01"), new Date("2023-12-31")]
  ) {
    if (dateRange[0] >= dateRange[1]) {
      throw new UtilError("invalid-range");
    }

    // Year
    const startYear = dateRange[0].getFullYear();
    const endYear = dateRange[1].getFullYear();
    const year = getRandomNumber(startYear, endYear);

    // Month
    let startMonth = 1,
      endMonth = 12,
      startDate = 1,
      endDate = 31,
      startHour = 0,
      endHour = 23,
      startMinute = 0,
      endMinute = 59,
      startSecond = 0,
      endSecond = 59;
    if (year === startYear) {
      startMonth = dateRange[0].getMonth() + 1;
    }
    if (year === endYear) {
      endMonth = dateRange[1].getMonth() + 1;
    }
    const month = getRandomNumber(startMonth, endMonth);

    // Date
    if (month === 2) {
      if (year % 4 === 0) {
        endDate = 29;
      } else {
        endDate = 28;
      }
    } else if (!majorMonths.includes(month)) {
      endDate = 30;
    }

    if (year === startYear && month === startMonth) {
      startDate = dateRange[0].getDate();
    }
    if (year === endYear && month === endMonth) {
      endDate = dateRange[1].getDate();
    }
    const date = getRandomNumber(startDate, endDate);

    // Hour
    if (year === startYear && month === startMonth && date === startDate) {
      startHour = dateRange[0].getHours();
    }
    if (year === endYear && month === endMonth && date === endDate) {
      endHour = dateRange[1].getHours();
    }
    const hour = getRandomNumber(startHour, endHour);

    // Minute
    if (
      year === startYear &&
      month === startMonth &&
      date === startDate &&
      hour === startHour
    ) {
      startMinute = dateRange[0].getMinutes();
    }
    if (
      year === endYear &&
      month === endMonth &&
      date === endDate &&
      hour === endHour
    ) {
      endMinute = dateRange[1].getMinutes();
    }
    const minute = getRandomNumber(startMinute, endMinute);

    // Second
    if (
      year === startYear &&
      month === startMonth &&
      date === startDate &&
      hour === startHour &&
      minute === startMinute
    ) {
      startSecond = dateRange[0].getSeconds();
    }
    if (
      year === endYear &&
      month === endMonth &&
      date === endDate &&
      hour === endHour &&
      minute === endMinute
    ) {
      endSecond = dateRange[1].getSeconds();
    }
    const second = getRandomNumber(startSecond, endSecond);

    const result = new Date(
      `${year}-${getTimeString(month)}-${getTimeString(date)}T${getTimeString(
        hour
      )}:${getTimeString(minute)}:${getTimeString(second)}`
    );
    try {
      result.toISOString();
      return result;
    } catch {
      console.error(
        `${year}-${getTimeString(month)}-${getTimeString(date)}T${getTimeString(
          hour
        )}:${getTimeString(minute)}:${getTimeString(second)}`
      );
      return new Date();
    }
  }
}
