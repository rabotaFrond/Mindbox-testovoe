import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { jest } from "@jest/globals";
import { useTasks } from "../hooks/useTasks";
import TaskList from "../components/TaskList/TaskList";
import "@testing-library/jest-dom";

// Корректное мокаемое значение
jest.mock("../hooks/useTasks");

describe("TaskList Component", () => {
  const tasksMock = [
    { id: 1, text: "Test task 1", completed: false },
    { id: 2, text: "Test task 2", completed: true },
  ];

  const toggleTaskMock = jest.fn();
  const deleteTaskMock = jest.fn();

  beforeEach(() => {
    // Используем `jest.mocked`, чтобы корректно типизировать мок
    jest.mocked(useTasks).mockReturnValue({
      tasks: tasksMock,
      filter: "all",
      toggleTask: toggleTaskMock,
      deleteTask: deleteTaskMock,
      addTask: jest.fn(),
      setFilter: jest.fn(),
    });

    render(
      <TaskList
        tasks={tasksMock}
        toggleTask={toggleTaskMock}
        deleteTask={deleteTaskMock}
      />
    );
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("renders task list correctly", () => {
    expect(screen.getByText("Test task 1")).toBeInTheDocument();
    expect(screen.getByText("Test task 2")).toBeInTheDocument();
  });

  test("checkbox toggles task completion state", () => {
    const checkbox = screen.getAllByRole("checkbox")[0];
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(toggleTaskMock).toHaveBeenCalledWith(1);
  });

  test("deletes task when delete button is clicked", () => {
    const deleteButton = screen.getAllByText("Удалить")[0];
    fireEvent.click(deleteButton);

    expect(deleteTaskMock).toHaveBeenCalledWith(1);
  });

  test("checkbox reflects task completion state", () => {
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[1]).toBeChecked();
  });

  test("correctly toggles the text decoration for completed task", () => {
    const taskText = screen.getByText("Test task 2");
    expect(taskText).toHaveClass("completed");
  });
});
