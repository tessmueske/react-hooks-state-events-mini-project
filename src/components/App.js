import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [filteredCategory, setFilteredCategory] = useState("All")

  let categoryFilter = tasks.filter(task => {
    if (filteredCategory === "All") {
      return task
    } else {
      return task.category === filteredCategory
    }
  })

  const selectedCategory = (cat) => {
    setFilteredCategory(cat)
  }

  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter((task) => deletedTask !== task.text)
    setTasks(filteredTasks)
  }

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} filteredCategory={filteredCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={categoryFilter} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
