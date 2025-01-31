<template>
    <ListNotes/>
    <NuxtLink to="?add-note" class="circle btn-primary add-note">
        <CloseIcon class="add-icon"/>
    </NuxtLink>
    <AddNote/>
</template>

<script setup lang="ts">
import ListNotes from "~/components/widgets/ListNotes.vue";
import AddNote from "~/components/widgets/AddNote.vue";
import CloseIcon from "~/assets/img/close.svg?component"

useSeoMeta({
    title:'Ваши Заметки'
})
</script>

<style scoped lang="scss">
.add-note{
    position: fixed;
    bottom: 40px;
    right: 12px;
    box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.60);
}
.add-icon{
    rotate: 45deg;
}
</style>