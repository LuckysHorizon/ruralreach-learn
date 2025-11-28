import { useState } from "react";
import { Lesson } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Play } from "lucide-react";
import { Quiz } from "./Quiz";

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: () => void;
}

export const LessonViewer = ({ lesson, onBack, onComplete }: LessonViewerProps) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="container py-8 max-w-4xl animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Course
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
              <p className="text-muted-foreground">
                {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} • {lesson.duration}
              </p>
            </div>
            {completed && (
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Completed!</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {lesson.type === 'video' && (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                  <Play className="h-10 w-10 ml-1" />
                </div>
                <p className="text-muted-foreground">Video player would load here</p>
              </div>
            </div>
          )}

          {lesson.type === 'reading' && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                {lesson.content || "This is where the reading content would appear. In a full implementation, this would include formatted text, code examples, images, and interactive elements to enhance learning."}
              </p>
            </div>
          )}

          {lesson.type === 'interactive' && (
            <div className="bg-secondary/50 rounded-lg p-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Interactive Exercise</h3>
              <p className="text-muted-foreground mb-4">
                Interactive coding environment or simulation would load here
              </p>
            </div>
          )}

          {lesson.type === 'quiz' && (
            <Quiz onComplete={handleComplete} />
          )}

          {lesson.type !== 'quiz' && !completed && (
            <Button 
              onClick={handleComplete}
              className="w-full"
              size="lg"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Mark as Complete
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const BookOpen = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
