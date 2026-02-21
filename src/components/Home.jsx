import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm <span>Nihal</span></h1>

        <h2 className="typing">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Frontend Specialist" ,
              "Building Scalable Web Applications ",
              "Expert in React.js & Node.js Development" ,
              "Backend Specialist"
            ]}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p>
          I build modern, scalable and responsive web applications.
        </p>

        <a href="/nihalresume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="hero-right">
        <img src="/NIHAL.jpeg" alt="profile" />
      </div>
    </section>
  );
}

export default Home;