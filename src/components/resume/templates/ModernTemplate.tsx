import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

const ModernTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[1056px] w-[816px]" id="resume-content">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {data.personalDetails.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {data.personalDetails.email && <span>{data.personalDetails.email}</span>}
          {data.personalDetails.phone && <span>•</span>}
          {data.personalDetails.phone && <span>{data.personalDetails.phone}</span>}
          {data.personalDetails.location && <span>•</span>}
          {data.personalDetails.location && <span>{data.personalDetails.location}</span>}
        </div>
        {(data.personalDetails.linkedin || data.personalDetails.website) && (
          <div className="flex flex-wrap gap-3 text-sm text-blue-600 mt-1">
            {data.personalDetails.linkedin && <span>{data.personalDetails.linkedin}</span>}
            {data.personalDetails.website && <span>•</span>}
            {data.personalDetails.website && <span>{data.personalDetails.website}</span>}
          </div>
        )}
      </div>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">EXPERIENCE</h2>
          <div className="space-y-4">
            {data.workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{exp.jobTitle}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">{exp.company}</span>
                  {exp.location && <span> • {exp.location}</span>}
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">EDUCATION</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.graduationDate}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{edu.institution}</span>
                  {edu.location && <span> • {edu.location}</span>}
                  {edu.gpa && <span> • GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">CERTIFICATIONS</h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="text-sm">
                <span className="font-semibold text-gray-900">{cert.name}</span>
                <span className="text-gray-700"> • {cert.issuer}</span>
                <span className="text-gray-600"> • {cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
