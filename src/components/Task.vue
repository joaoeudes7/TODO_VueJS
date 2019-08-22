<template>
  <div @click="alterStatus()" class="task" :class="stateClass">
    <span @click.stop="delTask()" class="close">x</span>
    <p>{{task.name}}</p>
  </div>
</template>

<script>
import bus from "../bus";
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
        pedding: this.task.pedding,
        done: !this.task.pedding
      };
    }
  },
  methods: {
    alterStatus() {
      bus.alterTask(this.task.name);
    },
    delTask(){
      bus.delTask(this.task.name)
    }
  }
};
</script>
<style >
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
  border-radius : 10px;
  text-align: center;
}
</style>