import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizProps {
  onComplete: () => void;
}

const quizQuestions = [
  {
    id: '1',
    question: 'What is Python primarily known for?',
    options: [
      'High performance in gaming',
      'Simplicity and readability',
      'Mobile app development',
      'Operating system development'
    ],
    correctAnswer: 1
  },
  {
    id: '2',
    question: 'Which of the following is a valid Python variable name?',
    options: [
      '2nd_value',
      'my-variable',
      'my_variable',
      'class'
    ],
    correctAnswer: 2
  },
  {
    id: '3',
    question: 'What does the print() function do in Python?',
    options: [
      'Saves data to a file',
      'Displays output to the console',
      'Converts data to string',
      'Creates a new variable'
    ],
    correctAnswer: 1
  }
];

export const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

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
        <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
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
              <p className="font-medium">
                {selectedAnswer === question.correctAnswer
                  ? '✓ Correct! Well done!'
                  : '✗ Incorrect. The correct answer is highlighted above.'}
              </p>
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
