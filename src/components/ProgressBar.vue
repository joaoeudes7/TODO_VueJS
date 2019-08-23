<template>
  <div class="progress-task">
    <span class='progress'>{{progress}}%</span>
    <div class="progress-value" :style="{width :progress +'%'}"></div>
  </div>
</template>

<script>
export default {
    props :{
        progress :{
            type : Number,
            required : true
        }
    }
    
};
</script>
<style >
    .progress-task{
        position: relative;
        width: 80%;
        height: 20;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        color : #fff;
        margin-bottom: 15px;
        flex-direction: column;
    }
    .progress-task span{
        z-index: 1;
        font-size: 1.5rem;  
    }
    .progress-value{
        background-color: #4caf50;
        position: absolute;
        height: 100%;
        align-self: flex-start;
        border-radius: 7px;
    }
</style>