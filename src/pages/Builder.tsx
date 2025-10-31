import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ResumeData } from "@/types/resume";
import PersonalDetailsForm from "@/components/resume/PersonalDetailsForm";
import ProfessionalSummaryForm from "@/components/resume/ProfessionalSummaryForm";
import WorkExperienceForm from "@/components/resume/WorkExperienceForm";
import EducationForm from "@/components/resume/EducationForm";
import SkillsForm from "@/components/resume/SkillsForm";
import CertificationsForm from "@/components/resume/CertificationsForm";
import TemplateSelector from "@/components/resume/TemplateSelector";
import ModernTemplate from "@/components/resume/templates/ModernTemplate";
import ClassicTemplate from "@/components/resume/templates/ClassicTemplate";
import { useToast } from "@/hooks/use-toast";

const Builder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalDetails: {
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/sarahjohnson',
      website: 'sarahjohnson.dev'
    },
    professionalSummary: 'Results-driven software engineer with 5+ years of experience building scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact projects. Passionate about clean code, user experience, and continuous learning.',
    workExperience: [
      {
        id: '1',
        jobTitle: 'Senior Software Engineer',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        startDate: 'Jan 2021',
        endDate: '',
        current: true,
        description: 'Led development of microservices architecture serving 1M+ users\nImplemented CI/CD pipeline reducing deployment time by 60%\nMentored team of 5 junior developers'
      },
      {
        id: '2',
        jobTitle: 'Software Engineer',
        company: 'StartupXYZ',
        location: 'Remote',
        startDate: 'Jun 2019',
        endDate: 'Dec 2020',
        current: false,
        description: 'Developed and maintained React-based customer portal\nOptimized database queries improving response time by 40%\nCollaborated with design team to implement responsive UI'
      }
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California',
        location: 'Berkeley, CA',
        graduationDate: 'May 2019',
        gpa: '3.8'
      }
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Git', 'Agile/Scrum'],
    certifications: [
      {
        id: '1',
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Mar 2023'
      },
      {
        id: '2',
        name: 'Professional Scrum Master I',
        issuer: 'Scrum.org',
        date: 'Jan 2022'
      }
    ],
    template: 'modern'
  });

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      // TODO: Implement AI generation
      toast({
        title: "AI Feature Coming Soon",
        description: "The AI generation feature will be available once the backend is set up.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const element = document.getElementById('resume-content');
      if (!element) {
        throw new Error('Resume content not found');
      }

      // @ts-ignore - html2pdf is loaded via script
      const html2pdf = (await import('html2pdf.js')).default;
      
      const opt = {
        margin: 0,
        filename: `${resumeData.personalDetails.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' as const
        }
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded as PDF.",
      });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Error",
        description: "Failed to export PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button
            onClick={handleExportPDF}
            disabled={isExporting || !resumeData.personalDetails.fullName}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isExporting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Build Your Resume</h2>
              
              <div className="space-y-8">
                <PersonalDetailsForm
                  data={resumeData.personalDetails}
                  onChange={(data) => setResumeData({ ...resumeData, personalDetails: data })}
                />

                <div className="border-t pt-6">
                  <ProfessionalSummaryForm
                    value={resumeData.professionalSummary}
                    onChange={(value) => setResumeData({ ...resumeData, professionalSummary: value })}
                    onGenerateAI={handleGenerateAI}
                    isGenerating={isGenerating}
                  />
                </div>

                <div className="border-t pt-6">
                  <WorkExperienceForm
                    experiences={resumeData.workExperience}
                    onChange={(experiences) => setResumeData({ ...resumeData, workExperience: experiences })}
                  />
                </div>

                <div className="border-t pt-6">
                  <EducationForm
                    education={resumeData.education}
                    onChange={(education) => setResumeData({ ...resumeData, education })}
                  />
                </div>

                <div className="border-t pt-6">
                  <SkillsForm
                    skills={resumeData.skills}
                    onChange={(skills) => setResumeData({ ...resumeData, skills })}
                  />
                </div>

                <div className="border-t pt-6">
                  <CertificationsForm
                    certifications={resumeData.certifications}
                    onChange={(certifications) => setResumeData({ ...resumeData, certifications })}
                  />
                </div>

                <div className="border-t pt-6">
                  <TemplateSelector
                    selected={resumeData.template}
                    onChange={(template) => setResumeData({ ...resumeData, template })}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Live Preview</h3>
              <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="transform scale-75 origin-top-left" style={{ width: '133.33%' }}>
                  {resumeData.template === 'modern' ? (
                    <ModernTemplate data={resumeData} />
                  ) : (
                    <ClassicTemplate data={resumeData} />
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
