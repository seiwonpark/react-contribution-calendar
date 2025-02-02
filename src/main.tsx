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
        textColor: '#1f2328',
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
      onCellClick={(_, data) => console.log(data)}
      scroll={true}
    />
  </React.StrictMode>
)
