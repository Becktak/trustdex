import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  address: string;
  iqPoints: number;
  accuracy: number;
  predictions: number;
  avatar: string;
}

const Leaderboard = () => {
  const leaders: LeaderboardEntry[] = [
    {
      rank: 1,
      address: "0x742d35Cc6aC34567890aBcdeF123456789ABCDEF",
      iqPoints: 2847,
      accuracy: 87.3,
      predictions: 156,
      avatar: "🧠"
    },
    {
      rank: 2,
      address: "0x123aBc45dEf67890123456789aBcDeF987654321",
      iqPoints: 2651,
      accuracy: 84.1,
      predictions: 142,
      avatar: "🔮"
    },
    {
      rank: 3,
      address: "0x456DeF789aBc123456789aBcDeF123456789012345",
      iqPoints: 2438,
      accuracy: 81.7,
      predictions: 198,
      avatar: "⚡"
    },
    {
      rank: 4,
      address: "0x789123456aBcDeF987654321098765432109876543",
      iqPoints: 2284,
      accuracy: 79.2,
      predictions: 167,
      avatar: "🎯"
    },
    {
      rank: 5,
      address: "0x987654321098765432109876543210987654321098",
      iqPoints: 2156,
      accuracy: 76.8,
      predictions: 134,
      avatar: "🚀"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">#{rank}</div>;
    }
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Top Predictors
          </h2>
          <p className="text-xl text-muted-foreground">
            The most accurate and active members of our collective intelligence network
          </p>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Trophy className="w-6 h-6 mr-2 text-primary" />
              Leaderboard
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="space-y-0">
              {leaders.map((leader, index) => (
                <div
                  key={leader.address}
                  className={`
                    flex items-center p-6 border-b border-border last:border-b-0
                    hover:bg-muted/30 transition-colors duration-200
                    ${index < 3 ? 'bg-gradient-to-r from-primary/5 to-transparent' : ''}
                  `}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Rank */}
                    <div className="flex items-center justify-center">
                      {getRankIcon(leader.rank)}
                    </div>

                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                      {leader.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="font-mono text-foreground font-medium">
                        {shortenAddress(leader.address)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {leader.predictions} predictions
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex space-x-6 text-right">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {leader.iqPoints.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">IQ Points</div>
                      </div>
                      
                      <div>
                        <div className="text-lg font-semibold text-accent flex items-center">
                          {leader.accuracy}%
                          <TrendingUp className="w-4 h-4 ml-1" />
                        </div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                    </div>

                    {/* Badge for top 3 */}
                    {index < 3 && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        Top {index + 1}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">Highest IQ Score</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">87.3%</div>
              <div className="text-muted-foreground">Best Accuracy</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">198</div>
              <div className="text-muted-foreground">Most Predictions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;