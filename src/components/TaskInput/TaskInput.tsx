import { TextField, Button } from "@mui/material";
import styles from "./TaskInput.module.css";

interface TaskInputProps {
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  addTask: (taskText: string) => void;
}

const TaskInput = ({ taskText, setTaskText, addTask }: TaskInputProps) => (
  <div className={styles.inputContainer}>
    <TextField
      value={taskText}
      onChange={(e) => setTaskText(e.target.value)}
      label="Новая задача"
      fullWidth
    />
    <Button variant="contained" onClick={() => addTask(taskText)}>
      Добавить
    </Button>
  </div>
);

export default TaskInput;
