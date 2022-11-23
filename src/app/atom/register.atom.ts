import { atom } from "jotai";

const registerStepAtom = atom(0);

export const getRegisterStepAtom = atom((get) => get(registerStepAtom));

export const setRegisterStepAtom = atom(
  null,
  (get, set, update: "prev" | "next") => {
    let next = get(registerStepAtom);
    if (update === "next") next = (get(registerStepAtom) + 1) % 2;
    if (update === "prev") next = (get(registerStepAtom) - 1) % 2;

    set(registerStepAtom, next);
  }
);
