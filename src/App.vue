<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progress-bar :progress="percentCompleted" />
    <new-task @taskAdded="onAddtask" />
    <task-grid :tasks="tasks" @completed="onCompletedTask" @deleted="onDeletedTask" />
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask.vue";
import ProgressBar from "../src/components/ProgressBar";

export default {
  components: {
    TaskGrid,
    NewTask,
    ProgressBar
  },
  data: () => ({
    tasks: []
  }),
  created() {
    this.recoveryTasks();
  },
  methods: {
    recoveryTasks() {
      const data = localStorage.getItem("tasks");
      const tasks = JSON.parse(data) || [];

      this.tasks = tasks;
    },
    onAddtask(newTask) {
      const taskPendig = this.tasks.filter(t => !t.done)
      const hasTask = taskPendig.some(t => t.name === newTask.name)

      if (hasTask) {
        alert("Já existe uma tarefa com este nome!");
      } else {
        this.tasks.push(newTask)
      }
    },
    onCompletedTask(task) {
      this.tasks.forEach(t => {
        if (t == task) {
          t.done = !t.done;
        }
      })
    },
    onDeletedTask(task) {
      const i = this.tasks.indexOf(task);

      this.tasks.splice(i, 1);
    }
  },
  computed: {
    percentCompleted() {
      const tasksCompleted = this.tasks.filter(e => e.done);
      const percent = (tasksCompleted.length * 100) / this.tasks.length;

      return Math.round(percent) || 0;
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
