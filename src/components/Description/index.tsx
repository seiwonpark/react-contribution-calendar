import { createTheme } from '../../utils'
import styles from './index.module.css'

interface DescriptionProps {
  textColor: string
  cx: number
  cy: number
  cr: number
  theme: string | ThemeProps
}

export default function Description({ textColor, cx, cy, cr, theme }: DescriptionProps) {
  const themeProps = createTheme(theme)
  const padding = `4px ${cx + 72}px 0 0`

  const isEmojiTheme = (theme: string | ThemeProps): boolean => {
    const isCustomTextTheme = typeof theme === 'string' ? false : theme.isTextTheme || false
    return theme === 'emoji_positive' || theme === 'emoji_negative' || isCustomTextTheme
  }

  const getCellStyle = (theme: string | ThemeProps, level: number) => {
    if (isEmojiTheme(theme)) {
      return { width: cx, height: cy, fontSize: cx }
    }
    return {
      width: cx,
      height: cy,
      borderRadius: cr,
      backgroundColor: themeProps[`level${level}`],
      outline: '1px solid #1b1f230f',
    }
  }

  return (
    <div className={styles.description} style={{ padding: padding }}>
      <div className={styles.themes}>
        <span style={{ color: textColor, fontSize: cx }}>Less</span>
        {Array.from({ length: 5 }, (_, i) => i).map((i) => (
          <div key={`description-level-${i}`} className={styles.cell} style={{ ...getCellStyle(theme, i) }}>
            {isEmojiTheme(theme) ? themeProps[`level${i}`] : undefined}
          </div>
        ))}
        <span style={{ color: textColor, fontSize: cx }}>More</span>
      </div>
    </div>
  )
}
