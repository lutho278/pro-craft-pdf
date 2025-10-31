import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ProfessionalSummaryFormProps {
  value: string;
  onChange: (value: string) => void;
  onGenerateAI: () => void;
  isGenerating: boolean;
}

const ProfessionalSummaryForm = ({ 
  value, 
  onChange, 
  onGenerateAI,
  isGenerating 
}: ProfessionalSummaryFormProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Professional Summary</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onGenerateAI}
          disabled={isGenerating}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isGenerating ? 'Generating...' : 'Generate with AI'}
        </Button>
      </div>
      <div>
        <Label htmlFor="summary">
          Write a compelling summary of your professional background and goals
        </Label>
        <Textarea
          id="summary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Experienced professional with a proven track record in..."
          className="min-h-[120px]"
        />
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
