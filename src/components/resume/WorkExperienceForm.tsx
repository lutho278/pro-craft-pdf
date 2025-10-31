import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { WorkExperience } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";

interface WorkExperienceFormProps {
  experiences: WorkExperience[];
  onChange: (experiences: WorkExperience[]) => void;
}

const WorkExperienceForm = ({ experiences, onChange }: WorkExperienceFormProps) => {
  const addExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    onChange(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <Button type="button" variant="outline" size="sm" onClick={addExperience}>
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </div>

      {experiences.map((exp, index) => (
        <div key={exp.id} className="p-4 border rounded-lg space-y-4 relative">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => removeExperience(exp.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Job Title *</Label>
              <Input
                value={exp.jobTitle}
                onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                placeholder="Senior Software Engineer"
              />
            </div>
            <div>
              <Label>Company *</Label>
              <Input
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                placeholder="Tech Corp"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                placeholder="New York, NY"
              />
            </div>
            <div>
              <Label>Start Date *</Label>
              <Input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
              />
            </div>
            <div className="flex items-center space-x-2 pt-8">
              <Checkbox
                id={`current-${exp.id}`}
                checked={exp.current}
                onCheckedChange={(checked) => 
                  updateExperience(exp.id, 'current', checked as boolean)
                }
              />
              <Label htmlFor={`current-${exp.id}`}>Currently working here</Label>
            </div>
          </div>
          <div>
            <Label>Description *</Label>
            <Textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="• Led a team of 5 developers&#10;• Increased efficiency by 40%&#10;• Implemented new features..."
              className="min-h-[100px]"
            />
          </div>
        </div>
      ))}

      {experiences.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No work experience added yet. Click "Add Experience" to get started.
        </p>
      )}
    </div>
  );
};

export default WorkExperienceForm;
