/**
 * This is for handling the issue of storing the object data with string keys.
 * Note: Each object might need proper types rather than this.
 */
interface KeyValuePair {
  [key: string]: number | string
}

/**
 * Defines properties of each data from the input data list.
 */
interface InputDataProps {
  /**
   * This represents the level of data. The higher the level, the more priority it gets.
   * Levels are ranging from `0` to `4`.
   */
  level: number
  /**
   * This attribute is for containing any type of object data to embrace various usages.
   *
   * Note: Currently the type `object` might have flexibility but should be reconsidered.
   * @type {Record<string, unknown>}
   */
  data?: Record<string, unknown>
}

/**
 * This is for holding a collection of data entries. Each key is the identifier of an entry
 * and the value of the key is an `InputDataProps` which contains information about the level
 * of data and any type of object data. The level is used to set the priority of the data.
 */
interface InputData {
  [key: string]: InputDataProps | undefined
}

interface ThemeProps {
  /**
   * Option for text theme, defaults to `false`.
   */
  isTextTheme?: boolean
  /**
   * Level 0 color. This is the lowest level of priority.
   */
  level0: string
  /**
   * Level 1 color.
   */
  level1: string
  /**
   * Level 2 color.
   */
  level2: string
  /**
   * Level 3 color.
   */
  level3: string
  /**
   * Level 4 color. This is the highest level of priority.
   */
  level4: string
}

/**
 * This is for holding a set of themes. Each key is the identifier of a theme and the value
 * of the key is an `ThemeProps` which contains information about the level of color intensity.
 */
interface Theme {
  [key: string]: ThemeProps
}

/**
 * Represents the data with a table cell.
 */
interface CellData {
  /**
   * The date from the cell.
   */
  date: string
  /**
   * Contains an object data of the cell.
   * @type {object | undefined}
   */
  data?: object
}

/**
 * Type representing the mouse event specific to an HTML table cell.
 */
type TableCellMouseEvent = React.MouseEvent<HTMLTableCellElement, MouseEvent>

/**
 * Type representing a handler for mouse events on an HTML table cell.
 * @param {TableCellMouseEvent} event - The mouse event triggered on the table cell.
 * @param {CellData | undefined} cellData - Optional data of the table cell.
 */
type MouseEventHandler = (event: TableCellMouseEvent, cellData?: CellData) => void
