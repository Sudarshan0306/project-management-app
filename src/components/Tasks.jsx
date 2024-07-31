import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-700 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-6 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex gap-4 justify-between my-2">
              <span className="text-stone-750">{task.text}</span>
              <button
                className="text-stone-400 bg-stone-700 py-2 px-4 rounded-md hover:text-stone-200 hover:bg-stone-800"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
