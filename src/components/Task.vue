<template>
  <div @click="doneTask()" class="task" :class="stateClass">
    <span @click.stop="delTask()" class="close">x</span>
    <p>{{task.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    stateClass() {
      return {
        pedding: !this.task.done,
        done: this.task.done
      };
    }
  },
  methods: {
    doneTask() {
      this.$emit("done", this.task);
    },
    delTask() {
      this.$emit("delete", this.task);
    }
  }
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2em;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.pedding {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}

.pedding .close {
  background-color: #b73229;
}

.done .close {
  background-color: #0a8f08;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
