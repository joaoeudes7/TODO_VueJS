<template>
  <div class="task-grid">
    <template v-if='tasks.length > 0'>
      <Task :task='task' v-for="task in tasks" :key="task.name">
      </Task>
    </template>
    <template v-else>
      <p class="no-task">Sua vida está em dia :)</p>
    </template>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  components:{
    Task
  }
};
</script>

<style >
  .task-grid{
    display:  flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .no-task{
    color: #AAA;
    font-size: 1.7rem;
  }
</style>