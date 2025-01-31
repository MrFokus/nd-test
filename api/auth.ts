import type { User } from "~/types/user";

export const apiUrl = useRuntimeConfig().public.apiUrl;

export function setAuthHeaders() {
  const token = useCookie("user_token_nd");
  return { Authorization: `Bearer ${token.value ?? ""}` };
}


export type TRegisterResponce = {
  id:number,
  email:string
}
export async function register(
  email: string,
  password: string,
  confirm_password: string
) {
  return await useFetch<TRegisterResponce>(`${apiUrl}api/reg`, {
    method: "POST",
    body: {
      email,
      password,
      confirm_password,
    },
  });
}

export type TAuthResponce = {
  accessToken:string
}
export async function auth(email: string, password: string) {
  return await useFetch<TAuthResponce>(`${useRuntimeConfig().public.apiUrl}api/auth`, {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

export async function getUser() {
  return await useFetch<User>(`${useRuntimeConfig().public.apiUrl}api/auth`, {
    method: "get",
    headers: setAuthHeaders(),
  });
}
