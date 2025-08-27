import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Clock, Users } from "lucide-react";

interface PredictionCardProps {
  title: string;
  description: string;
  category: string;
  deadline: string;
  yesVotes: number;
  noVotes: number;
  totalVotes: number;
  confidence: number;
  isActive: boolean;
}

const PredictionCard = ({
  title,
  description,
  category,
  deadline,
  yesVotes,
  noVotes,
  totalVotes,
  confidence,
  isActive
}: PredictionCardProps) => {
  const yesPercentage = totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;
  
  return (
    <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant={isActive ? "default" : "secondary"} className="bg-primary/20 text-primary">
            {category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {deadline}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Voting Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-green-400 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Yes: {yesPercentage.toFixed(1)}%
            </span>
            <span className="text-red-400 flex items-center">
              <TrendingDown className="w-4 h-4 mr-1" />
              No: {(100 - yesPercentage).toFixed(1)}%
            </span>
          </div>
          <Progress value={yesPercentage} className="h-2" />
        </div>
        
        {/* Stats */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-1" />
            {totalVotes} votes
          </div>
          <div className="text-accent font-semibold">
            {confidence}% confidence
          </div>
        </div>
        
        {/* Action Buttons */}
        {isActive && (
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1 border-green-500/50 text-green-400 hover:bg-green-500/10">
              Vote Yes
            </Button>
            <Button variant="outline" size="sm" className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10">
              Vote No
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PredictionCard;