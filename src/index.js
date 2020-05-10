import React from 'react'

const MyRadio = ({ heading, items = [], refer, handler}) => {
    const handleRadioButtons = (index) => {
        _resetItems()

        const item = items[index]
        item.checked = !item.checked

        items[index] = item

        handler(refer, items)
    }

    const _resetItems = () => {
        items.forEach(item => item.checked = false)
    }

    const getValue = () => {
        const selectedItem = items.find(item => item.checked === true)
        if (selectedItem) return item.txt

        return 'Nothing selected yet'
    }

    return (
        <div>
            <label>{heading}</label>
            {
                items.map((item, index) => {
                    return(
                        <div key={index} onClick={() => handleRadioButtons(index)}>
                            <input type="radio" name={refer} checked={item.checked} onChange={() => {}}/>
                            <label htmlFor={item.txt}>{item.txt}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyRadio
