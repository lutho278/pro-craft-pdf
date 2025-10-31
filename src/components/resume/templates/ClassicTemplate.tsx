import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

const ClassicTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[1056px] w-[816px]" id="resume-content">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-3">
          {data.personalDetails.fullName || 'Your Name'}
        </h1>
        <div className="text-sm text-gray-700 space-y-1">
          <div>
            {data.personalDetails.email && <span>{data.personalDetails.email}</span>}
            {data.personalDetails.phone && <span> | {data.personalDetails.phone}</span>}
          </div>
          <div>
            {data.personalDetails.location && <span>{data.personalDetails.location}</span>}
          </div>
          {(data.personalDetails.linkedin || data.personalDetails.website) && (
            <div>
              {data.personalDetails.linkedin && <span>{data.personalDetails.linkedin}</span>}
              {data.personalDetails.website && <span> | {data.personalDetails.website}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <div className="mb-5">
          <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-400 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            {data.professionalSummary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-400 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="mb-1">
                  <h3 className="text-base font-bold text-gray-900">{exp.jobTitle}</h3>
                </div>
                <div className="text-sm text-gray-700 italic mb-1">
                  <span className="font-semibold">{exp.company}</span>
                  {exp.location && <span>, {exp.location}</span>}
                  <span className="float-right not-italic">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-400 mb-3">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="mb-1">
                  <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
                </div>
                <div className="text-sm text-gray-700 italic">
                  <span className="font-semibold">{edu.institution}</span>
                  {edu.location && <span>, {edu.location}</span>}
                  <span className="float-right not-italic">{edu.graduationDate}</span>
                </div>
                {edu.gpa && (
                  <div className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-400 mb-2">
            Skills
          </h2>
          <p className="text-sm text-gray-700">{data.skills.join(' • ')}</p>
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-400 mb-3">
            Certifications
          </h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="text-sm text-gray-700">
                <span className="font-bold">{cert.name}</span>
                <span>, {cert.issuer}</span>
                <span className="float-right">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
