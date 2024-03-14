import { AnswerObject } from "../types";

export interface Header {
    title: string;
}

export interface Title {
    key: number;
    answer: string;
    onPress: () => void;
    correct: boolean;
    disabled: boolean;
}

export interface Answers {
    useranswer: AnswerObject | undefined;
    answers: string[];
    setcorrectanswer: any;
    checkanswer: () => void;
}

export interface Question {
    QuestionNo: number;
    Question: string;
}

