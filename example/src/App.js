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
