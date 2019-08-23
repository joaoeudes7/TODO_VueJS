<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progress-bar :progress="finishTasks" />
    <new-task @taskAdded="addTask($event)" />
    <task-grid :tasks="tasks"></task-grid>
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask.vue";
import bus from "../src/bus";
import ProgressBar from "../src/components/ProgressBar";
export default {
  components: {
    TaskGrid,
    NewTask,
    ProgressBar
  },
  data() {
    return {
      tasks: []
    };
  },
  computed: {
    finishTasks() {
      const tasks = this.tasks.filter(e => !e.pedding);
      const percent = (tasks.length * 100) / this.tasks.length;
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
  },
  methods: {
    recoveryTasks() {
      const data = localStorage.getItem("tasks");
      const tasks = JSON.parse(data) || [];
      this.tasks = tasks;
    },
    addTask(task) {
      const reallyNew = this.tasks.filter(el => {
        return el.name === task.name;
      });
      if (reallyNew.length === 0) {
        this.tasks.push({
          name: task.name,
          pedding: true
        });
      } else {
        alert("Já existe uma tarefa com este nome!");
      }
    }
  },
  created() {
    bus.onAlterTask(name => {
      const tasks = this.tasks.map(e => {
        if (e.name === name) e.pedding = !e.pedding;
        return e;
      });
      this.tasks = tasks;
    });
    bus.onDeletedTask(name => {
      const i = this.tasks.indexOf(name);

      this.tasks.splice(i, 1);
    });
    this.recoveryTasks();
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
