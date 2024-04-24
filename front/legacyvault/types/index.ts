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

export interface InputProps {
    ErrorTitle: string,
    language: string,
    ErrorDetails: string,
    BeforeCode: string,
    ErrorReason: string,
    SolutionDetails: string,
    AfterCode: string,
    createdAt: string,
    updatedAt?: string,
    deletedAt?: string,
}

export enum PageProps {
    Home = 'home',
    AddNote = 'addnote',
    Setting = 'setting',
}

export interface NoteNumberByDate {
    date: string;
    noteNumber: number;
}

export interface ChartData {
    lang: string;
    dateData: NoteNumberByDate[];
}

export interface DataProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
    }[];
}