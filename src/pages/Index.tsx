import Hero from "@/components/Hero";
import PredictionCard from "@/components/PredictionCard";
import SubmitPrediction from "@/components/SubmitPrediction";
import Leaderboard from "@/components/Leaderboard";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Zap } from "lucide-react";

const Index = () => {
  // Mock data for featured predictions
  const featuredPredictions = [
    {
      title: "Ethereum will reach $5,000 by Q2 2025",
      description: "Based on current adoption trends, institutional investment, and upcoming protocol upgrades including full PoS transition effects.",
      category: "Cryptocurrency",
      deadline: "June 30, 2025",
      yesVotes: 234,
      noVotes: 145,
      totalVotes: 379,
      confidence: 76,
      isActive: true
    },
    {
      title: "AI will achieve AGI breakthrough by end of 2025",
      description: "Considering recent advances in large language models, multimodal AI, and reasoning capabilities from major tech companies.",
      category: "Technology",
      deadline: "Dec 31, 2025",
      yesVotes: 156,
      noVotes: 298,
      totalVotes: 454,
      confidence: 42,
      isActive: true
    },
    {
      title: "Global renewable energy will exceed 40% by 2025",
      description: "Based on current installation rates, government commitments, and declining costs of solar and wind technologies.",
      category: "Climate",
      deadline: "Dec 31, 2025",
      yesVotes: 342,
      noVotes: 178,
      totalVotes: 520,
      confidence: 82,
      isActive: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Intuition Collective</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#predictions" className="text-muted-foreground hover:text-foreground transition-colors">
                Predictions
              </a>
              <a href="#submit" className="text-muted-foreground hover:text-foreground transition-colors">
                Submit
              </a>
              <a href="#leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Leaderboard
              </a>
              <Button className="bg-gradient-primary hover:shadow-glow-primary">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Featured Predictions */}
      <section id="predictions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Trending Predictions
            </h2>
            <p className="text-xl text-muted-foreground">
              Most engaging predictions from our collective intelligence network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPredictions.map((prediction, index) => (
              <PredictionCard key={index} {...prediction} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Predictions
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Prediction */}
      <div id="submit">
        <SubmitPrediction />
      </div>

      {/* Leaderboard */}
      <div id="leaderboard">
        <Leaderboard />
      </div>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Join the Builder's Epoch
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the first hackathon on Intuition Network. Build, predict, and shape the future of collective intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary">
              <Clock className="w-5 h-5 mr-2" />
              Submit to Hackathon
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Intuition Collective</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Built for the Builder's Epoch Hackathon • August 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;