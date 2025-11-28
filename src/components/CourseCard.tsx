import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

export const CourseCard = ({ course, onSelectCourse }: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Advanced':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden">
      <div className="h-2 bg-gradient-primary" />
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className={getLevelColor(course.level)}>
            {course.level}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {course.category}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{course.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.estimatedTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button 
          onClick={() => onSelectCourse(course)}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
          variant="outline"
        >
          View Course
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
