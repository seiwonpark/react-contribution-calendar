import { THEMES } from '../styles/colors'

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * Gets date details.
 * @param {Date} _date - Date to calculate, defaults to current date.
 * @returns An object containing the full year, month name, day of the month, and
 * day of the week for the current date.
 * @example
 * Returns
 * {
 *  year: '2023',
 *  month: 'July',
 *  day: '08',
 *  date: 'Saturday'
 * }
 * getDateDetails()
 */
export const getDateDetails = (_date: Date = new Date()) => {
  const fullDates: KeyValuePair = {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
  }

  const fullMonths: KeyValuePair = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December',
  }

  const time = _date.toString().split(' ')
  return {
    year: time[3],
    month: fullMonths[time[1]],
    day: parseInt(time[2], 10),
    date: fullDates[time[0]],
  }
}

/**
 * Returns sum of numbers in the `array`.
 * @param {number[]} array - A number of array.
 */
export const getArraySum = (array: number[]): number => {
  return array.reduce((x, y) => x + y, 0)
}

/**
 * Gets string representation of the date from the given `dateString`.
 * @param {string} dateString - The date string to be converted.
 * @returns A string representation of the date.
 * @example
 * // Returns 'Saturday, July 8, 2023'
 * getDateTooltip('2023-07-08')
 */
export const getDateTooltip = (dateString: string) => {
  const date = getDateDetails(new Date(dateString + 'T00:00'))
  return `${date.date}, ${date.month} ${date.day}, ${date.year}`
}

/**
 * Gets string representation of the date from the given year, monthIndex, and day.
 * @param {number} year - Year to calculate from.
 * @param {number} monthIndex - An index of month to calculate from. Range from `0`(January) to `11`(December).
 * @param {number} day - Day of the month to calculate from.
 * @returns A string representation of the date in 'YYYY-MM-DD' format.
 * @example
 * // Returns '2023-07-08'
 * getDateString(2023, 6, 8)
 */
