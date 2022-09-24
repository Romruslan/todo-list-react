import React, { useCallback, useState, memo, useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './css/index.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { Task } from './interfaces/interface'
import { tasksSelector, displayingTasksSelector, modeSelector } from './selectors/selectors'
import {
  addTask,
  deleteTask, 
  checkTask, 
  editTask, 
  changeValueTask, 
  onBlurTask, 
  filterAllTasks,
  filterActiveTasks,
  filterCompletedTasks,
  clearCompletedTasks,
  checkAllTasks
} from './actions/actions'
import { keyEnter } from './constants/app'

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputItemValue, setInputItemValue] = useState<string>('')
  const tasks: Task[] = useSelector(tasksSelector)
  const displayingTasks = useSelector(displayingTasksSelector)
  const mode: string = useSelector(modeSelector)
  const dispatch = useDispatch()

  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const onPressed = useCallback((e: React.KeyboardEvent) => {
    const trimInputValue = inputValue.trim()
    const keyEnter = 'Enter'

    if (!trimInputValue) {
      return
    }

    const taskTemplate = {
      text: inputValue,
      _id: `${new Date().getTime()}`,
      active: false,
      edit: false,
    }

    if (e.key === keyEnter) {
      setInputValue('')
      dispatch(addTask(taskTemplate))
    }
  }, [inputValue, dispatch])

  const deleteItemHandler = useCallback((id: string) => {
    dispatch(deleteTask(id))
  }, [dispatch])

  const checkItemHandler = useCallback((id: string) => {
    dispatch(checkTask(id))
  }, [dispatch])

  const editItemHandler = useCallback((id: string) => {
    dispatch(editTask(id))
  }, [dispatch])

  const onChangeValueItemHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputItemValue(e.target.value)
  }, [])

  const onPressedInputItemHandler = useCallback((e: React.KeyboardEvent, id: string) => {
    if (e.key === keyEnter) {
      setInputItemValue(inputItemValue)
      dispatch(changeValueTask(id, inputItemValue))
      setInputItemValue('')
    }
  }, [inputItemValue, dispatch])

  const onBlurHandler = useCallback((id: string) => {
    dispatch(onBlurTask(id))
  }, [dispatch])

  const checkAllHandler = useCallback(() => {
    dispatch(checkAllTasks())
  }, [dispatch])

  const clearCompletedHandler = useCallback(() => {
    dispatch(clearCompletedTasks())
  }, [dispatch])

  const filterAll = useCallback(() => {
    dispatch(filterAllTasks())
  }, [dispatch])

  const filterActive = useCallback(() => {
    dispatch(filterActiveTasks())
  }, [dispatch])

  const filterCompleted = useCallback(() => {
    dispatch(filterCompletedTasks())
  }, [dispatch])

  const countTasks = useMemo(() => {
    if (tasks.length) {
      return `${tasks.filter((item: Task) => !item.active).length} items left`
    }
  }, [tasks])

  return <>
    <Header
      onChangeHandler={onChangeValue}
      onPressedHandler={onPressed}
      inputValue={inputValue}
    />
    <Main
      tasks={displayingTasks}
      onClickCheckAll={checkAllHandler}
      onCheckHandler={checkItemHandler}
      onDeleteHandler={deleteItemHandler}
      onEditHandler={editItemHandler}
      onBlurChangeHandler={onBlurHandler}
      onChangeValueItemHandler={onChangeValueItemHandler}
      onPressedItemHandler={onPressedInputItemHandler}
    />
    <Footer
      mode={mode}
      tasks={displayingTasks}
      counter={countTasks}
      filterAll={filterAll}
      filterActive={filterActive}
      filterCompleted={filterCompleted}
      clearCompletedHandler={clearCompletedHandler}
    />
  </>
}

export default memo(App)



