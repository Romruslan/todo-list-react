import React, { memo } from 'react'
import { MODES } from '../../constants/app'
import { Task } from '../../interfaces/interface'
import FilterButton from './FilterButton'

interface Props {
    mode: string, 
    tasks: Task[], 
    counter: string | undefined, 
    filterAll: () => void, 
    filterActive: () => void, 
    filterCompleted: () => void, 
    clearCompletedHandler: () => void
}

const Footer: React.FC<Props> = ({
    mode,
    tasks,
    counter,
    filterAll,
    filterActive,
    filterCompleted,
    clearCompletedHandler
}) => {
    return (
        <footer className={`footer ${tasks.length || mode === MODES.COMPLETED || mode === MODES.ACTIVE ? '' : 'hidden'}`}>
            <div className="filters">
                <div className="counter">
                    <span>{counter}</span>
                </div>
                <div className="btn-container">
                    <FilterButton
                        className={`${mode === MODES.ALL ? 'selected' : ''}`}
                        filter={filterAll}
                        value={"All"}
                        href={'#'}
                    />
                    <FilterButton
                        className={`${mode === MODES.ACTIVE ? 'selected' : ''}`}
                        filter={filterActive}
                        value={"Active"}
                        href={'#'}
                    />
                    <FilterButton
                        className={`${mode === MODES.COMPLETED ? 'selected' : ''}`}
                        filter={filterCompleted}
                        value={"Completed"}
                        href={'#'}
                    />
                </div>
                <div className="btn-clear-container">
                    <button
                        className={`button-clear-completed ${tasks.some((item: Task) => item.active) ? '' : 'hidden-block'}`}
                        onClick={clearCompletedHandler}>Clear completed
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)
