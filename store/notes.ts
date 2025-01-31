import { getNotes } from "~/api/note";

export const useNotesStore = defineStore("note-store", {
  state: () => ({
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
