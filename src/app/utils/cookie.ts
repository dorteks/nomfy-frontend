import cookie from "js-cookie";

export const getToken = () => cookie.get("abc");
export const removeToken = () => cookie.remove("abc");
export const setToken = (token: string) => cookie.set("abc", token);
