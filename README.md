# react-contribution-calendar

![npm](https://img.shields.io/npm/v/react-contribution-calendar?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-contribution-calendar) ![NPM](https://img.shields.io/npm/l/react-contribution-calendar)

A GitHub-like contribution calendar component for React, built with Vite and TypeScript. This provides a visual representation of contribution activity, similar to the contribution graph seen on a GitHub profile.

<br />

## Installation

```bash
$ npm i react-contribution-calendar
```

> **Note**  
> Add --save if you are using npm < 5.0.0

<br />

## Demo

- [codesandbox](https://codesandbox.io/p/sandbox/react-contribution-calendar-sxn32g)

<br/>

## Usage

```js
import { ContributionCalendar } from 'react-contribution-calendar'

const data = [
  {
    '2020-04-20': { level: 2 }
  },
  {
    '2023-07-08': { level: 1 },
  },
  {
    '2023-07-09': { level: 4, data: {} },
  },
  {
    '2023-03-31': {
      level: 3,
      data: {
        myKey: 'my data',
      },
    },
  },
]

<ContributionCalendar
  data={data}
  start="2020-04-04"
  end="2023-05-19"
  daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
  textColor="#1F2328"
  startsOnSunday={true}
  includeBoundary={true}
  theme="grass"
  cx={10}
  cy={10}
  cr={2}
  onCellClick={(e, data) => console.log(data)}
  scroll={false}
  style={}
  hideDescription={false}
  hideMonthLabels={false}
  hideDayLabels={false}
/>
```

<br />

## APIs

### `ContributionCalendar`

`ContributionCalendar` is the main component of this library. It takes a data property, which is an array of objects representing the contribution data, and a theme property to customize its appearance.

- **`data`**: An array of objects, where each object has a date string(`YYYY-MM-DD` format) as key, and an `InputDataProps` object as value. Defaults to `[]`.

  - An example data is as follows:
    ```javascript
    const data = [
      {
        '2023-07-08': {
          level: 3,
          data: {
            myKey: 'my data',
          },
        },
      },
      {
        '2023-07-09': {
          level: 1, // `data` attribute could be omitted
        },
      },
    ]
    ```

- **`start`**: Optional. The starting date for the calendar to start, defaults to current year's January 1st(`YYYY-MM-DD` format).
- **`end`**: Optional. The ending date for the calendar to end, defaults to current year's December 31st(`YYYY-MM-DD` format).
- **`daysOfTheWeek`**: Optional. The days of the week, which will be the head column of each row. The array should start from Sunday so that you can use with `startsOnSunday` option correctly. Defaults to `['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']`.
- **`textColor`**: Optional. The color of indexes. String color code format, defaults to `#1F2328`.
- **`startsOnSunday`**: Optional. Whether to start the calendar on Sunday or not, defaults to `true`. If set to false, calendar will start on Monday.
- **`includeBoundary`**: Optional. Whether to include the boundary cells in the starting or ending date column, defaults to `true`.
- **`theme`**: Optional. A string that represents a predefined theme name, or an object with custom theme colors. Defaults to `grass`.
- **`cx`**: Optional. The pixel size of width of each cell, defaults to `10`.
- **`cy`**: Optional. The pixel size of height of each cell, defaults to `10`.
- **`cr`**: Optional. The pixel size of border radius of each cell, defaults to `2`.
- **`scroll`**: Optional. Whether to show scrollbar or not, defaults to `false`.
- **`onCellClick`**: Optional. An onClick mouse event on each table cell.
- **`hideDescription`**: Optional. Allows you to hide the description displayed at the bottom of the graph.
- **`hideMonthLabels`**: Optional. Allows you to hide the month labels displayed at the top of the graph.
- **`hideDayLabels`**: Optional. ALlows you to hide the day labels displayed at the side of the graph.

<br />

### `createTheme`

`createTheme` is a helper function to create custom themes. It takes a string representing a predefined theme name or an object containing custom theme colors. This returns a theme object(`ThemeProps`).

<br />

## Themes

You can customize the appearance of the `<ContributionCalendar />` with the theme property. We provide several built-in themes.

```javascript
// Replace `theme` attribute with belows
<ContributionCalendar theme={'grass'} />
```

### Light Themes

#### `empty`

<img src="./images/empty.png" alt="empty" with=600 />

#### `grass`

<img src="./images/grass.png" alt="grass" with=600 />

#### `cherry`

<img src="./images/cherry.png" alt="cherry" with=600 />

#### `cherry_blossom`

<img src="./images/cherry_blossom.png" alt="cherry_blossom" with=600 />

#### `pink`

<img src="./images/pink.png" alt="pink" with=600 />

#### `ocean`

<img src="./images/ocean.png" alt="ocean" with=600 />

#### `sky`

<img src="./images/sky.png" alt="sky" with=600 />

#### `halloween`

<img src="./images/halloween.png" alt="halloween" with=600 />

#### `winter`

<img src="./images/winter.png" alt="winter" with=600 />

#### `purquoise`

<img src="./images/purquoise.png" alt="purquoise" with=600 />

#### `mustard`

<img src="./images/mustard.png" alt="mustard" with=600 />

#### `gray`

<img src="./images/gray.png" alt="gray" with=600 />

#### `vomit`

<img src="./images/vomit.png" alt="vomit" with=600 />

#### `neonpunk`

<img src="./images/neonpunk.png" alt="neonpunk" with=600 />

#### `citypop`

<img src="./images/citypop.png" alt="citypop" with=600 />

#### `coral`

<img src="./images/coral.png" alt="coral" with=600 />

#### `emoji_positive`

<img src="./images/emoji_positive.png" alt="emoji_positive" with=600 />

#### `emoji_negative`

<img src="./images/emoji_negative.png" alt="emoji_negative" with=600 />

<br />

### Dark Themes

#### `dark_empty`

<img src="./images/dark_empty.png" alt="dark_empty" with=600 />

#### `dark_grass`

<img src="./images/dark_grass.png" alt="dark_grass" with=600 />

#### `dark_cherry`

<img src="./images/dark_cherry.png" alt="dark_cherry" with=600 />

#### `dark_cherry_blossom`

<img src="./images/dark_cherry_blossom.png" alt="dark_cherry_blossom" with=600 />

#### `dark_pink`

<img src="./images/dark_pink.png" alt="dark_pink" with=600 />

#### `dark_ocean`

<img src="./images/dark_ocean.png" alt="dark_ocean" with=600 />

#### `dark_sky`

<img src="./images/dark_sky.png" alt="dark_sky" with=600 />

#### `dark_halloween`

<img src="./images/dark_halloween.png" alt="dark_halloween" with=600 />

#### `dark_winter`

<img src="./images/dark_winter.png" alt="dark_winter" with=600 />

#### `dark_purquoise`

<img src="./images/dark_purquoise.png" alt="dark_purquoise" with=600 />

#### `dark_mustard`

<img src="./images/dark_mustard.png" alt="dark_mustard" with=600 />

#### `dark_gray`

<img src="./images/dark_gray.png" alt="dark_gray" with=600 />

#### `dark_vomit`

<img src="./images/dark_vomit.png" alt="dark_vomit" with=600 />

#### `dark_neonpunk`

<img src="./images/dark_neonpunk.png" alt="dark_neonpunk" with=600 />

#### `dark_citypop`

<img src="./images/dark_citypop.png" alt="dark_citypop" with=600 />

#### `dark_coral`

<img src="./images/dark_coral.png" alt="dark_coral" with=600 />

<br />

### Custom Theme

```javascript
import { ContributionCalendar, createTheme } from 'react-contribution-calendar'

function App() {
  /* Define your custom theme */
  const customTheme = createTheme({
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39',
  })

  return <ContributionCalendar theme={customTheme} />
}
```

Or you can set theme properties directly,

```javascript
import { ContributionCalendar } from 'react-contribution-calendar'

function App() {
  return (
    <ContributionCalendar
      theme={{
        /* Assign theme properties directly */
        level0: '#ebedf0',
        level1: '#9be9a8',
        level2: '#40c463',
        level3: '#30a14e',
        level4: '#216e39',
      }}
    />
  )
}
```

And say if you'd like to set text theme like emoji, then you could add `isTextTheme` property as follows:

```javascript
import { ContributionCalendar } from 'react-contribution-calendar'

function App() {
  return (
    <ContributionCalendar
      theme={{
        isTextTheme: true, // <--- Must be added if it's a text theme.
        level0: '🙂',
        level1: '🤔',
        level2: '😎',
        level3: 'A',
        level4: 'B',
      }}
    />
  )
}
```
