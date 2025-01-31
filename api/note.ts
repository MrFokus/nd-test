import { apiUrl, setAuthHeaders } from "./auth";

export async function addNote(title: string, content: string) {
  return await useFetch(`${apiUrl}api/notes`, {
    method: "POST",
    headers: setAuthHeaders(),
    body: {
      title,
      content,
    },
  });
}

export async function getNotes() {
    return await useFetch(`${apiUrl}api/notes`, {
        method: "GET",
        headers:setAuthHeaders()
    });
}
export async function deleteNotes(id:number) {
    return await useFetch(`${apiUrl}api/notes/${id}`, {
        method: "DELETE",
        headers:setAuthHeaders()
    });
}