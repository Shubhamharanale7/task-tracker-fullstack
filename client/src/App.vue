<script setup>
import { ref, onMounted } from "vue";
import { getTasks, createTask, deleteTask, updateTask } from "./services/taskService.js";

const tasks = ref([]);
const title = ref("");
const description = ref("");
const editingId = ref(null);

const fetchTasks = async () => {
  try {
    const res = await getTasks();
    tasks.value = res.data.data;
  } catch (error) {
    console.error(error);
  }
};

const addTask = async () => {
  if (!title.value.trim()) return;

  try {
    if (editingId.value) {
      await updateTask(editingId.value, {
        title: title.value,
        description: description.value,
      });
      editingId.value = null;
    } else {
      await createTask({
        title: title.value,
        description: description.value,
        status: "TODO",

     });
    }

    title.value = "";
    description.value = "";
    fetchTasks();
  } catch (error) {
    console.error(error);
  }
};

const removeTask = async (id) => {
  try {
    await deleteTask(id);
    fetchTasks();
  } catch (error) {
    console.error(error);
  }
};

const editTask = (task) => {
  title.value = task.title;
  description.value = task.description;
  editingId.value = task._id;
};

onMounted(fetchTasks);
</script>

<template>
  <div class="container">
    <h1>🚀 Task Manager</h1>

    <!-- Add / Edit Task -->
    <div class="card">
      <input v-model="title" placeholder="Task title" />
      <input v-model="description" placeholder="Task description" />
      <button @click="addTask">
        {{ editingId ? "Update Task" : "Add Task" }}
      </button>
    </div>

    <!-- Task List -->
    <div class="task-list">
      <div v-for="task in tasks" :key="task._id" class="task-card">
        <div class="task-info">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
        </div>

        <div class="actions">
          <button class="edit" @click="editTask(task)">Edit</button>
          <button class="delete" @click="removeTask(task._id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
}

.container {
  max-width: 850px;
  margin: 60px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
}

.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-3px);
}

.card input {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
}

.card button {
  padding: 12px 22px;
  border-radius: 10px;
  border: none;
  background: #00c9a7;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.card button:hover {
  background: #00a68b;
  transform: scale(1.05);
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.task-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.task-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.task-info p {
  margin: 6px 0 0;
  color: #666;
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
}

.edit {
  background: #ffc107;
  color: #333;
}

.edit:hover {
  background: #e0a800;
  transform: scale(1.05);
}

.delete {
  background: #ff4d6d;
  color: white;
}

.delete:hover {
  background: #d90429;
  transform: scale(1.05);
}
</style>



