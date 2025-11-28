import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
import { courseQuizzes } from "@/data/quizzes";
import { QuizQuestion } from "@/data/courses";

interface QuizProps {
  onComplete: () => void;
  lessonId?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export const Quiz = ({ onComplete, lessonId, difficulty }: QuizProps) => {
  // Get quiz questions based on lesson or default to Python quiz
  const courseId = lessonId?.includes('python') ? 'python-fundamentals' 
    : lessonId?.includes('js') || lessonId?.includes('javascript') ? 'javascript-web'
    : lessonId?.includes('react') ? 'react-frontend'
    : 'python-fundamentals';

  const allQuestions = courseQuizzes[courseId]?.questions || [];
  
  // Filter questions by difficulty if specified
  const quizQuestions = useMemo(() => {
    if (difficulty) {
      return allQuestions.filter(q => q.difficulty === difficulty);
    }
    // Mix of difficulties if not specified
    return allQuestions.slice(0, 6);
  }, [allQuestions, difficulty]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-success/10 text-success border-success/20';
      case 'intermediate': return 'bg-accent/10 text-accent border-accent/20';
      case 'advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted';
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizComplete(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <Card className={`border-2 ${passed ? 'border-success' : 'border-accent'}`}>
        <CardContent className="pt-6 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>
            {passed ? <CheckCircle className="h-10 w-10" /> : <XCircle className="h-10 w-10" />}
          </div>
          <h3 className="text-2xl font-bold mb-2">
            {passed ? 'Quiz Completed!' : 'Keep Practicing!'}
          </h3>
          <p className="text-muted-foreground mb-4">
            You scored {score} out of {quizQuestions.length} ({percentage}%)
          </p>
          {passed ? (
            <p className="text-success font-medium">Great job! Moving to next lesson...</p>
          ) : (
            <p className="text-muted-foreground">Review the material and try again to improve your score.</p>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <Badge variant="outline" className={getDifficultyColor(question.difficulty)}>
            {question.difficulty}
          </Badge>
        </div>
        <span>Score: {score}/{quizQuestions.length}</span>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

          <RadioGroup 
            value={selectedAnswer?.toString()} 
            onValueChange={(value) => !showFeedback && setSelectedAnswer(Number(value))}
          >
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? 'border-success bg-success/5'
                        : showIncorrect
                        ? 'border-destructive bg-destructive/5'
                        : isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem 
                      value={index.toString()} 
                      id={`option-${index}`}
                      disabled={showFeedback}
                    />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                    {showCorrect && <CheckCircle className="h-5 w-5 text-success" />}
                    {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                  </div>
                );
              })}
            </div>
          </RadioGroup>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${
              selectedAnswer === question.correctAnswer
                ? 'bg-success/10 text-success'
                : 'bg-destructive/10 text-destructive'
            }`}>
              <p className="font-medium mb-2">
                {selectedAnswer === question.correctAnswer
                  ? '✓ Correct! Well done!'
                  : '✗ Incorrect. The correct answer is highlighted above.'}
              </p>
              {question.explanation && (
                <p className="text-sm mt-2 opacity-90">
                  {question.explanation}
                </p>
              )}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            {!showFeedback ? (
              <Button 
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="flex-1"
                size="lg"
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                className="flex-1"
                size="lg"
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
