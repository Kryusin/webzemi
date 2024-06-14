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
    language?: string
    title: string;
    description: string;
    answer: string;
    onClick: (value: SideBarProps, id: number) => void
}

export interface InputProps {
    id: number,
    user_id: number,
    error_title: string,
    language: string,
    error_detail: string,
    before_code: string,
    error_reason: string,
    solution_detail: string,
    after_code: string,
    created_at: Date,
    updated_at: Date,
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

export type Task = {
    id: number
    title: string
    created_at: Date
    updated_at: Date
}
export type CsrfToken = {
    csrf_token: string
}
export type Credential = {
    name?: string
    email: string
    password: string
}

export type LoginResponse = {
    id: string
    name: string
    email: string
}
