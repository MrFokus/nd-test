import { getNotes } from "~/api/note";
import type { Note } from "~/types/notes";

export const useNotesStore = defineStore("note-store", {
  state: ():{notes:Note[]} => ({
    notes: [],
  }),
  actions: {
    async getNotesRequestStore() {
      const res = await getNotes();
      if (res.data.value) {
        this.notes = res.data.value;
      }
      return res;
    },
  },
});
