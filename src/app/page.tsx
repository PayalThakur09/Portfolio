
export default function Home() {

  return (
    <main id="main">
      
        {/* ======= About Section =======  */}
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
              <p>Welcome to my corner of the web! I am Payal Thakur, a dedicated and creative web developer passionate about bringing ideas to life in the digital realm. With a strong foundation in languages like HTML, CSS and JavaScript, I thrive on the challenges of crafting elegant and functional websites that leave a lasting impression. Whether it is building responsive layouts, optimizing for performance, or diving into the latest frontend frameworks, I am always excited to push the boundaries of what is possible in web development. Let us collaborate and create something extraordinary together. </p>
            </div>

            <div className="row">
              <div className="col-lg-4" >
                <img src="assets/img/payal.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" >
                <h3>Web Developer &amp; Full Stack Developer.</h3>
                <p className="fst-italic">
                Strong in design and integration with intuitive problemsolving skills. Proficient in JAVA, HTML,CSS, JAVASCRIPT, ANGULAR, PYTHON, MERN, AWS and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 June 1994</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>GitHub:</strong> <span>https://github.com/PayalThakur09</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+918975257709</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, India</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>payalmsd@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- ======= Skills Section ======= --> */}
        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Skills</h2>
              <p>As a web developer, I specialize in crafting immersive online experiences through the fusion of design and technology. Proficient in languages such as HTML, CSS and JavaScript, I excel in creating responsive and dynamic websites that captivate users and drive engagement. With expertise in frameworks like Angular and React, I leverage cutting-edge tools to streamline development processes and deliver high-quality products efficiently. Passionate about staying updated with the latest industry trends and best practices, I am committed to crafting seamless digital solutions that elevate brands and exceed user expectations.</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-6" >

                <div className="progress">
                  <span className="skill">HTML <i className="val">100%</i></span>
                  <div className="progress-bar-wrap" >
                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}> </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap" >
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Angular <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6"  data-aos-delay="100">

                <div className="progress">
                  <span className="skill">Java <i className="val">60%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Mysql <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0}aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">MERN <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Python <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* <!-- ======= Resume Section ======= --> */}
        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              <p>Seeking opportunities to leverage my skills and training to contribute to the growth of the company. I am eager to explore diverse roles that will enable me to realize my potential in this field.</p>
            </div>

            <div className="row">
              <div className="col-lg-6" >
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Payal Thakur</h4>
                  <p><em>Seeking opportunities to leverage my skills and training to contribute to the growth of the company. I am eager to explore diverse roles that will enable me to realize my potential in this field.</em></p>
                  <ul>
                    <li>Pune, Maharashtra, India</li>
                    <li>+91 8975257709</li>
                    <li>payalmsd@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master in Full Stack Developer with AWS</h4>
                  <h5>2022 - 2024</h5>
                  <p><em>IT Vedant, IT Training Institute, Mumbai, Maharashtra, India</em></p>
                  <p>During my Masters program at IT Vedant, I delved deep into the world of full-stack development, gaining comprehensive knowledge in both front-end and back-end technologies. Through hands-on projects and immersive learning experiences, I honed my skills in various programming languages and frameworks, acquiring a solid foundation in theoretical concepts as well as practical application. This intensive program equipped me with the expertise needed to develop dynamic and scalable web applications, preparing me for a successful career in the field of software development.</p>
                </div>
                <div className="resume-item">
                  <h4>Bachlor of Electronics Engineering </h4>
                  <h5>2012 - 2016</h5>
                  <p><em>Shree Shankar Prasad Agnihotri College of Engineering , Wardha, Maharashtra, India</em></p>
                  <p>I am a proud graduate with a Bachelor of Science in Electronics Engineering, a program that equipped me with a deep understanding of electronic systems and their applications. Throughout my academic journey, I immersed myself in courses covering topics such as circuit analysis, digital electronics, signal processing, and microprocessor systems. Engaging in hands-on laboratory work and projects, I gained practical experience in designing, testing, and troubleshooting electronic circuits. My education not only provided me with technical expertise but also fostered critical thinking and analytical skills essential for tackling complex engineering challenges. With a solid foundation in electronics engineering, I am eager to leverage my knowledge and contribute to innovative technological advancements in the field.</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Mern Full stack developer Intern</h4>
                  <h5>Feb 2024 - Present</h5>
                  <p><em>Adnecto Technologies pvt.ltd, Kannur, Kerala, India</em></p>
                  <ul>
                    <li>Experienced in working with MERS technologies, alongside expertise in Next.js, Material-UI (MUI), and TypeScript. </li>
                    <li>Proficient in leveraging these languages and frameworks to design and develop new websites, as well as contributing to project work.</li>
                    <li>Skilled in implementing innovative solutions and ensuring high-quality results in web development projects.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Research And Development Engineer</h4>
                  <h5>June 2019 - May 2020</h5>
                  <p><em>Attwin Technology pvt. ltd, Pune, Maharashtra, India</em></p>
                  <ul>
                    <li>Proficient in LED light manufacturing and E-Cycle development, with a strong emphasis on product design, research, and development. </li>
                    <li>Skilled in conceptualizing and bringing new products to fruition, as well as re-engineering existing products for optimization. </li>
                    <li>Experienced in PCB design to ensure the quality and functionality of electronic components.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Research And Development Engineer</h4>
                  <h5>Sept 2016 - Mar 2019</h5>
                  <p><em>Micro Power - SANSTAR MICROSYSTEMS PVT LTD, Nagpur, Maharashtra, India </em></p>
                  <ul>
                    <li>Proficient in the design and development of Switched-Mode Power Supplies (SMPS), with expertise in PCB designing, assembly, and unit testing</li>
                    <li>Known for innovating new products for market introduction</li>
                    <li>Possess advanced design skills utilizing Photoshop and CorelDRAW</li>
                    <li>Experienced in designing adapters and ensuring their functionality and efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row portfolio-container"  data-aos-delay="100">

              <div className="col-lg-4 col-md-6 portfolio-item ">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/project1-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/project1-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/project5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/project5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="aap"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/project3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/project3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="app"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item ">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/project2-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/project2-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="game"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/project-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/project-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="web"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>If you are interested in collaborating or have any inquiries, please do not hesitate to get in touch. You can reach me via email, or connect with me on LinkedIn. I look forward to hearing from you and discussing potential opportunities.</p>
            </div>

            <div className="row" >

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>payalmsd@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+97 8975257709</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
    </main>
  )
}
