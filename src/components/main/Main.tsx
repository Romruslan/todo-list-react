import React, { memo } from 'react'
import { Task } from '../../interfaces/interface'
import ListItem from './ListItem'

interface Props {
    tasks: Task[],
    onClickCheckAll(): void,
    onCheckHandler: (id: string) => void,
    onDeleteHandler: (id: string) => void,
    onEditHandler: (id: string) => void,
    onBlurChangeHandler: (id: string) => void,
    onChangeValueItemHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPressedItemHandler: (e: React.KeyboardEvent, id: string) => void
}

const Main: React.FC<Props> = ({ 
        tasks, 
        onClickCheckAll, 
        onCheckHandler, 
        onDeleteHandler,
        onEditHandler, 
        onBlurChangeHandler,
        onChangeValueItemHandler,
        onPressedItemHandler 
    }) => {
    return (
        <section className="main">
            <input className="check-all" type="checkbox" id="check-all" />
            <label htmlFor="check-all" className="check-all-label" onClick={onClickCheckAll}/>
            <ul className="list-items">
                {tasks.map((task: Task) =>
                    <ListItem
                        key={task._id} 
                        task={task}
                        onCheckHandler={onCheckHandler}
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                        onBlurChangeHandler={onBlurChangeHandler}
                        onChangeValueItemHandler={onChangeValueItemHandler}
                        onPressedItemHandler={onPressedItemHandler}
                    />
                )}  
            </ul>
        </section>
    )    
}

export default memo(Main)

