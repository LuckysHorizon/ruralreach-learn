import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Wifi, TrendingUp, Users, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Recommendations",
    description: "Personalized learning paths adapted to your pace and style using advanced machine learning."
  },
  {
    icon: Wifi,
    title: "Offline Learning",
    description: "Download courses and learn anytime, anywhere - perfect for areas with limited connectivity."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visual dashboards showing your growth, strengths, and areas for improvement."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with fellow learners and educators in a supportive learning environment."
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn recognized certificates upon completion to showcase your achievements."
  },
  {
    icon: Zap,
    title: "Interactive Content",
    description: "Engage with videos, quizzes, coding exercises, and hands-on projects."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make learning accessible, engaging, and effective for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
