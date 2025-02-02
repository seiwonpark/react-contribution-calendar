import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      dateOptions={{
        daysOfTheWeek: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
        startsOnSunday: true,
        includeBoundary: true,
      }}
      styleOptions={{
        theme: 'grass',
        cx: 12,
        cy: 12,
        cr: 2,
      }}
      visibilityOptions={{
        hideDescription: false,
        hideMonthLabels: false,
        hideDayLabels: false,
      }}
      onCellClick={(e, data) => console.log(data)}
      scroll={true}
    />
  </React.StrictMode>
)
