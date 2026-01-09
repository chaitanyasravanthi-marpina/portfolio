import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Vignan's institute of information technology",
      period: "2024 - 2027",
      description: "Currently pursuing Bachelor's degree with focus on software development, data structures, and algorithms.",

      icon: GraduationCap
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Government Polytechnic for Women,Bheemunipatnam",
      period: "2021 - 2024",
      description: "Completed a 3-year intensive program focused on core engineering fundamentals and hands-on laboratory work.",
      cgpa: "87.5%",
      icon: BookOpen
    }
  ];

  const certifications = [
    "Python Essentials - Cisco Networking Academy",
    "JavaScript Essentials- Cisco Networking Academy",
    "Html,css - Cisco Networking Academy",

  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education timeline */}
            <div className="lg:col-span-2 space-y-6">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary" />

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <span className="text-primary font-mono text-sm">{item.period}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                        <span className="text-sm font-semibold text-primary">{item.cgpa}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="p-6 rounded-xl bg-card border border-border card-shadow sticky top-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Certifications</h3>
                </div>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li
                      key={cert}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