export const getDateString = (year: number, monthIndex: number, day: number): string => {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Returns formatted date string.
 * @param {number} year - Year to calculate from.
 * @param {number} month - Month to calculate from.
 * @param {number} day - Day to calculate from.
 * @example
 * // Returns '2023-07-08'
 * formatDateString(2023, 7, 8)
 */
const formatDateString = (year: number, month: number, day: number) => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Parses date info from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns { year: 2023, month: 7, day: 8 }
 * parseDateFromDateString('2023-07-08')
 */
export const parseDateFromDateString = (dateString: string) => {
  return { year: +dateString.slice(0, 4), month: +dateString.slice(5, 7), day: +dateString.slice(8, 10) }
}

/**
 * Parses integer value of year from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 2023
 * parseYearFromDateString('2023-07-08')
 */
export const parseYearFromDateString = (dateString: string): number => {
  return +dateString.slice(0, 4)
}

/**
 * Parses integer value of month from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 7
 * parseMonthFromDateString('2023-07-08')
 */
export const parseMonthFromDateString = (dateString: string): number => {
  return +dateString.slice(5, 7)
}

/**
 * Parses integer value of day from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 8
 * parseDayFromDateString('2023-07-08')
 */
export const parseDayFromDateString = (dateString: string): number => {
  return +dateString.slice(8, 10)
}

/**
 * Determines if the given `year` is a leap year or not.
 * @param {number} year - Year to calculate from, defaults to the current year.
 */
export const isLeapYear = (year: number = getCurrentYear()): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * The number of days for each month is fixed, with the exception of February,
 * which changes based on whether the year is a leap year or not.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns The number of days in each month for the year.
 */
const getDaysInMonths = (year: number = getCurrentYear()): number[] => {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

/**
 * Returns the index of the day from the date string. Each index represents dates as follows:
 * - `0`: Sunday
 * - `1`: Monday
 * - `2`: Tuesday
 * - `3`: Wednesday
 * - `4`: Thursday
 * - `5`: Friday
 * - `6`: Saturday
 * @param {string} date - Date string to get day index from.
 * @returns An index of the day of the date string.
 */
export const getDayIndexFromDateString = (date: string): number => {
  return new Date(date).getDay()
}

/**
 * Returns the index of the first day of year. Each index represents dates as follows:
 * - `0`: Sunday
 * - `1`: Monday
 * - `2`: Tuesday
 * - `3`: Wednesday
 * - `4`: Thursday
 * - `5`: Friday
 * - `6`: Saturday
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns An index of the first day of the year.
 */
export const getFirstDayIndexOfYear = (year: number = getCurrentYear()): number => {
  return new Date(year, 0, 1).getDay()
}

/**
 * Returns the index of day from the date. Each index represents dates as follows:
 * - `0`: Sunday
 * - `1`: Monday
 * - `2`: Tuesday
 * - `3`: Wednesday
 * - `4`: Thursday
 * - `5`: Friday
 * - `6`: Saturday
 * @param {string} date - Date string to calculate.
 * @returns An index of the day of the month.
 */
export const getDayIndexOfMonth = (date: string): number => {
  return new Date(date).getDay()
}

/**
 * Current year in number format.
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * Calculates the number of columns required for each row from the given input `year`.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns An array containing the number of columns for each row.
 * @example
 * // Returns [5, 4, 5, 5, 4, 5, 5, 4, 5, 4, 5, 5]
 * getColumnSpansForYears(2020)
 */
export const getColumnSpansForYears = (
  year: number = getCurrentYear(),
  startYear: number,
  endYear: number
): number[] => {
  const daysInMonths = getDaysInMonths(year)
  const firstDayOfYear = getFirstDayIndexOfYear(year)
  const colSpans: number[] = []
  let currentDay = firstDayOfYear

  for (let i = 0; i < 12; i++) {
    const daysInMonth = daysInMonths[i]
    let cols = 0

    for (let j = 0; j < daysInMonth; j++) {
      // if `currentDay` is the beginning of a new column
      if (currentDay === 0) {
        cols++
      }
      currentDay = (currentDay + 1) % 7
    }

    if (i === 0 && firstDayOfYear !== 0) {
      cols++
    }

    colSpans.push(cols)
  }

  // removes colSpans width if it's not the starting year
  if (year !== startYear && firstDayOfYear !== 0 && startYear !== endYear) {
    colSpans[0] -= 1
  }

  return colSpans
}

/**
 * Parses given `inputData` and returns the data in a `Map` structure.
 * @param {InputData[]} inputData - JSON list format input data.
 * @returns Parsed map from the given JSON list.
 */
export const parseInputData = (inputData: InputData[]): Map<string, InputDataProps> => {
  const parsedData = new Map<string, InputDataProps>()

  inputData.forEach((data) => {
    Object.keys(data).forEach((date) => {
      parsedData.set(date, data[date] as InputDataProps)
    })
  })

  return parsedData
}

/**
 * Convert given data to a ThemeProps
 * @param {string | ThemeProps} inputTheme - Predefined theme name string or custom color ThemeProps
 * @returns Converted ThemeProps from theme name or user define color props
 */
export const createTheme = (inputTheme: string | ThemeProps): ThemeProps => {
  return typeof inputTheme === 'string' ? THEMES[inputTheme] : inputTheme
}

/**
 * Returns empty 2D array filled with zeros representing indexes for rows and
 * columns for each week in a year.
 * @param {number} startYear - The starting year for 2D array.
 * @param {number} endYear - The ending year for 2D array.
 */
const createNumberArrays = (startYear: number, endYear: number): number[][] => {
  let columns = 0
  for (let year = startYear; year <= endYear; ++year) {
    columns += getColumnsForYear(startYear, year === startYear)
  }

  return new Array(7).fill(0).map(() => new Array(columns).fill(0))
}

/**
 * Returns empty 2D array filled with empty string representing rows for each date and
 * columns for each week in a year.
 * @param {number} startYear - The starting year for 2D array.
 * @param {number} endYear - The ending year for 2D array.
 */
const createStringArrays = (startYear: number, endYear: number): string[][] => {
  let columns = 0
  for (let year = startYear; year <= endYear; ++year) {
    columns += getColumnsForYear(startYear, year === startYear)
  }

  return new Array(7).fill('').map(() => new Array(columns).fill(''))
}

const getColumnsForYear = (year: number, isStartYear: boolean) => {
  const firstDayIndex = getFirstDayIndexOfYear(year)

  if (isStartYear || firstDayIndex === 0) {
    return 53
  } else {
    return 52
  }
}

/**
 * Returns the 2D number array from 1st January of start year to 31st December of end year.
 * @param {string} start - The starting date for 2D array.
 * @param {string} end - The ending date for 2D array.
 * @param {boolean} startsOnSunday - Whether to start the calendar from Sunday or not.
 * @returns The 2D number array filled with indexes for all days between start and end year.
 */
const getIndexArray = (start: string, end: string, startsOnSunday: boolean): number[][] => {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)

  const indexArray: number[][] = createNumberArrays(startYear, endYear)
  let lastColumn = 0
  let day = 1

  for (let year = startYear; year <= endYear; ++year) {
    const firstDayIndex = startsOnSunday ? getFirstDayIndexOfYear(year) : (getFirstDayIndexOfYear(year) + 6) % 7
    const daysInMonths = getDaysInMonths(year)

    let currentMonthIndex = 0
    let currentDay = 1
    let currentDateIndex = firstDayIndex

    while (currentMonthIndex < 12) {
      for (let i = 0; i < daysInMonths[currentMonthIndex]; ++i) {
        indexArray[currentDateIndex % 7][~~(currentDateIndex / 7) + lastColumn] = day

        currentDateIndex++
        currentDay++
        day++
      }

      if (currentDay > daysInMonths[currentMonthIndex]) {
        currentDay = 1
        currentMonthIndex++
      }
    }

    lastColumn += ~~(currentDateIndex / 7)
  }

  return indexArray
}

/**
 * Returns the 2D string array from 1st January of start year to 31st December of end year.
 * @param {string} start - The starting date for 2D array.
 * @param {string} end - The ending date for 2D array.
 * @param {boolean} startsOnSunday - Whether to start the calendar from Sunday or not.
 * @returns The 2D string array filled with dates for all days between start and end year.
 */
export const getDayArray = (start: string, end: string, startsOnSunday: boolean): string[][] => {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)

  const dayArray: string[][] = createStringArrays(startYear, endYear)
  let lastColumn = 0
  let day = 1

  for (let year = startYear; year <= endYear; ++year) {
    const firstDayIndex = startsOnSunday ? getFirstDayIndexOfYear(year) : (getFirstDayIndexOfYear(year) + 6) % 7
    const daysInMonths = getDaysInMonths(year)

    let currentMonthIndex = 0
    let currentDay = 1
    let currentDateIndex = firstDayIndex

    while (currentMonthIndex < 12) {
      for (let i = 0; i < daysInMonths[currentMonthIndex]; ++i) {
        const dateString = formatDateString(year, currentMonthIndex + 1, currentDay)
        dayArray[currentDateIndex % 7][~~(currentDateIndex / 7) + lastColumn] = dateString

        currentDateIndex++
        currentDay++
        day++
      }

      if (currentDay > daysInMonths[currentMonthIndex]) {
        currentDay = 1
        currentMonthIndex++
      }
    }

    lastColumn += ~~(currentDateIndex / 7)
  }

  return dayArray
}

