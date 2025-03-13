import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, toggleTask, deleteTask }: TaskListProps) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    ))}
  </div>
);

export default TaskList;
