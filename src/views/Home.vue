<template>
  <div id="ToDo">
    <h1>Tarefas</h1>
    <new-task @taskAdded="onAddtask" />
    <progress-bar :progress="percentCompleted" />
    <task-grid :tasks="tasks" @completed="onCompletedTask" @deleted="onDeletedTask" />
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import NewTask from "@/components/NewTask.vue";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "home",
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
#ToDo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
