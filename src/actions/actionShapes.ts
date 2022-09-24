import { Task } from "../interfaces/interface";
import {
  TYPES
} from "./actionTypes";

export interface AddTaskShape {
  type: TYPES.ADD_TASK,
  payload: {
    task: Task 
  }
}

export interface DeleteTaskShape {
  type: TYPES.DELETE_TASK,
  payload: {
    id: string
  }
}

export interface CheckTaskShape {
  type: TYPES.CHECK_TASK,
  payload: {
    id: string
  }
}

export interface EditTaskShape {
  type: TYPES.EDIT_TASK,
  payload: {
    id: string
  }
}

export interface ChangeValueTaskShape {
  type: TYPES.CHANGE_VALUE_TASK,
  payload: {
    id: string,
    inputItemValue: string
  }
}

export interface OnBlurTaskShape {
  type: TYPES.ONBLUR_TASK,
  payload: {
    id: string
  }
}

export interface CheckAllTasksShape {
  type: TYPES.CHECK_ALL
}

export interface ClearCompletedTasksShape {
  type: TYPES.CLEAR_COMPLETED
}

export interface FilterAllShape {
  type: TYPES.FILTER_ALL
}

export interface FilterActiveShape {
  type: TYPES.FILTER_ACTIVE
}

export interface FilterCompletedShape {
  type: TYPES.FILTER_COMPLETED
}