import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning with technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent-foreground/20">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Your Future with
            <span className="block text-accent-foreground">Personalized Learning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Access world-class programming education designed for rural communities. 
            Learn at your own pace with AI-powered recommendations, offline support, and interactive content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToCourses}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg text-base"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToCourses}
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Roadmaps
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl font-bold text-accent-foreground mb-1">50+</div>
              <div className="text-sm text-primary-foreground/80">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-foreground mb-1">1000+</div>
              <div className="text-sm text-primary-foreground/80">Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-foreground mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
