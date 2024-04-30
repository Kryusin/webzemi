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
    id: number;
    language?:string
    title: string;
    description: string;
    answer: string;
    onClick: (value:SideBarProps, id:number) => void
}

export interface InputProps {
    id: number,
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

export enum SideBarProps {
    Home = 'home',
    AddNote = 'addnote',
    Setting = 'setting',
    Detail = 'detail'
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

export interface NoteDataProps {
    language: string,
    noteData: InputProps[]
}