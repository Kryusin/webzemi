import { testData } from "@/components/testdata";

export const getNotesNumber = () => {
    const noteStatus = [...testData];
    // 6日前より前のデータを削除
    const date = new Date();
    date.setDate(date.getDate() - 6);
    const filteredNoteStatus = noteStatus.filter((note) => {
        const createdAt = new Date(note.createdAt);
        return createdAt.getFullYear() >= date.getFullYear() && createdAt.getMonth() >= date.getMonth() && createdAt.getDate() >= date.getDate();
    });
    // 言語別に分ける
    const language = filteredNoteStatus.map((note) => note.language);
    const languageSet = new Set(language);
    const languageArray = Array.from(languageSet);
    const notesNumber = languageArray.map((lang) => {
        return {
            language: lang,
            noteData: filteredNoteStatus.filter((note) => note.language === lang)
        }
    });
    return notesNumber;
}

export const allNotes = () => {
    const noteStatus = [...testData];
    // 言語別に分ける
    const language = noteStatus.map((note) => note.language);
    const languageSet = new Set(language);
    const languageArray = Array.from(languageSet);
    const notesNumber = languageArray.map((lang) => {
        return {
            language: lang,
            noteData: noteStatus.filter((note) => note.language === lang)
        }
    });
    return notesNumber;
}