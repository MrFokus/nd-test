<template>
    <ul class="notes clear page-container">
        <li v-for="note in notesStore.notes">
            <Note @delete="deleteNeteRequest(note.id, note.title)" class="note" :note="note"/>
        </li>
    </ul>
</template>

<script setup lang="ts">
import logout from '~/helpers/logout';
import Note from '../UI/Note.vue';
import { useNotesStore } from '~/store/notes';
import { deleteNotes } from '~/api/note';

const notesStore = useNotesStore()

async function getNotesRequest() {
   const res = await notesStore.getNotesRequestStore()
    if (res.error.value?.statusCode == 401) {
        logout()
    }
}
async function deleteNeteRequest(id:number, title?:string) {
    if(!confirm(`Вы действительно хотите удалить заметку "${title}"?`)){
        return
    }
    const res = await deleteNotes(id)    
    if(res.status.value === 'success'){
        notesStore.getNotesRequestStore()
    }
    if(res.error.value?.statusCode == 401){
        logout()
    }
}
getNotesRequest()
</script>

<style lang="scss" scoped>
.notes{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(420px, 1fr));
    gap: 40px;
    @media (max-width:450px){
        grid-template-columns: 1fr;

    }
}
.note{
    width: 100%;
    // max-width: 688px;
}

</style>