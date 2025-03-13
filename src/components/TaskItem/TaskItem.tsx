import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => (
  <Card className={styles.taskCard}>
    <CardContent className={styles.taskCardContent}>
      <FormControlLabel
        control={
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            color="primary"
          />
        }
        label={
          <span
            className={`${styles.taskText} ${
              task.completed ? styles.completed : ""
            }`}
          >
            {task.text}
          </span>
        }
      />
      <Button
        className={styles.deleteButton}
        variant="outlined"
        size="small"
        onClick={() => deleteTask(task.id)}
      >
        Удалить
      </Button>
    </CardContent>
  </Card>
);

export default TaskItem;
