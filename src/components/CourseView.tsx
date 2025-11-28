import { useState } from "react";
import { Course, Module, Lesson } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, PlayCircle, FileText, CheckCircle, Clock } from "lucide-react";
import { LessonViewer } from "./LessonViewer";

interface CourseViewProps {
  course: Course;
  onBack: () => void;
}

export const CourseView = ({ course, onBack }: CourseViewProps) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(course.modules[0]?.id || null);

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter(l => l.completed).length, 
    0
  );
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-4 w-4" />;
      case 'reading':
        return <FileText className="h-4 w-4" />;
      case 'interactive':
        return <BookOpen className="h-4 w-4" />;
      case 'quiz':
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  if (selectedLesson) {
    return (
      <LessonViewer 
        lesson={selectedLesson} 
        onBack={() => setSelectedLesson(null)}
        onComplete={() => {
          // Mark as completed in local state (in real app, would save to backend/localStorage)
          setSelectedLesson(null);
        }}
      />
    );
  }

  return (
    <div className="container py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      {/* Course Header */}
      <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge variant="secondary" className="mb-3">
              {course.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
            <p className="text-primary-foreground/90 text-lg">{course.description}</p>
          </div>
          <Badge className="bg-accent text-accent-foreground border-0">
            {course.level}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span>{course.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{course.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>{completedLessons} completed</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Your Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-primary-foreground/20" />
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
        {course.modules.map((module) => (
          <Card key={module.id} className="overflow-hidden">
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </div>
                <Badge variant="outline" className="ml-4">
                  {module.lessons.length} lessons
                </Badge>
              </div>
            </CardHeader>
            
            {expandedModule === module.id && (
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer group"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`${lesson.completed ? 'text-success' : 'text-muted-foreground'}`}>
                          {lesson.completed ? <CheckCircle className="h-5 w-5" /> : getLessonIcon(lesson.type)}
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {lesson.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {lesson.type} • {lesson.duration}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        Start
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
