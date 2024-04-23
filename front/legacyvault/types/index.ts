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
    AfterCode: string
}