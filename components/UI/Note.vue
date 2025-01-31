<template>
    <div class="note">
        <header>
            <p class="h4">{{note.title}}</p>
        </header>
        <section :title="note.content" class="task-content text-normal">
            {{ note.content }}
        </section>
        <footer>
            <button @click="emit('delete')" class="clear primary delete-task">
                <CloseIcon/>
                Удалить
            </button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from "~/assets/img/close.svg?component"
const props = defineProps<{
    note:{
        id:number,
        title:string,
        content:string,
    }
}>()
const emit = defineEmits<{
    'delete':[]
}>()
</script>

<style scoped lang="scss">
.note{
    background-color: $green-light;
    border-radius: 12px;
    position: relative;
    box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.40);

    &::before{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        background-image: url('~/assets/img/task-corner.svg');
        background-position: center;
        background-size: 110%;
        background-repeat: no-repeat;
        background-color: $dark;
        width: 20px;
        aspect-ratio: 1;
    }
}
header{
    padding:20px 28px;
    border-bottom: 1px $green solid;
}
footer{
    padding: 8px;
    border-top: 1px $green solid;
    display: flex;
    justify-content: flex-end;
}
.task-content{
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    -webkit-line-clamp: 9;
    height: fit-content;
    max-width: 100%;
    margin: 28px;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    display: -webkit-box;
}
</style>