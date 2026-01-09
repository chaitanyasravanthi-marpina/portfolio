import { ExternalLink, Github, Folder, Code2, Trophy, Target, Flame } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "A full-stack web application that allows users to upload their résumé in PDF format and receive structured, actionable feedback tailored to a specific job description. The system leverages AI to interpret and score uploaded documents against real-world ATS expectations.",
      tech: ["React", "TypeScript", "Vite", "React Router", "PDF.js(pdfjs-dist)", "Puter AI", "Tailwind CSS", "Zustand", "KV storage"],
      github: "https://github.com/chaitanyasravanthi-marpina/ai_resume_analyser",
      live: "https://puter.com/app/ai-resume-analyser-20",
      featured: true
    },

    {
      title: "AI DSA MENTOR",
      description: "Developed a specialized AI-powered web application to help students master Data Structures and algorithms using Socratic-style tutoring  Restricted the assistant to provide only conceptual hints and guiding questions,preventing direct code generation and encouraging deep problem solving",

      tech: ["Python", "Flask", "html", "css", "Gemini api"],
      github: "https://github.com/chaitanyasravanthi-marpina/dsa_hint_assistant",
      live: "https://dsa-hint-assistant.onrender.com",
      featured: true,
      icon: ExternalLink
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Marpinachaitanyasravanthi",
      stats: "250+ Problems Solved",
      rating: "1500+ Rating",
      color: "from-[#FFA116] to-[#FF6B00]",
      href: "https://leetcode.com/u/Marpinachaitanyasravanthi/",
      icon: Code2
    },
    {
      platform: "CodeChef",
      username: "real_trick_39",
      stats: "2★ Coder",
      rating: "1420+ Rating",
      color: "from-[#5B4638] to-[#8B6914]",
      href: "https://www.codechef.com/users/real_trick_39",
      icon: Trophy
    },
    // {
    //   platform: "Codeforces",
    //   username: "@yourusername",
    //   stats: "Specialist",
    //   rating: "1400+ Rating",
    //   color: "from-[#1F8ACB] to-[#318CE7]",
    //   href: "https://codeforces.com/profile/yourusername",
    //   icon: Target
    // },
    {
      platform: "GeeksforGeeks",
      username: "Marpina Chaitanya Sravanthi",
      stats: "100+ Problems",
      rating: "Institute Rank #170",
      color: "from-[#2F8D46] to-[#0F9D58]",
      href: "https://www.geeksforgeeks.org/profile/chaitanyasrzqhv?tab=overview",
      icon: Flame
    },
    {
      platform: "GitHub",
      username: "Marpina chaitanya sravanthi",
      stats: "20+ Repositories",
      rating: "150+ Contributions",
      color: "from-[#6e5494] to-[#24292e]",
      href: "https://github.com/chaitanyasravanthi-marpina",
      icon: Github
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          {/* Featured projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Live Project Preview Placeholder */}
                <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video rounded-xl bg-card border border-border overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/10">

                    {/* Browser Header Bar */}
                    <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                      <div className="flex-1 px-4">
                        <div className="bg-background/50 rounded-md py-0.5 px-3 text-[10px] text-muted-foreground font-mono truncate max-w-[200px] mx-auto text-center border border-border/50">
                          {project.live || 'localhost:3000'}
                        </div>
                      </div>
                    </div>

                    {/* The Live Link Embed (iframe) */}
                    <div className="relative w-full h-full bg-muted overflow-hidden">
                      {project.live ? (
                        <iframe
                          src={project.live}
                          className="w-full h-full border-none pointer-events-none scale-[0.9] origin-top rounded-md opacity-80 group-hover:opacity-100 group-hover:scale-[1] transition-all duration-500"
                          title={project.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                          <span className="text-muted-foreground font-mono text-xs italic">Live link not provided</span>
                        </div>
                      )}

                      {/* Overlay to prevent accidental scrolling while browsing the portfolio */}
                      <div className="absolute inset-0 z-10 bg-transparent group-hover:hidden" />
                    </div>
                  </div>

                  {/* Action Link for the Preview */}
                  <div className="absolute -bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.live} target="_blank" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                      Visit Live <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Project info */}
                <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="p-6 rounded-xl bg-secondary/10 border border-border mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-bold tracking-tighter text-primary px-2 py-1 rounded bg-primary/5 border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className={`flex gap-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a href={project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
                      <Github size={18} /> git
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
                        <ExternalLink size={18} /> deploy
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coding Profiles */}
          <div>
            <div className="text-center mb-12">

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Coding <span className="text-gradient">Profiles</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <profile.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {profile.platform}
                      </h4>
                      <p className="text-sm text-muted-foreground font-mono">{profile.username}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Achievement</span>
                      <span className="text-foreground font-medium">{profile.stats}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-primary font-medium">{profile.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">View Profile</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
