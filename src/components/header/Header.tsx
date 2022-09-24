import React, { memo } from 'react'
import Input from './Input'

interface Props {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPressedHandler: (e: React.KeyboardEvent) => void, 
    inputValue: string
}

const Header: React.FC<Props> = ({ onChangeHandler, onPressedHandler, inputValue }) => {
    return (
        <header className="header">
            <h1 className="todos-tittle">todos</h1>
            <Input
                inputValue={inputValue}
                onChangeHandler={onChangeHandler}
                onPressedHandler={onPressedHandler}
            />
        </header>
    )
}

export default memo(Header)

