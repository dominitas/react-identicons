# React Identicons

[![npm version](https://img.shields.io/npm/v/@ribas160/react-identicons.svg)](https://www.npmjs.com/package/@ribas160/react-identicons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React component for generating GitHub-style identicons as PNGs or SVGs.

This library is a React wrapper for the popular `identicon.js` library. It produces the same shape and (nearly) the same color as GitHub when given the same hash value.

![Screenshot](/identicon.png)

## Live Demo

[**View the live demo here**](https://ribas160.github.io/react-identicons/)

## Features

-   Generate identicons as PNG or SVG images.
-   Customize the foreground and background colors.
-   Control the size and margin of the identicon.
-   Adjust the saturation and brightness of the colors.
-   Supports server-side rendering (SSR).

## Installation

```bash
npm install @ribas160/react-identicons
```

or

```bash
yarn add @ribas160/react-identicons
```

## Usage

Here's a simple example of how to use the `Identicon` component:

```tsx
import React from 'react';
import Identicon from '@ribas160/react-identicons';

const App = () => {
  return <Identicon value="welcome" options={{ size: 100 }} />;
};

export default App;
```

You can also provide a custom hash instead of a value:

```tsx
import React from 'react';
import Identicon from '@ribas160/react-identicons';

const App = () => {
  return <Identicon hash="a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2" options={{ size: 100 }} />;
};

export default App;
```

## Props

| Prop | Type | Description |
| ----- | ---- | ----------- |
| `value` | `string` | A string that will be hashed to generate the identicon. The component will use the Web Crypto API to generate a SHA-1 hash of this string.|
| `hash` | `string` | A pre-computed hash string. If you provide a hash, the `value` prop will be ignored. |
| `options` | `IdenticonOptions` | An object with options to customize the identicon. See the options table below. |
| `alt` | `string` | Alt attribute for the image (only for `png` format) |

### `IdenticonOptions`

| Option | Type | Description |
| -------| -----| ----------- |
| `background` | `RGBA` | The background color of the identicon as an RGBA array (e.g., `[255, 255, 255, 255]`). |
| `foreground` | `RGBA` | The foreground color of the identicon as an RGBA array. If not provided, a color will be generated from the hash. |
| `margin` | `number` | The margin around the identicon, as a value from 0 to 1. |
| `size` | `number` | The size of the identicon in pixels. |
| `saturation` | `number` | The saturation of the generated color, as a value from 0 to 1. |
| `brightness` | `number` | The brightness of the generated color, as a value from 0 to 1. |
| `format` | `"svg"\|"png"` | The format of the generated image. Defaults to `png`. |

## Contributing

Contributions are welcome! Please see the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

[pnglib.js](http://www.xarg.org/download/pnglib.js)

Copyright 2010, [Robert Eisele](https://github.com/infusion)
Released under the [BSD license](http://www.opensource.org/licenses/bsd-license.php)


[identicon.js](https://raw.githubusercontent.com/stewartlord/identicon.js/refs/heads/master/identicon.js)

Copyright 2020, [Stewart Lord](https://github.com/stewartlord)
Released under the [BSD license](http://www.opensource.org/licenses/bsd-license.php)