export interface QuizQuestion {
  id: number;
  prompt: string;
  answers: string[];
  correctIndex: number;
}
