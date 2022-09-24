import { Task } from "../interfaces/interface"
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
} from "./actionShapes"
import { 
  TYPES
} from "./actionTypes"
 
export const addTask = (task: Task): AddTaskShape => {
  return {
    type: TYPES.ADD_TASK, 
    payload: {
      task
    }
  }
}

export const deleteTask = (id: string): DeleteTaskShape => {
  return {
    type: TYPES.DELETE_TASK,
    payload: {
      id
    }
  }
}

export const checkTask = (id: string): CheckTaskShape => {
  return {
    type: TYPES.CHECK_TASK,
    payload: {
      id
    }
  }
}

export const editTask = (id: string): EditTaskShape => {
  return {
    type: TYPES.EDIT_TASK,
    payload: {
      id
    }
  }
}

export const changeValueTask = (id: string, inputItemValue: string): ChangeValueTaskShape => {
  return {
    type: TYPES.CHANGE_VALUE_TASK,
    payload: {
      id,
      inputItemValue,
    }
  }
}

export const onBlurTask = (id: string): OnBlurTaskShape => {
  return {
    type: TYPES.ONBLUR_TASK,
    payload: {
      id
    }
  }
}

export const checkAllTasks = (): CheckAllTasksShape => {
  return {
    type: TYPES.CHECK_ALL,
  }
}

export const clearCompletedTasks = (): ClearCompletedTasksShape => {
  return {
    type: TYPES.CLEAR_COMPLETED,
  }
}

export const filterAllTasks = (): FilterAllShape => {
  return {
    type: TYPES.FILTER_ALL
  }
}

export const filterActiveTasks = (): FilterActiveShape => {
  return {
    type: TYPES.FILTER_ACTIVE
  }
}

export const filterCompletedTasks = (): FilterCompletedShape => {
  return {
    type: TYPES.FILTER_COMPLETED
  }
}