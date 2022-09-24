import { Task } from "../interfaces/interface"
import { RTasks } from '../reducers/index'

export const displayingTasksSelector = ((state: RTasks): Task[] => state.displayingTasks)

export const tasksSelector = ((state: RTasks): Task[] => state.tasks)

export const modeSelector = ((state: RTasks): string => state.mode)
