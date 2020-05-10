# my-radio

> A radio component for react

[![NPM](https://img.shields.io/npm/v/my-radio.svg)](https://www.npmjs.com/package/my-radio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-radio
```

## Usage

```jsx
import React, { Component } from 'react'

import MyRadio from 'my-radio'

class App extends Component {
    state = {
        items: [
            { txt: 'item 1', checked: false },
            { txt: 'item 2', checked: false },
            { txt: 'item 3', checked: true }
        ]
    }

    handler (refer, items) {
        this.setState({ items })
    }

    render () {
        const { items } = this.state

        return (
            <MyRadio
                refer='myRadio'
                heading='My Radio Buttons'
                handler={this.handler.bind(this)}
                items={items}
            />
        )
    }

}

export default App
```

## License

MIT © [saahithyan](https://github.com/saahithyan)
