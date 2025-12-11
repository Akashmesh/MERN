import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Hi — I'm Akash Meshram</p>
              <h1>MERN Developer & Technical Support at SGBAU</h1>

              <p>
                I build practical web apps and internal tools that solve real
                problems for Sant Gadge Baba Amravati University and beyond.
                Recent work includes a festival chatbot, a role-based admin
                dashboard, and an automated certificate management system —
                all built with React, Node.js and MongoDB.
              </p>

              <div className="skills-row" aria-hidden>
                <span className="skill">React</span>
                <span className="skill">Node.js</span>
                <span className="skill">Express</span>
                <span className="skill">MongoDB</span>
              </div>

              <div className="btn btn-group">
                <a href="https://github.com/Akashmesh">
                  <button className="btn">View Projects</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Contact Me</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="Akash Meshram working on code"
                width="420"
                height="420"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics / Metrics */}
      <Analytics />

      {/* Projects / Call to action */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* image / screenshot */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="Screenshots of projects"
              width="420"
              height="420"
            />
          </div>

          <div className="hero-content">
            <p>Selected Projects & Impact</p>
            <h1>Tools I Built for SGBAU & Campus Teams</h1>

            <p>
              <strong>SGBAU Youth Festival Chat Assistant:</strong> a mobile-first,
              JSON-driven chatbot that gives students instant access to event
              schedules, venue maps and registration links — built with React,
              Framer Motion and Vite.
            </p>

            <p>
              <strong>MERN Role-Based Admin Dashboard:</strong> secure admin
              panel with JWT authentication, modular Express APIs and full CRUD
              for users, services and messages — designed for maintainability
              and real-world use.
            </p>

            <p>
              <strong>Certificate Management System:</strong> end-to-end MERN
              solution for batch certificate generation, admin verification and
              public certificate lookup (PDF export + Excel import).
            </p>

            <div className="btn btn-group">
              <a href="https://youthfestival.netlify.app/">
                <button className="btn">Open Chat Assistant</button>
              </a>
              <a href="/projects#cert-system">
                <button className="btn secondary-btn">See Certificate System</button>
              </a>
            </div>

            <p style={{ marginTop: "8px", fontSize: "1.3rem" }}>
              I also handle technical support & software maintenance for SGBAU,
              ensuring systems run reliably while building tools that improve
              workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
