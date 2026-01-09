const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jest"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently learning */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-primary text-sm">Currently Learning</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["LLM's", "System Design", "Gen Ai"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
