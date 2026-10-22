
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      subtitle: "Languages & Problem Solving",
      skills: ["Java",  "Data Structures & Algorithms"],
    },
    {
      title: "Frontend Development",
      subtitle: "Web Technologies",
      skills: ["HTML", "CSS","JavaScript", "React", "Responsive Web Design"],
    },
    {
      title: "Developer Tools",
      subtitle: "Development Workflow",
      skills: ["Git", "GitHub"  ]
    },
    {
      title: "UI/UX Design",
      subtitle: "Design & Prototyping",
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx">
          <span className="skill-eyebrow">TECHNICAL EXPERTISE</span>

          <h2>Skills & Technologies</h2>

          <p className="skill-intro">
            Technologies and tools I use to build responsive web
            applications, develop software solutions, and create
            user-friendly digital experiences.
          </p>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span className="skill-card-line"></span>
                  <h3>{group.title}</h3>
                </div>

                <p className="skill-card-subtitle">
                  {group.subtitle}
                </p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
