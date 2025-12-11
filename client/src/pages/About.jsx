import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/Auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">

            <div className="hero-content">
              <p>
                Welcome {user ? `${user.username}` : ""} to my portfolio!
              </p>

              <h1>Who Am I?</h1>

              <p>
                I’m <strong>Akash Meshram</strong>, a MERN Stack Developer and
                Technical Support Engineer currently working at 
                <strong> Sant Gadge Baba Amravati University (SGBAU)</strong>.
                I build practical, scalable, real-world applications that improve 
                internal workflows for students and administrative teams.
              </p>

              <h1>What I Do</h1>

              <p>
                <strong>Full-Stack Development:</strong> I design and develop
                modern web applications using React, Node.js, Express, and MongoDB.
                My projects include a Youth Festival Chat Assistant, an automated 
                Certificate Management System, and a secure Role-Based Admin Dashboard.
              </p>

              <p>
                <strong>Technical Support & Software Maintenance:</strong>  
                I ensure SGBAU’s software systems run smoothly by resolving issues, 
                maintaining applications, and improving system reliability.
              </p>


              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Contact Me</button>
                </NavLink>

                <NavLink to="/service">
                  <button className="btn secondary-btn">View My Work</button>
                </NavLink>
              </div>
            </div>

            {/* Image remains the same */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies"
                width="400"
                height="500"
              />
            </div>

          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
