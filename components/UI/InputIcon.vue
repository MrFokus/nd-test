<template>
    <label>
        <input v-bind="$attrs">
        <div class="icon">
            <slot></slot>
        </div>
    </label>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>
label{
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
}
input{
    width: 100%;
}
input.primry{
    padding-right: 64px;
}
.icon{
    position: absolute;
    right: 28px;
    margin: auto;
    top: 0;
    bottom: 0;
    height: fit-content;
}
</style>