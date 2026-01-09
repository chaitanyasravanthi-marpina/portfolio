import { Code2, Cpu, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient code"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building modern web applications"
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "DSA & competitive programming"
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Always exploring new technologies"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get to <span className="text-gradient">Know Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an undergraduate Computer Science Engineering student (Batch of 2027) with a strong passion for software development. I am currently learning full-stack web development, data structures & algorithms, and problem-solving techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building projects that solve real-world problems and help users in meaningful ways. Recently, I have been focusing on Artificial Intelligence, particularly working with Large Language Models (LLMs) and modern AI APIs to create intelligent applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am constantly improving my skills through hands-on projects, coding practice, and continuous learning, with the goal of becoming a skilled and industry-ready software developer.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">DSA Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group card-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
