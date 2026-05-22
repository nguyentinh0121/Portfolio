import React from 'react'
import styles from './about.module.css'; 
import avatar from '../../assets/images/avatar.jpg';

export default function index() {  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Git",
    "Figma",
    "REST API",
    "MongoDB",
  ];

  const projects = [
    {
      title: "LMS Learning Platform",
      stack: "React.js • ASP.NET Core • MongoDB",
      desc: "Hệ thống quản lý học tập hiện đại với phân quyền Admin, Teacher, Student, quản lý khóa học, bài học và bài tập.",
    },
    {
      title: "E-Commerce Website",
      stack: "React.js • REST API",
      desc: "Website thương mại điện tử tối ưu UI/UX với responsive design và trải nghiệm người dùng hiện đại.",
    },
    {
      title: "Personal Portfolio",
      stack: "React.js • CSS Module",
      desc: "Portfolio cá nhân chuẩn tuyển dụng Frontend Developer với hiệu ứng mượt và giao diện chuyên nghiệp.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Background Blur */}
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>


      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.badge}>
            Frontend Developer
          </span>

          <h1>
            Xin chào, tôi là <br />
            <span>Nguyễn Đức Tính</span>
          </h1>

          <p>
            Tôi xây dựng giao diện web hiện đại,
            responsive và tối ưu trải nghiệm người dùng
            bằng React.js, JavaScript và UI/UX thinking.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              <a href="http://localhost:5173/" className={styles.linkButton}>
                Download CV
              </a>
            </button>

            <button className={styles.secondaryBtn}>
              <a href="http://localhost:5173/contact" target="_blank" rel="noreferrer" className={styles.linkButton} >
                Contact Me
              </a>
            </button>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
              {`const developer = {
                name: "Nguyễn Đức Tính",
                role: "Frontend Developer",
                skills: ["React", "JS", "UI/UX"],
                passion: "Building modern UI"
              };`}
            </pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={styles.section}
      >
        <h2>About Me</h2>

        <p className={styles.aboutText}>
          Tôi là Frontend Developer đam mê xây dựng
          giao diện web hiện đại với trải nghiệm người
          dùng tốt, clean UI và hiệu suất tối ưu.
          Hiện tại tôi tập trung phát triển kỹ năng
          React.js, UI/UX và làm các dự án thực tế
          để hướng tới môi trường làm việc chuyên nghiệp.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={styles.section}
      >
        <h2>Tech Stack</h2>

        <div className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCard}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={styles.section}
      >
        <h2>Let's Work Together</h2>

        <p className={styles.contactText}>
          Sẵn sàng tham gia các dự án thực tế và cơ hội
          nghề nghiệp Frontend Developer.
        </p>

        <div className={styles.contactBox}>
          <span>Email:</span>
          <p>nguyenductinh07@gmail.com</p>
        </div>
      </section>
    </div>
  )
}