/**
 * Calculates target date by date difference from the 1st January and returns its
 * row and column index in an object.
 * @param {number} startYear - The starting year to calculate from.
 * @param {string} targetDate - The date to get row and column indexes from.
 * @param {boolean} startsOnSunday - Whether to start the calendar from Sunday or not.
 * @returns An object of row and column index that matches the target date.
 */
export const getRowAndColumnIndexFromDate = (startYear: number, targetDate: string, startsOnSunday: boolean) => {
  const startDate = `${startYear}-01-01`
  const targetDay = getDaysBetween(startDate, targetDate)
  const indexArray = getIndexArray(startDate, targetDate, startsOnSunday)

  for (let r = 0; r < indexArray.length; ++r) {
    for (let c = 0; c < indexArray[r].length; ++c) {
      if (targetDay === indexArray[r][c]) {
        return { row: r, col: c }
      }
    }
  }
  return { row: 0, col: 0 }
}

/**
 * Gets date difference in days.
 * @param {string} date1 - The starting date to be calculated from.
 * @param {string} date2 - The target date to calculate.
 * @returns The date difference between two dates.
 * @example
 * // Returns 2
 * getDaysBetween('2023-01-01', '2023-01-02')
 */
export const getDaysBetween = (date1: string, date2: string): number => {
  const timeDifference = Math.abs(new Date(date1).getTime() - new Date(date2).getTime())
  return timeDifference / (1000 * 60 * 60 * 24) + 1
}

/**
 * This function is for table head component to return indexes for month and column spans
 * from the `dayArray` in a range between `start` and `end` date.
 * @param {string} start - The starting date for the 2D array.
 * @param {string} end - The ending date for the 2D array.
 * @param {boolean} startsOnSunday - Whether to start the calendar from Sunday or not.
 * @param {number[][]} dayArray - 2D string array filled with days in 'YYYY-MM-DD' format.
 */
export const getMonthsAndColSpans = (
  start: string,
  end: string,
  dayArray: string[][],
  startsOnSunday: boolean
): { months: string[]; colSpans: number[] } => {
  const { row: startRow, col: startCol } = getRowAndColumnIndexFromDate(
    parseYearFromDateString(start),
    start,
    startsOnSunday
  )
  const { col: endCol } = getRowAndColumnIndexFromDate(parseYearFromDateString(start), end, startsOnSunday)

  const months: string[] = []
  const colSpans: number[] = []

  let prevMonth = -1
  let currentMonth = 0

  for (let c = startCol; c <= endCol; ++c) {
    if (c === startCol) {
      currentMonth = parseMonthFromDateString(dayArray[startRow][c]) - 1
    } else {
      currentMonth = parseMonthFromDateString(dayArray[0][c]) - 1
    }

    if (currentMonth !== prevMonth) {
      months.push(MONTH_NAMES[currentMonth])
      prevMonth = currentMonth
      colSpans.push(0)
    }

    colSpans[colSpans.length - 1]++
  }

  return { months, colSpans }
}
