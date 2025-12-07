import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  loadTasks,
  addTask,
  updateTask,
  deleteTask,
  setTaskSearchTerm,
  setTaskSortOrder,
  Task,
} from '../store/slices/tasksSlice';

const MyTasks: React.FC = () => {
  const { currentUser } = useAuth();
  const dispatch = useAppDispatch();
  const { filteredTasks, searchTerm, sortOrder } = useAppSelector((state) => state.tasks);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (currentUser) {
      dispatch(loadTasks(currentUser.uid));
    }
  }, [currentUser, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (! currentUser) return;

    if (editingTask) {
      dispatch(
        updateTask({
          ... editingTask,
          ... formData,
        })
      );
    } else {
      dispatch(
        addTask({
          ...formData,
          userId: currentUser.uid,
        })
      );
    }

    setFormData({ title: '', description: '' });
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setFormData({ title: task.title, description: task. description });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(id));
    }
  };

  const openCreateModal = () => {
    setEditingTask(null);
    setFormData({ title: '', description: '' });
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
        <button
          onClick={openCreateModal}
          className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 font-medium"
        >
          + Create Task
        </button>
      </div>

      {/* Search and Sort */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={searchTerm}
            onChange={(e) => dispatch(setTaskSearchTerm(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => dispatch(setTaskSortOrder(e. target.value as any))}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="asc">A → Z</option>
          <option value="desc">Z → A</option>
        </select>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No tasks yet.  Create your first task!</p>
          </div>
        ) : (
          filteredTasks. map((task) => (
            <div key={task.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <p className="mt-2 text-gray-600">{task.description}</p>
                  <p className="mt-2 text-xs text-gray-400">
                    {new Date(task.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(task)}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingTask ? 'Edit Task' : 'Create New Task'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData. title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ... formData, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 font-medium"
                >
                  {editingTask ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingTask(null);
                    setFormData({ title: '', description: '' });
                  }}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTasks;