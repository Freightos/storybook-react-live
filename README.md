# storybook-react-live

[react-live](https://github.com/FormidableLabs/react-live) decorator for [Storybook](https://storybook.js.org/) v6+

![npm](https://img.shields.io/npm/v/@freightos/storybook-react-live)
![NPM](https://img.shields.io/npm/l/@freightos/storybook-react-live)


## Installation

`npm i -D @freightos/storybook-react-live`

## Usage

```jsx
import withLiveEdit from '@freightos/storybook-react-live';

const code = `() => (
  <Center>
    <Button type="primary" size="large">
      Default
    </Button>
  </Center>
)`;

stories.add(
  'Live edit',
  withLiveEdit({
    code,
    scope: { Button }
  })
)

```

## Props of `withLiveEdit()`

All props accepted by [\<LiveProvider /\>](https://github.com/FormidableLabs/react-live#liveprovider-) and:

|Name|PropType|Description|
|---|---|---|
|theme|PropTypes.object|A `prism-react-renderer` theme object. See more [here](https://github.com/FormidableLabs/prism-react-renderer#theming)
|editorStyle|PropTypes.object| Styles object for overriding editor styles
|errorStyles|PropTypes.object| Styles object for overriding error styles

## Extend globally via `.storybook/preview.js`

Add property `reactLive` to `parameters` object. Accepts: `scope` and `theme`

```js
export const parameters = {
  reactLive: {
    scope: { Button, Icon },
    theme: synthwave84
  },
};
```

:)