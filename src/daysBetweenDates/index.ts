const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

function daysInMonth(year: number, month: number) {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return 30;
}

function nextDay(year: number, month: number, day: number) {
  if (day < daysInMonth(year, month)) return [year, month, day + 1];
  if (month < 12) return [year, month + 1, 1];
  return [year + 1, 1, 1];
}

function dateIsBefore(
  year1: number,
  month1: number,
  day1: number,
  year2: number,
  month2: number,
  day2: number
) {
  if (year1 < year2) return true;
  if (year1 === year2) {
    if (month1 < month2) return true;
    if (month1 === month2) return day1 < day2;
  }
  return false;
}

export function daysBetweenDates(
  year1: number,
  month1: number,
  day1: number,
  year2: number,
  month2: number,
  day2: number
) {
  let days = 0;
  while (dateIsBefore(year1, month1, day1, year2, month2, day2)) {
    [year1, month1, day1] = nextDay(year1, month1, day1);
    days += 1;
  }
  return days;
}
