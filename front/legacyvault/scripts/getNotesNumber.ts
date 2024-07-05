import { testData } from "@/components/testdata";
import { InputProps } from "@/types"

export const getNotesNumber = () => {
    const noteStatus = [...testData];
    // 6日前より前のデータを削除
    const date = new Date();
    date.setDate(date.getDate() - 6);
    const filteredNoteStatus = noteStatus.filter((note) => {
        const createdAt = new Date(note.created_at);
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

export const allNotes = (testData:Array<InputProps>,sort:number) => {
    if(testData) {
        const noteStatus = [...testData];
        
        // 言語別に分ける
        const language = noteStatus.map((note) => note.language);
        const languageSet = new Set(language);
        let languageArray = Array.from(languageSet);
        const Number = languageArray.map((lang) => {
            return {
                language: lang,
                num: noteStatus.filter((note) => note.language === lang).length
            }
        });
        //昇順
        if(sort == 0){
            languageArray.sort()
        //降順
        }else if(sort == 1){
            languageArray.sort().reverse()
        //メモ数多い順
        }else if(sort == 2){
            Number.sort((a, b) => b.num - a.num);
            languageArray = Number.map((data) => data.language )
        //メモ数少ない順
        }else if(sort == 3){
            Number.sort((a, b) => b.num - a.num).reverse();
            languageArray = Number.map((data) => data.language )
        }
        const notesNumber = languageArray.map((lang) => {
            return {
                language: lang,
                noteData: noteStatus.filter((note) => note.language === lang)
            }
        });
        return notesNumber;
    }
    return [];
}