# react-ldavis

> React Component for [LDAvis](https://github.com/cpsievert/LDAvis)

[![NPM](https://img.shields.io/npm/v/react-ldavis.svg)](https://www.npmjs.com/package/react-ldavis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-ldavis
```

## Usage

```jsx
import React, { Component } from 'react'

import { LDAvis } from 'react-ldavis'
import 'react-ldavis/dist/index.css'

class Example extends Component {
  render() {
    return <LDAvis
      data={{...}}
      modifyHistory={false}
      style={{ textAlign: "center" }}
    />
  }
}
```

## API

| Name | Type | Default | Description |
| - | - | - | - |
| data | `object` | `undefined` | Visualization object |
| modifyHistory | `boolean` | `false` | Normally, legacy LDAvis script changes url when you interact with visualization plot. (e.g. when you click on a topic `#topic=2&lambda=1&term=` appears at the end of the url) When this prop is `true`, plotting only one plot may not be a problem, but using multiple instances of `LDAvis` can cause inconsistency. |
| style | `(style) object` | `undefined` | Styling for `<div>` container. |

## License

MIT © [thesseyren](https://github.com/thesseyren)
