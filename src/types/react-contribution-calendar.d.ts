// Type definitions for react-contribution-calendar
// Project: https://github.com/SeiwonPark/react-contribution-calendar
// Definitions by: Seiwon Park <https://github.com/SeiwonPark>

/// <reference path="./types.d.ts" />

declare module 'react-contribution-calendar' {
  import { FunctionComponent } from 'react'
  /**
   * Returns an object of ThemeProps which could be used as theme attribute of
   * ContributionCalendarProps.
   * @param {ThemeProps} themeProps - Theme color properties from level 0 to 4.
   * @example
   * ```tsx
   * const customTheme = createTheme({
      level0: '#ebedf0',
      level1: '#9be9a8',
      level2: '#40c463',
      level3: '#30a14e',
      level4: '#216e39',
   * })
   * ```
   */
  export const createTheme: (themeProps: ThemeProps) => ThemeProps

  /**
   * This is for attributes of <ContributionCalendar /> functional component.
   */
  export interface ContributionCalendarProps {
    /**
     * List of items in the data, defaults to an empty list `[]`.
     * @example
     * ```tsx
     * const data = [
     *   {
     *     "2023-07-08": { "level": 2, "data": {} }
     *   },
     *   {
     *     "2023-07-09": { "level": 1, "data": {} }
     *   },
     *   ...
     * ]
     *
     * <ContributionCalendar data={data} />
     * ```
     */
    data?: InputData[]
    /**
     * The starting date of calendar, defaults to 1st January of current year.
     * `start` date must be earlier than `end` date.
     * @example
     * ```tsx
     * <ContributionCalendar start="2023-04-04" />
     * ```
     */
    start?: string
    /**
     * The ending date of calendar, defaults to 31st December of current year.
     * `start` date must be earlier than `end` date.
     * @example
     * ```tsx
     * <ContributionCalendar end="2023-05-19" />
     * ```
     */
    end?: string
    /**
     * The days of the week, defaults to `['Sun', 'Mon', ... 'Sat']`. The day of the
     * week should start from Sunday regardless of the `startsOnSunday` option.
     * The length of the array must be exact `7`.
     * @example
     * ```tsx
     * const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     *
     * <ContributionCalendar daysOfTheWeek={daysOfTheWeek} />
     * ```
     */
    daysOfTheWeek?: string[]
    /**
     * The text color of calendar indexes for months and dates, defaults to `#1F2328`.
     * @example
     * ```tsx
     * <ContributionCalendar textColor="#000" />
     * ```
     */
    textColor?: string
    /**
     * Whether to set calendar start on Sunday or not, defaults to `true`.
     * If set to false, the week will start on Monday.
     * @example
     * ```tsx
     * <ContributionCalendar startsOnSunday={true} />
     * ```
     */
    startsOnSunday?: boolean
    /**
     * Whether to include the boundary column or not, defaults to `true`.
     * @example
     * ```tsx
     * <ContributionCalendar includeBoundary={true} />
     * ```
     */
    includeBoundary?: boolean
    /**
     * The size of width of each cell, defaults to `10`px.
     * @example
     * ```tsx
     * <ContributionCalendar cx={10} />
     * ```
     */
    cx?: number
    /**
     * The size of height of each cell, defaults to `10`px.
     * @example
     * ```tsx
     * <ContributionCalendar cy={10} />
     * ```
     */
    cy?: number
    /**
     * The border radius of each cell, defaults to `2`px.
     * @example
     * ```tsx
     * <ContributionCalendar cr={2} />
     * ```
     */
    cr?: number
    /**
     * The name of theme for the ContributionCalendar, defaults to `grass`. Also
     * `ThemeProps` could be added directly i.e. when trying to use custom theme.
     * @example
     * ```tsx
     * <ContributionCalendar theme="grass" />
     * ```
     */
    theme?: string | ThemeProps
    /**
     * Click event handler for table cells. This takes `data` as optional value
     * of each cell and returns callback function.
     * @example
     * ```tsx
     * <ContributionCalendar onCellClick={(e, data) => console.log(data)} />
     * ```
     */
    onCellClick?: MouseEventHandler
    /**
     * Option for showing scrollbar for the calendar table, defaults to false.
     */
    scroll?: boolean
    /**
     * Root styles for the ContributionCalendar.
     * @example
     * ```tsx
     * <ContributionCalendar style={{ padding: '4px' }} />
     * ```
     */
    style?: CSSProperties
    /**
     * Option for hiding labels of the calendar, defaults to false.
     * @example
     * ```tsx
     * <ContributionCalendar hideDayLabels={true} />
     * ```
     */
    hideDayLabels?: boolean
    /**
     * Option for hiding description of the calendar, defaults to false.
     * @example
     * ```tsx
     * <ContributionCalendar hideDescription={true} />
     * ```
     */
    hideDescription?: boolean
    /**
     * Option for hiding table head of the calendar, defaults to false.
     * @example
     * ```tsx
     * <ContributionCalendar hideMonthLabels={true} />
     * ```
     */
    hideMonthLabels?: boolean
  }

  /**
   * `ContributionCalendar` is a React component that renders data contributions over time,
   * similar to the contribution graph seen on GitHub profiles.
   *
   * This calendar displays data in cells, with varying color intensities based on the value
   * of each data point. The appearance and behavior of the calendar can be customized using
   * the provided props.
   *
   * @example
   * ```tsx
   * import { ContributionCalendar } from 'react-contribution-calendar';
   *
   * const data = [
   *  {
   *     '2023-07-08': {
   *       level: 1,
   *     }
   *   },
   *  {
   *     '2023-07-09': {
   *       level: 4,
   *       data: {},            // data with any kinds of keys can be set
   *     }
   *   },
   *  {
   *     '2023-03-31': {
   *       level: 3,
   *       data: {
   *         myKey: 'my data'  // data with any kinds of keys can be set
   *       },
   *     }
   *   },
   *   // ...
   * ];
   *
   *
   * <ContributionCalendar data={data} theme="grass" />
   * ```
   *
   * @see {@link https://github.com/SeiwonPark/react-contribution-calendar#apis}
   */
  export const ContributionCalendar: FunctionComponent<ContributionCalendarProps>
}
