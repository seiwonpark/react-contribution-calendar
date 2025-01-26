import { CSSProperties } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import { getCurrentYear, getDateString } from '../../utils'
import Description from '../Description'
import styles from './index.module.css'
import { isValidDateFormat, isValidDateRange, isValidDaysOfTheWeek } from '../../validators'
import { useMemo } from 'react'
import { useEffect } from 'react'

interface TableDateOptions {
  start?: string
  end?: string
  daysOfTheWeek?: string[]
  startsOnSunday?: boolean
  includeBoundary?: boolean
}

interface TableStyleOptions {
  textColor?: string
  style?: CSSProperties
  theme?: string | ThemeProps
  cx?: number
  cy?: number
  cr?: number
}

interface TableVisibilityOptions {
  hideDescription?: boolean
  hideMonthLabels?: boolean
  hideDayLabels?: boolean
}

interface TableProps {
  data?: InputData[]
  dateOptions?: TableDateOptions
  styleOptions?: TableStyleOptions
  visibilityOptions?: TableVisibilityOptions
  onCellClick?: MouseEventHandler
  scroll?: boolean
}

export default function Table({
  data,
  dateOptions,
  styleOptions,
  visibilityOptions,
  onCellClick = (_, data) => console.log(data),
  scroll = false,
}: TableProps) {
  const start = useMemo(() => dateOptions?.start || getDateString(getCurrentYear(), 0, 1), [dateOptions?.start])
  const end = useMemo(() => dateOptions?.end || getDateString(getCurrentYear(), 11, 31), [dateOptions?.end])
  const padding = useMemo(
    () => `0 ${(styleOptions?.cx || 0) + 70}px 0 ${(styleOptions?.cx || 0) + 10}px`,
    [styleOptions?.cx]
  )
  const startsOnSunday = useMemo(() => dateOptions?.startsOnSunday || true, [dateOptions?.startsOnSunday])
  const daysOfTheWeek = useMemo(
    () => dateOptions?.daysOfTheWeek || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    [dateOptions?.daysOfTheWeek]
  )
  const textColor = useMemo(() => styleOptions?.textColor || '#1f2328', [styleOptions?.textColor])
  const includeBoundary = useMemo(() => dateOptions?.includeBoundary || true, [dateOptions?.includeBoundary])

  useEffect(() => {
    isValidDateFormat(start)
    isValidDateFormat(end)
    isValidDateRange(start, end)
    isValidDaysOfTheWeek(daysOfTheWeek)
  }, [daysOfTheWeek, start, end])

  return (
    <div className={`${styles.base} ${styles.container}`} style={styleOptions?.style}>
      <div className={styles.calendar} style={{ padding, overflowX: scroll ? 'scroll' : 'clip' }}>
        <table className={styles.table}>
          {!visibilityOptions?.hideMonthLabels && (
            <TableHead
              start={start}
              end={end}
              textColor={textColor}
              startsOnSunday={startsOnSunday}
              cy={styleOptions?.cy || 10}
            />
          )}
          <TableBody
            data={data || []}
            start={start}
            end={end}
            daysOfTheWeek={daysOfTheWeek}
            textColor={textColor}
            startsOnSunday={startsOnSunday}
            includeBoundary={includeBoundary}
            cx={styleOptions?.cx || 10}
            cy={styleOptions?.cy || 10}
            cr={styleOptions?.cr || 2}
            theme={styleOptions?.theme || 'grass'}
            onClick={onCellClick}
            hideDayLabels={visibilityOptions?.hideDayLabels || false}
          />
        </table>
      </div>
      {!visibilityOptions?.hideDescription && (
        <Description
          textColor={textColor}
          cx={styleOptions?.cx || 10}
          cy={styleOptions?.cy || 10}
          cr={styleOptions?.cr || 2}
          theme={styleOptions?.theme || 'grass'}
        />
      )}
    </div>
  )
}
