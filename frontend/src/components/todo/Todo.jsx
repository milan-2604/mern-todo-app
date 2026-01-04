import React, { useState } from "react";

function Todo() {
  const [currentTask, setCurrentTask] = useState({ title: "", body: "" });
  const [allTask, setAllTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which task is being edited

  const handleChange = (e) => {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask.title.trim() || !currentTask.body.trim()) return;

    if (editIndex !== null) {
      // Update task if in edit mode
      const updatedTasks = [...allTask];
      updatedTasks[editIndex] = currentTask;
      setAllTask(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setAllTask([...allTask, currentTask]);
    }

    setCurrentTask({ title: "", body: "" });
  };

  const handleDelete = (index) => {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllTask(updatedTasks);
  };

  const handleEdit = (index) => {
    setCurrentTask(allTask[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Modern Todo App
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Task Input Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {editIndex !== null ? "Edit Task" : "Add a Task"}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={currentTask.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
            <textarea
              name="body"
              placeholder="Task Details"
              value={currentTask.body}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition resize-none"
              rows="4"
            ></textarea>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!currentTask.title.trim() && !currentTask.body.trim()}
                className={`flex-1 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition ${
                  editIndex !== null
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
              >
                {editIndex !== null ? "Update Task" : "Add Task"}
              </button>

              {editIndex !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setCurrentTask({ title: "", body: "" });
                    setEditIndex(null);
                  }}
                  className="flex-1 py-3 rounded-lg bg-gray-400 hover:bg-gray-500 text-white font-semibold transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right: Task List */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Tasks
          </h2>
          {allTask.length === 0 ? (
            <p className="text-gray-500">No tasks yet. Add something!</p>
          ) : (
            <div className="flex flex-col gap-4">
              {allTask.map((task, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{task.body}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg font-medium transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg font-medium transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
