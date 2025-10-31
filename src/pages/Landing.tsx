import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FileText, Sparkles, Download, Zap } from "lucide-react";
const Landing = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI Resume Builder Pro
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create stunning, professional resumes in minutes with the power of AI. 
            Choose from beautiful templates and let GPT-4 craft your perfect professional story.
          </p>
          <Button size="lg" onClick={() => navigate('/builder')} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
            <Sparkles className="mr-2 h-5 w-5" />
            Create Your Resume
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Writing</h3>
            <p className="text-muted-foreground">
              Let GPT-4 generate professional summaries and optimize your content for maximum impact.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Beautiful Templates</h3>
            <p className="text-muted-foreground">
              Choose from professionally designed templates that look great and pass ATS systems.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Export as PDF</h3>
            <p className="text-muted-foreground">
              Download your resume as a high-quality, print-ready PDF with perfect formatting.
            </p>
          </Card>
        </div>
      </section>

      {/* Project Reflection Section */}
      

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Perfect Resume?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who have landed their dream jobs with AI-powered resumes.
          </p>
          <Button size="lg" onClick={() => navigate('/builder')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Zap className="mr-2 h-5 w-5" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>;
};
export default Landing;