import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="animate-float">
          <Brain className="w-20 h-20 mx-auto mb-6 text-primary animate-pulse-glow" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Collective Intelligence
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Harness the power of collective wisdom. Submit predictions, vote on insights, 
          and earn rewards for accurate forecasting on the Intuition Network.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            Submit Prediction
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Explore Insights
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-accent mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary">1,247</div>
            <div className="text-muted-foreground">Active Predictions</div>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <Users className="w-8 h-8 text-accent mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary">892</div>
            <div className="text-muted-foreground">Verified Predictors</div>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <Brain className="w-8 h-8 text-accent mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary">76%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;