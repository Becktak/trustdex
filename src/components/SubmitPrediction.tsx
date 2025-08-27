import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Calendar, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitPrediction = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category || !deadline) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to submit your prediction.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Prediction Submitted!",
      description: "Your prediction has been added to the network for community voting.",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setCategory("");
    setDeadline("");
  };

  const categories = [
    "Technology",
    "Finance",
    "Politics",
    "Sports",
    "Climate",
    "Entertainment",
    "Science",
    "Cryptocurrency"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Submit Your Prediction
          </h2>
          <p className="text-xl text-muted-foreground">
            Share your insights with the community and earn rewards for accuracy
          </p>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <PlusCircle className="w-6 h-6 mr-2 text-primary" />
              Create New Prediction
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Prediction Title
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Bitcoin will reach $100,000 by end of 2025"
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Description
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide details about your prediction, reasoning, and any relevant context..."
                  className="bg-input border-border focus:border-primary min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    Category
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Resolution Deadline
                  </label>
                  <Input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">Reward Structure</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Submission Reward:</span>
                    <Badge variant="secondary">+10 IQ Points</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy Bonus (if correct):</span>
                    <Badge variant="secondary">+50 IQ Points</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Community Engagement:</span>
                    <Badge variant="secondary">+5 per vote</Badge>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                size="lg"
              >
                Submit Prediction
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubmitPrediction;