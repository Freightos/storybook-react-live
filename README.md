# storybook-react-live

[react-live](https://github.com/FormidableLabs/react-live) addon for [Storybook](https://storybook.js.org/) v6+

## Installation

`npm i -D @freightos/storybook-react-live`

## Usage

```
import withLiveEdit from '@freightos/storybook-react-live';

stories.add(
    'Live edit',
    withLiveEdit(`
() => (
  <Center>
    <Button type="primary" size="large">
      Default
    </Button>
  </Center>
)
`, { Button } // context
    )
)

```

## Properties of `withLiveEdit()`

`withLiveEdit(code, providedScope, ops)`

- code: string
- providedScope: object of components to inject as live scope, 
- ops: object of live options
