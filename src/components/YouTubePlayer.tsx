import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
}

interface YouTubePlayerProps {
  videos: YouTubeVideo[];
  title?: string;
}

export const YouTubePlayer = ({ videos, title = "Related Videos" }: YouTubePlayerProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="group hover:shadow-md transition-all cursor-pointer">
            <CardHeader className="p-0">
              <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </CardTitle>
                <Badge variant="secondary" className="flex-shrink-0">
                  {video.duration}
                </Badge>
              </div>
              <CardDescription className="line-clamp-2">
                {video.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
