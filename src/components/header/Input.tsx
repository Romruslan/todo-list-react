import React, { memo } from 'react'

interface Props {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPressedHandler: (e: React.KeyboardEvent) => void,
    inputValue: string
}

const Input: React.FC<Props> = ({ onChangeHandler, onPressedHandler, inputValue }) => {
    return (
        <div className="input-container">
            <input 
                type="text"
                className="main-input"  
                placeholder={'What needs to be done?'}
                value={inputValue} 
                onChange={onChangeHandler}
                onKeyPress={onPressedHandler}
            />
        </div>
    )
}

export default memo(Input)