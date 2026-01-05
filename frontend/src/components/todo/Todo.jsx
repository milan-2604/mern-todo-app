
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [currentTask, setCurrentTask] = useState({ title: "", body: "" });
  const [allTask, setAllTask] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v2/getTasks`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setAllTask(data.tasks);
        } else if (res.status === 401) {
          navigate("/signin");
        }
      } catch (error) {
        console.error("Network error", error);
      }
    };
    fetchTasks();
  }, [navigate]);

  const handleChange = (e) => {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentTask.title.trim() || !currentTask.body.trim()) return;

    try {
      if (editTaskId) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v2/updateTask/${editTaskId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(currentTask),
        });
        const data = await res.json();
        if (res.ok) {
          setAllTask(allTask.map((task) => (task._id === editTaskId ? data.updatedTask : task)));
          setEditTaskId(null);
          setCurrentTask({ title: "", body: "" });
        }
        return;
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v2/addTask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(currentTask),
      });
      const data = await res.json();
      if (res.ok) {
        setAllTask([data.task, ...allTask]);
        setCurrentTask({ title: "", body: "" });
      }
    } catch (err) {
      console.error("Request failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v2/deleteTask/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        setAllTask(allTask.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.error("Delete failed");
    }
  };

  const handleEdit = (task) => {
    setCurrentTask({ title: task.title, body: task.body });
    setEditTaskId(task._id);
    // Scroll to top on mobile so the user sees the edit form immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClasses = "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none";

  return (
    <div className="flex-grow bg-slate-950 p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-blue-500">Workspace</span>
          </h1>
          <p className="text-slate-400 mt-2">Manage your daily flow and stay productive.</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Task Input Form */}
          {/* 'lg:sticky' ensures it only sticks on Desktop. On mobile, it scrolls away. */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 z-20">
            <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                {editTaskId ? "Update Task" : "Create New Task"}
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Task Title..."
                  value={currentTask.title}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <textarea
                  name="body"
                  placeholder="Describe your task..."
                  value={currentTask.body}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none h-32`}
                ></textarea>

                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!currentTask.title.trim()}
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 active:scale-[0.98] ${
                      editTaskId 
                        ? "bg-amber-500 hover:bg-amber-400 text-black" 
                        : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {editTaskId ? "Save Changes" : "Add to List"}
                  </button>
                  {editTaskId && (
                    <button
                      type="button"
                      onClick={() => { setCurrentTask({ title: "", body: "" }); setEditTaskId(null); }}
                      className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-bold hover:bg-slate-700 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Task List */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 min-h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Your Tasks</h2>
                <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">
                  {allTask.length} Total
                </span>
              </div>

              {allTask.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-slate-500 font-medium">Your list is empty.<br/>Add a task to get started!</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {allTask.map((task) => (
                    <div
                      key={task._id}
                      className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                          {task.title}
                        </h3>
                        <p className="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed">
                          {task.body}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 mt-6 pt-4 border-t border-slate-800">
                        <button
                          onClick={() => handleEdit(task)}
                          className="flex-1 py-2 text-xs font-bold bg-slate-800 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-black transition-all"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(task._id)}
                          className="flex-1 py-2 text-xs font-bold bg-slate-800 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
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
      </div>
    </div>
  );
}

export default Todo;