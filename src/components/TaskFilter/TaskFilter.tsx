import { Button } from "@mui/material";
import styles from "./TaskFilter.module.css";

interface TaskFilterProps {
  filter: "all" | "active" | "completed";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
}

const TaskFilter = ({ filter, setFilter }: TaskFilterProps) => (
  <div className={styles.filterContainer}>
    <Button
      variant="outlined"
      onClick={() => setFilter("all")}
      disabled={filter === "all"}
    >
      Все
    </Button>
    <Button
      variant="outlined"
      onClick={() => setFilter("active")}
      disabled={filter === "active"}
    >
      Активные
    </Button>
    <Button
      variant="outlined"
      onClick={() => setFilter("completed")}
      disabled={filter === "completed"}
    >
      Выполненные
    </Button>
  </div>
);

export default TaskFilter;
