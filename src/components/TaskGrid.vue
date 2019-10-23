<template>
  <div class="task-grid">
    <template v-if="tasks.length > 0">
      <Task
        v-for="(task, i) in tasks"
        :task="task"
        :key="i"
        @done="handleCompleted"
        @delete="handleDelete"
      />
    </template>
    <template v-else>
      <p class="no-task">Sua vida está em dia :)</p>
    </template>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  components: {
    Task
  },
  methods: {
    handleCompleted(task) {
      this.$emit("completed", task);
    },
    handleDelete(task) {
      this.$emit("deleted", task);
    }
  }
};
</script>

<style >
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
