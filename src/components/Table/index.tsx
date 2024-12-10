import { CSSProperties } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import { getCurrentYear, getDateString } from '../../utils'
import Description from '../Description'
import styles from './index.module.css'
import { isValidDateFormat, isValidDateRange, isValidDaysOfTheWeek } from '../../validators'

interface TableProps {
  data?: InputData[]
  start?: string
  end?: string
  daysOfTheWeek?: string[]
  textColor?: string
  startsOnSunday?: boolean
  includeBoundary?: boolean
  cx?: number
  cy?: number
  cr?: number
  theme?: string | ThemeProps
  onCellClick?: MouseEventHandler
  scroll?: boolean
  style?: CSSProperties
  hideDayLabels?: boolean
  hideDescription?: boolean
  hideMonthLabels?: boolean
}

export default function Table({
  data = [],
  start = getDateString(getCurrentYear(), 0, 1),
  end = getDateString(getCurrentYear(), 11, 31),
  daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  textColor = '#1f2328',
  startsOnSunday = true,
  includeBoundary = true,
  cx = 10,
  cy = 10,
  cr = 2,
  theme = 'grass',
  onCellClick = (_, data) => console.log(data),
  scroll = false,
  style,
  hideDayLabels = false,
  hideDescription = false,
  hideMonthLabels = false,
}: TableProps) {
  const padding = `0 ${cx + 70}px 0 ${cx + 10}px`

  isValidDateFormat(start)

  isValidDateFormat(end)

  isValidDateRange(start, end)

  isValidDaysOfTheWeek(daysOfTheWeek)

  return (
    <div className={styles.container} style={style}>
      <div className={styles.calendar} style={{ padding: padding, overflowX: scroll ? 'scroll' : 'clip' }}>
        <table className={styles.table}>
          {hideMonthLabels === false &&
            <TableHead start={start} end={end} textColor={textColor} startsOnSunday={startsOnSunday} cy={cy} />
          }
          <TableBody
            data={data}
            start={start}
            end={end}
            daysOfTheWeek={daysOfTheWeek}
            textColor={textColor}
            startsOnSunday={startsOnSunday}
            includeBoundary={includeBoundary}
            cx={cx}
            cy={cy}
            cr={cr}
            theme={theme}
            onClick={onCellClick}
            hideDayLabels={hideDayLabels}
          />
        </table>
      </div>
      {hideDescription === false &&
        <Description textColor={textColor} cx={cx} cy={cy} cr={cr} theme={theme} />
      }
    </div>
  )
}
