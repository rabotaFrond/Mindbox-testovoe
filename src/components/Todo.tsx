import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

import styles from "./Todo.module.css";
import TaskFilter from "./TaskFilter/TaskFilter";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";

export default function Todo() {
  const [taskText, setTaskText] = useState("");
  const { tasks, filter, addTask, toggleTask, deleteTask, setFilter } =
    useTasks();
  const handleAddTask = (taskText: string) => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div className={styles.todoContainer}>
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={handleAddTask}
      />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}
