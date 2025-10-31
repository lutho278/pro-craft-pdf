import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Certification } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";

interface CertificationsFormProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

const CertificationsForm = ({ certifications, onChange }: CertificationsFormProps) => {
  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: ''
    };
    onChange([...certifications, newCert]);
  };

  const removeCertification = (id: string) => {
    onChange(certifications.filter(cert => cert.id !== id));
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    onChange(certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Certifications</h3>
        <Button type="button" variant="outline" size="sm" onClick={addCertification}>
          <Plus className="mr-2 h-4 w-4" />
          Add Certification
        </Button>
      </div>

      {certifications.map((cert) => (
        <div key={cert.id} className="p-4 border rounded-lg space-y-4 relative">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => removeCertification(cert.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Certification Name *</Label>
              <Input
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                placeholder="AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <Label>Issuing Organization *</Label>
              <Input
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                placeholder="Amazon Web Services"
              />
            </div>
            <div>
              <Label>Date Obtained *</Label>
              <Input
                type="month"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      {certifications.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No certifications added yet. Click "Add Certification" to get started.
        </p>
      )}
    </div>
  );
};

export default CertificationsForm;
