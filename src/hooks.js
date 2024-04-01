import { atom } from "recoil";

export const notesAtom = atom({
    key : "notesAtom",
    default : []
})


export const expandedAtom = atom({
    key : "expandedAtom",
    default : false
})


export const noteAtom = atom({
    key : "noteAtom",
    default : {
        title: "",
        content: ""
      }
})
