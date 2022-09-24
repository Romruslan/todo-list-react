import React, { memo } from 'react'
import { Task } from '../../interfaces/interface'

interface Props {
    task: Task,
    onCheckHandler: (id: string) => void,
    onDeleteHandler: (id: string) => void,
    onEditHandler: (id: string) => void,
    onBlurChangeHandler: (id: string) => void,
    onChangeValueItemHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPressedItemHandler: (e: React.KeyboardEvent, id: string) => void
}

const ListItem: React.FC<Props> = ({
        task,
        onCheckHandler,
        onDeleteHandler,
        onEditHandler,
        onBlurChangeHandler,
        onChangeValueItemHandler,
        onPressedItemHandler
    }) => {
    const { _id } = task

    const checkHandleClick = () => {
        onCheckHandler(_id)
    }

    const deleteHandleClick = () => {
        onDeleteHandler(_id)
    }

    const editHandleClick = () => {
        onEditHandler(_id)
    } 

    const onPressInputItem = (e: React.KeyboardEvent) => {
        onPressedItemHandler(e, _id)
    }

    const onBlurValueHandler = () => {
        onBlurChangeHandler(_id)
    }

    return (
        <li 
            className={`list-item ${task.active ? 'list-item-active' : ''}`}
        >
            <div className="list-item-container">
                <div 
                    className="list-item-checkbox"
                    onClick={checkHandleClick}
                />
                <div 
                    className={`list-item-text ${task.active ? 'list-item-text-active' : ''}`}
                    onDoubleClick={editHandleClick}
                >
                    <span className={`${task.edit ? 'hidden' : ''}`}>{task.text}</span>
                    {task.edit ? 
                        <input 
                            type="text"
                            defaultValue={task.text}
                            className={`list-item-input`}
                            onBlur={onBlurValueHandler}
                            onChange={onChangeValueItemHandler}
                            onKeyPress={onPressInputItem}
                            autoFocus
                        /> : null
                    }  
                </div>
                <div 
                    className={`list-item-delete ${task.edit ? 'hidden' : ''}`}
                    onClick={deleteHandleClick}
                />
            </div>
        </li>
    )
}

export default memo(ListItem)


