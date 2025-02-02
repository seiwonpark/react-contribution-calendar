import React, { useState, useRef, useEffect, CSSProperties, HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

interface TooltipProps {
  content: string
  offsetX: number
  targetRect: DOMRect | null
  fontSize?: number
}

const Tooltip = ({ content, offsetX, targetRect, fontSize = 12 }: TooltipProps) => {
  if (!targetRect) return null

  const tooltipStyle: CSSProperties = {
    position: 'fixed',
    zIndex: 999,
    backgroundColor: '#25292E',
    color: '#ecf0f1',
    padding: '4px 8px',
    borderRadius: '5px',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji'`,
    fontWeight: 400,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    fontSize: `${fontSize}px`,
    left: `${targetRect.left + offsetX}px`,
    top: `${targetRect.top - 16 - fontSize - ~~(fontSize / 10)}px`,
  }

  const arrowStyle: CSSProperties = {
    position: 'fixed',
    zIndex: 999,
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #25292E',
    pointerEvents: 'none',
    left: `${targetRect.left + targetRect.width / 2 - 6}px`,
    top: `${targetRect.top - 8}px`,
  }

  return createPortal(
    <>
      <div style={tooltipStyle}>{content}</div>
      <div style={arrowStyle} />
    </>,
    document.body
  )
}

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  cx: number
  theme: string | ThemeProps
  themeProps: ThemeProps
  dataLevel: number
  style: CSSProperties
  dataTooltip: string
  tooltipSize: number
}

export default function Cell({
  cx,
  theme,
  themeProps,
  dataLevel,
  style,
  dataTooltip,
  tooltipSize,
  ...otherProps
}: CellProps) {
  const cellRef = useRef<HTMLTableCellElement>(null)
  const [tooltipOffset, setTooltipOffset] = useState<number>(-10)
  const [showTooltip, setShowTooltip] = useState(false)
  const [cellRect, setCellRect] = useState<DOMRect | null>(null)

  const getVisibleChildren = (parent: Node | null) => {
    if (!parent) return 0

    let count = 0
    parent.childNodes.forEach((node: ChildNode) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const style = window.getComputedStyle(node as Element)
        if (style.display !== 'none') {
          count++
        }
      }
    })

    return count
  }

  const getNumOfVisibleCells = (cell: HTMLTableCellElement | null): number => {
    if (!cell || !cell.parentNode) return -1

    const allCells: HTMLElement[] = Array.from(cell.parentNode.childNodes) as HTMLElement[]

    let visibleIndex = 0

    for (let i = 0; i < cell.cellIndex; i++) {
      if (allCells[i].style.display !== 'none') {
        visibleIndex++
      }
    }

    return visibleIndex
  }

  useEffect(() => {
    const handleMouseOver = () => {
      if (cellRef.current) {
        const totalLength = getVisibleChildren(cellRef.current?.parentNode)
        const numOfVisibleCells = getNumOfVisibleCells(cellRef.current)

        if (totalLength) {
          let offset = -10
          const ratio = numOfVisibleCells / totalLength

          if (ratio > 0.33) {
            offset = Math.max(~~(cellRef.current.cellIndex * -9 * cx) / totalLength, -9 * cx)
          } else {
            offset = Math.max((~~cellRef.current.cellIndex * -30 * cx) / totalLength, -10)
          }
          setTooltipOffset(offset)
        }

        setCellRect(cellRef.current.getBoundingClientRect())
        setShowTooltip(true)
      }
    }

    const handleMouseOut = () => {
      setShowTooltip(false)
    }

    if (cellRef.current) {
      cellRef.current.addEventListener('mouseover', handleMouseOver)
      cellRef.current.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      if (cellRef.current) {
        cellRef.current.removeEventListener('mouseover', handleMouseOver)
        cellRef.current.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [cx])

  const isEmojiTheme = (theme: string | ThemeProps): boolean => {
    const isCustomTextTheme = typeof theme === 'string' ? false : theme.isTextTheme || false
    return theme === 'emoji_positive' || theme === 'emoji_negative' || isCustomTextTheme
  }

  return (
    <>
      <td
        ref={cellRef}
        className={styles.calendarCell}
        style={
          {
            ...style,
            '--tooltip-offset': `${tooltipOffset}px`,
            outline: isEmojiTheme(theme) ? 'transparent' : '1px solid rgba(27, 31, 35, 0.06)',
            backgroundColor: isEmojiTheme(theme) ? 'transparent' : themeProps[`level${dataLevel}`],
          } as React.CSSProperties
        }
        data-level={dataLevel}
        {...otherProps}
      >
        {isEmojiTheme(theme) ? themeProps[`level${dataLevel}`] : undefined}
      </td>
      {showTooltip && (
        <Tooltip content={dataTooltip} offsetX={tooltipOffset} targetRect={cellRect} fontSize={tooltipSize} />
      )}
    </>
  )
}
