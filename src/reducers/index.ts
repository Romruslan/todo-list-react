import { MODES } from '../constants/app';
import { TYPES } from '../actions/actionTypes'
import { Task } from '../interfaces/interface'
import {
    AddTaskShape,
    DeleteTaskShape,
    CheckTaskShape,
    EditTaskShape,
    ChangeValueTaskShape,
    OnBlurTaskShape,
    CheckAllTasksShape,
    ClearCompletedTasksShape,
    FilterActiveShape,
    FilterAllShape,
    FilterCompletedShape,
} from '../actions/actionShapes'

export interface RTasks {
    tasks: Task[],
    displayingTasks: Task[],
    mode: string,
}

type Actions = AddTaskShape
    | DeleteTaskShape
    | CheckTaskShape
    | EditTaskShape
    | ChangeValueTaskShape
    | OnBlurTaskShape
    | CheckAllTasksShape
    | ClearCompletedTasksShape
    | FilterAllShape
    | FilterActiveShape
    | FilterCompletedShape

const initialState: RTasks = {
    tasks: [],
    displayingTasks: [],
    mode: MODES.ALL,
}

export const tasksReducer = (state = initialState, action: Actions) => {
    const { tasks, displayingTasks } = state
    switch (action.type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                tasks: [...tasks, action.payload.task],
                displayingTasks: [...displayingTasks, action.payload.task],
                mode: MODES.ALL  
            }
        case TYPES.DELETE_TASK:
            const filteredTasks = tasks.filter((item) => action.payload.id !== item._id)
            return {
                tasks: filteredTasks,
                displayingTasks: filteredTasks,
                mode: MODES.ALL
            }
        case TYPES.CHECK_TASK:
            const updatedTasks = tasks.map((item) => {
                if (action.payload.id === item._id) {
                  return {
                    ...item,
                    active: !item.active
                  }
               } else {
                 return item
               }
             })
            return {
                tasks: updatedTasks,
                displayingTasks: updatedTasks,
                mode: MODES.ALL
            }
        case TYPES.EDIT_TASK:
            const editingTasks = tasks.map((item) => {
                if (action.payload.id === item._id) {
                  return {
                    ...item,
                    edit: !item.edit
                  }
                } else {
                  return item
                }
            })
            return {
                tasks: editingTasks,
                displayingTasks: editingTasks,
                mode: MODES.ALL
            }   
        case TYPES.CHANGE_VALUE_TASK:
            const changedTasks = tasks.map((item) => {
              if (action.payload.id === item._id) {
                return {
                  ...item,
                  text: action.payload.inputItemValue,
                  edit: false
                }
              } else {
                return item
              }
            })
            return {
              tasks: changedTasks,
              displayingTasks: changedTasks,
              mode: MODES.ALL
            }
        case TYPES.ONBLUR_TASK:
            const onBlurTasks = tasks.map((item) => {
              if (action.payload.id === item._id) {
                return {
                  ...item,
                  edit: false
                }
              } else {
                return item
              }
            })
            return {
              tasks: onBlurTasks,
              displayingTasks: onBlurTasks,
              mode: MODES.ALL
            }
        case TYPES.FILTER_ALL:
            return {
              ...state,
              displayingTasks: tasks,
              mode: MODES.ALL
            }
        case TYPES.FILTER_ACTIVE:
            const filteredActiveTasks = tasks.filter(item => !item.active)
            return {
              ...state,
              displayingTasks: filteredActiveTasks,
              mode: MODES.ACTIVE
            }
        case TYPES.FILTER_COMPLETED:
            const filteredCompletedTasks = tasks.filter(item => item.active)
            return {
              ...state,
              displayingTasks: filteredCompletedTasks,
              mode: MODES.COMPLETED
            }
        case TYPES.CLEAR_COMPLETED:
            const clearedTasks = tasks.filter(item => !item.active)
            return {
              tasks: clearedTasks,
              displayingTasks: clearedTasks,
              mode: MODES.ALL
            }
        case TYPES.CHECK_ALL:
            const allTasksActive = tasks.every((item) => item.active)
            const checkedAllTasks = tasks.map((item) => {
              return {
                ...item,
                active: !allTasksActive
              }
            })
            return {
              tasks: checkedAllTasks,
              displayingTasks: checkedAllTasks,
              mode: MODES.ALL
            }
        default:
          return state
    }
}