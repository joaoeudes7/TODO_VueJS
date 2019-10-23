<template>
  <div class="new-task">
    <input
      class="form-element"
      placeholder="Adcionar nova tarefa"
      type="text"
      v-model="name"
      @keydown.enter="add"
    />
    <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
import Todo from "@/model/todo";

export default {
  data: () => ({
    name: ""
  }),
  methods: {
    add() {
      if (this.name.trim()) {
        this.$emit("taskAdded", new Todo(this.name));
        this.name = "";
      }
    }
  }
};
</script>

<style >
.new-task {
  margin: 35px;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #fff;
  padding: 10px 10px 8px;
  color: #fff;
}

input.form-element {
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-left: none;
  background-color: #4FC08D;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
