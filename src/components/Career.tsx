import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>ZepMenu</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Empowering restaurants to modernize dining through QR code menus. ZepMenu offers a seamless way for customers to browse their menus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Operations Analyst</h4>
                <h5>NielsenIQ</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Transformed complex data into meaningful insights. Collaborated with cross-functional teams to deliver accurate consumer insights for leading brands.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Investigation Associate</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Handled investigations and resolved issues ensuring delivery excellence in varied operational scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Unified Mentor Pvt Ltd</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Developed responsive interfaces and worked on optimizing data and code.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer (Freelance)</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Designed user-centric web and mobile experiences for clients across SaaS, fintech, restaurant, and events domains using Figma and Framer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's Degree - ECE</h4>
                <h5>Sreenivasa Inst. of Technology & Management Studies</h5>
              </div>
              <h3>2019 - 2023</h3>
            </div>
            <p>
              Completed B.Tech in Electrical, Electronics and Communications Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
