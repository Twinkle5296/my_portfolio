import React from "react";
import FadeIn from "../animations/FadeIn";
import * as Icons from "lucide-react";

const Skills = () => {

  const skillCategories = {
    "Backend Development": [
      { name: "C#", level: "Expert", icon: "Code2" },
      { name: ".NET Core", level: "Expert", icon: "Server" },
      { name: "ASP.NET MVC", level: "Advanced", icon: "Layers" },
      { name: "Entity Framework", level: "Advanced", icon: "Database" },
      { name: "REST APIs", level: "Expert", icon: "Webhook" },
    ],

    "Frontend Development": [
      { name: "JavaScript", level: "Expert", icon: "FileCode" },
      { name: "TypeScript", level: "Advanced", icon: "FileJson" },
      { name: "React", level: "Advanced", icon: "Atom" },
      { name: "Angular", level: "Expert", icon: "LayoutDashboard" },
      // { name: "HTML5", level: "Expert", icon: "Globe" },
      // { name: "CSS3 / SASS", level: "Advanced", icon: "Palette" },
      // { name: "Bootstrap", level: "Expert", icon: "Layout" },
      { name: "jQuery", level: "Advanced", icon: "Code" },
    ],

    "Cloud & DevOps": [
      { name: "AWS (S3, RDS, Elastic Beanstalk)", level: "Advanced", icon: "Cloud" },
      { name: "Azure App Services", level: "Intermediate", icon: "CloudCog" },
      { name: "Azure Functions", level: "Intermediate", icon: "Cpu" },
      { name: "CI/CD Pipelines", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub Actions", level: "Advanced", icon: "Github" },
    ],

    "Databases": [
      { name: "SQL Server", level: "Expert", icon: "Database" },
      { name: "MySQL", level: "Advanced", icon: "DatabaseBackup" },
      { name: "MongoDB", level: "Intermediate", icon: "HardDrive" },
      { name: "T-SQL / PL-SQL", level: "Advanced", icon: "Table" },
    ],

    "Tools": [
      { name: "Git & GitHub", level: "Expert", icon: "Github" },
      { name: "Postman / Swagger", level: "Advanced", icon: "Send" },
      { name: "Visual Studio", level: "Expert", icon: "Monitor" },
      { name: "VS Code", level: "Expert", icon: "Code2" },
      // { name: "Agile / Scrum", level: "Advanced", icon: "Users" },
      // { name: "SOLID Principles", level: "Advanced", icon: "ShieldCheck" },
      // { name: "Performance Optimization", level: "Advanced", icon: "Gauge" },
    ],
    "Practices":[
      { name: "Agile / Scrum", level: "Advanced", icon: "Users" },
      { name: "SOLID Principles", level: "Advanced", icon: "ShieldCheck" },
      { name: "Performance Optimization", level: "Advanced", icon: "Gauge" },
    ]
  };

  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level];
  };

  return (
    <section id="skills" className="relative bg-black py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Technical Expertise
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Skills & Technologies
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, high-performance
              web applications and cloud solutions.
            </p>
          </div>
        </FadeIn>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> */}

          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (

              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition">

                  <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-medium text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="space-y-5">

                    {skills.map((skill, index) => {
                      const IconComponent =
                        Icons[skill.icon] || Icons.Code2;

                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div key={index} className="space-y-2">

                          <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>

                              <span className="text-sm text-white">
                                {skill.name}
                              </span>

                            </div>

                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary/40 to-primary"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
