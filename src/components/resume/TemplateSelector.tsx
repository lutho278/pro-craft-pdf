import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selected: 'modern' | 'classic';
  onChange: (template: 'modern' | 'classic') => void;
}

const TemplateSelector = ({ selected, onChange }: TemplateSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose Template</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <Card
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selected === 'modern' ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => onChange('modern')}
        >
          <div className="relative">
            {selected === 'modern' && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-1">
                <Check className="h-4 w-4" />
              </div>
            )}
            <div className="text-center mb-2">
              <h4 className="font-semibold text-lg">Modern</h4>
            </div>
            <div className="bg-white border-2 border-gray-200 p-3 rounded text-xs space-y-1">
              <div className="h-2 bg-blue-600 w-3/4 rounded"></div>
              <div className="h-1 bg-gray-300 w-full rounded"></div>
              <div className="h-1 bg-gray-300 w-5/6 rounded"></div>
              <div className="h-1 bg-gray-400 w-2/3 rounded mt-2"></div>
              <div className="h-1 bg-gray-300 w-full rounded"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Clean and minimalist with bold accents
            </p>
          </div>
        </Card>

        <Card
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selected === 'classic' ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => onChange('classic')}
        >
          <div className="relative">
            {selected === 'classic' && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-1">
                <Check className="h-4 w-4" />
              </div>
            )}
            <div className="text-center mb-2">
              <h4 className="font-semibold text-lg">Classic</h4>
            </div>
            <div className="bg-white border-2 border-gray-200 p-3 rounded text-xs space-y-1">
              <div className="h-2 bg-gray-800 w-2/3 rounded mx-auto"></div>
              <div className="h-px bg-gray-400 w-full my-1"></div>
              <div className="h-1 bg-gray-300 w-full rounded"></div>
              <div className="h-1 bg-gray-300 w-4/5 rounded"></div>
              <div className="h-1 bg-gray-400 w-3/4 rounded mt-2"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Traditional and professional with serif fonts
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TemplateSelector;
