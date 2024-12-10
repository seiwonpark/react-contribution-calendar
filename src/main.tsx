import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      textColor="#1f2328"
      startsOnSunday={true}
      includeBoundary={true}
      cx={12}
      cy={12}
      cr={2}
      theme="grass"
      onCellClick={(_, data) => console.log(data)}
      scroll={false}
      style={{}}
      hideDescription={false}
      hideMonthLabels={false}
      hideDayLabels={false}
    />
  </React.StrictMode>
)
