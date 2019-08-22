import Vue from 'vue';

export default new Vue({
    methods:{
        alterTask(name){
            this.$emit('taskAltered', name);
            
        },
        onAlterTask(fnCalback){
            this.$on('taskAltered',fnCalback);
        },
        delTask(name){
            this.$emit('taskDeleted',name);
        },
        onDeletedTask(fnCalback){
            this.$on('taskDeleted',fnCalback);
        }
    }
})