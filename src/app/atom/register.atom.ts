import { atom } from "jotai";

const regAtom = atom(0);

export const getRegAtom = atom((get) => get(regAtom));

export const setRegAtom = atom(
  null,
  (get, set, update: "nextReg" | "prevReg") => {
    let next = get(regAtom);
    if (update === "nextReg") next = (get(regAtom) + 1) % 2;
    if (update === "prevReg") next = (get(regAtom) - 1) % 2;

    set(regAtom, next);
  }
);
