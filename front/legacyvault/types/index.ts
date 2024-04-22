export interface CodeProps {
    lang: string;
    value: {
        beforecode: string;
        aftercode: string;
    };
}

export interface NotesProps {
    lang: string;
    data: NotesDataProps[];
}

export interface NotesDataProps {
    title: string;
    description: string;
    answer: string;
}