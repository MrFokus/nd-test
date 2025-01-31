<template>
    <label class="flex-col">
        <span v-if="lableName" class="text-small color-gray label-name">  
            {{ lableName }}
        </span>
        <slot></slot>
        <div class="message-container">
            <span class="invalid text-small">{{ invalidMsg }}</span>
            <span :class="currentSymbols>maxSymbols?'color-red':''" class="length text-small color-gray" v-if="maxSymbols">{{ currentSymbols }}/{{ maxSymbols }}</span>
        </div>
    </label>
</template>

<script setup lang="ts">
const props = defineProps<{
    lableName?:string,
    modelValue?:string,
    invalidMsg?:string,
    currentSymbols?:number,
    maxSymbols?:number
}>()
const emit = defineEmits<{
    "update:modelValue":[string]
}>()
</script>

<style scoped lang="scss">
.invalid{
    color: $red;
}
label{
    gap: 8px;
}
.label-name, .invalid{
    padding: 0 24px;
}
.message-container{
    position: relative;
}
.length{
    position: absolute;
    right: 24px;
}
</style>