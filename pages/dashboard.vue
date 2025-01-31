<template>
    <ul class="tasks clear page-container">
        <li>
            <Task/>
        </li>
        <li>
            <Task/>
        </li>
        <li>
            <Task/>
        </li>
        <li>
            <Task/>
        </li>
        <li>
            <Task/>
        </li>
        <li>
            <Task/>
        </li>
    </ul>
    <button class="circle primary add-task">
        <CloseIcon class="add-icon"/>
    </button>
</template>

<script setup lang="ts">
import Task from "~/components/UI/Task.vue";
import CloseIcon from "~/assets/img/close.svg?component"
</script>

<style scoped lang="scss">
.tasks{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(460px, 1fr));
    gap: 40px;
}
.add-task{
    position: fixed;
    bottom: 40px;
    right: 12px;
    box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.60);
}
.add-icon{
    rotate: 45deg;
}
</style>