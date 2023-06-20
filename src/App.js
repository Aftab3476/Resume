import "./App.css";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlinePaperClip } from 'react-icons/ai'
function App() {
  const skillData = ['ReactJS', 'Redux', 'Rest API', 'JSON', 'JavaScript', 'jQuery', 'Bootstrap4', 'HTML5', 'CSS3', 'Material UI']
  return (
    <>
      <div className="container">
        <div className="row justify-content-center" style={{ paddingTop: 100 }}>
          <div className="col-lg-6 col-md-6 col-12 ">
            <div className="data">
              <h1 className="main_font">Md Aftab Alam</h1>
              <h4 className="second_main">Front End Developer(Reactjs)</h4>
              <h4 className="third_main">I specialize in utilizing Front End Developing to </h4>
              <h4 className="third_main">build modern web applications.</h4>
              <ul className="navbar-nav" style={{ paddingTop: 50 }}>
                <li className="nav-item py-2">
                  <Link to="summary" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">ABOUT</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item py-2">
                  <Link to="workexp" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">WORK EXPERIENCE</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item py-2">
                  <Link to="project" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">PROJECTS</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item py-2">
                  <Link to="education" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">EDUCATION</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item py-2">
                  <Link to="skill" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">SKILLS</span>
                    </div>
                  </Link>
                </li>

                <li className="nav-item py-2">
                  <Link to="language" className="nav_link" spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="d-flex">
                      <span className="nav_icon"></span>
                      <span className="item_size">LANGUAGE</span>
                    </div>
                  </Link>
                </li>



              </ul>
              <div className="d-flex py-5">
                <div className="pr-4">
                  <a href="https://github.com/Aftab3476" className="nav_link" target="_blank">
                    <AiFillGithub className="react_icon" />
                  </a>
                </div>
                <div className="pr-4">
                  <a href="https://www.linkedin.com/in/md-aftab-alam-459184231/" target="_blank" className="nav_link">
                    <AiFillLinkedin className="react_icon" />
                  </a>
                </div>
                <div className="pr-4">
                  <a href="https://www.instagram.com/aftab_shekh.official/" target="_blank" className="nav_link">
                    <AiOutlineInstagram className="react_icon" />
                  </a>
                </div>
                <div className="pr-3">
                  <a href="https://drive.google.com/file/d/1gO1I6ROpHJbkQPuQ1yNKBKz1eLXNYO39/view?usp=drive_link" target="_blank" className="nav_link">
                    <AiOutlinePaperClip className="react_icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="card card_summary p-4" id="summary">
              <h5 className="third_main">SUMMARY</h5>
              <p className="paragraph py-0 my-0">Software Engineer possessing Comprehensive 2 years of experience as IT Professional.</p>
              <p className="paragraph py-0 my-0">1+ years of experience as React Js Developer</p>
              <p className="paragraph py-0 my-0">Hands on experience developing web-based applications with React Js framework & Redux library.</p>
            </div>

            <div className="" id="workexp">
              <h5 className="third_main pl-4 pt-5">WORK EXPERIENCE</h5>
              <div className="card card_summary p-4 mt-3">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <p className="paragraph1">March 2022 - PRESENT</p>
                  </div>
                  <div className="col-8">
                    <h5 className="third_main">Front End Developer (React js)</h5>
                    <h6 className="company">JAGRITI DIGIEDUTECH PRIVATE LIMITED</h6>
                    <p className="paragraph">Created & Implemented RESTful API for Blockchain Exchange services</p>
                    <p className="paragraph">Creating detailed functional specifications, work-flow diagrams & relevant documentation.</p>
                    <p className="paragraph">Planning, Designing, Implementing and maintenance of API count & rate limit based </p>
                    <p className="paragraph">Developed a support system in React & Node Js for generating issues tickets</p>
                    <p className="paragraph">Developed Newsletter (Subscriber) Marketing Web Application in React, Node Js & MySQL</p>
                    <p className="paragraph">Developed Application, Server & Logs monitoring in React & Node Js</p>
                    {
                      skillData.map((item) => (
                        <button className="btn btn_skill m-1">{item}</button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5" id="project">
              <h5 className="third_main pl-4"><b>PROJECTS</b></h5>
              <div className="card card_summary p-4">
                <h5 className="third_main3">Weather Application</h5>
                <p className="paragraph py-0 my-0">Search your city weather by city name. It is a useful application for everyone, designed simple, easy to use. It is searches for your address and updates your local weather</p>
                <div className="pt-2">
                  <button className="btn btn_skill m-1">ReactJS</button>
                  <button className="btn btn_skill m-1">javaScript</button>
                  <button className="btn btn_skill m-1">Matarial UI</button>
                  <a href="https://aftabweatherapp.netlify.app" target="_blank" className="btn btn_skill m-1">Demo</a>
                </div>
              </div>

              <div className="card card_summary p-4 mt-2">
                <h5 className="third_main3">Age Calculater</h5>
                <p className="paragraph py-0 my-0">An age calculator, in the simplest words, is a tool that calculates your exact age in terms of the number of years, months and days. This tool helps you know your exact age on any given day based on the western system of age calculation, i.e. counting the years of age from one birthday to another.</p>
                <div className="pt-2">
                  <button className="btn btn_skill m-1">javaScript</button>
                  <button className="btn btn_skill m-1">HTML5</button>
                  <button className="btn btn_skill m-1">CSS3</button>
                  <button className="btn btn_skill m-1">BOOTSTRAP</button>
                  <a href="https://agecalculatorapplication.netlify.app" target="_blank" className="btn btn_skill m-1">Demo</a>
                </div>
              </div>

              <div className="card card_summary p-4 mt-2">
                <h5 className="third_main3">ToDo List Application</h5>
                <p className="paragraph py-0 my-0">To-do lists serve as a reminder for what you need to accomplish. When we check things off, it's proof that we were able to get stuff done and that makes us feel good..</p>
                <div className="pt-2">
                  <button className="btn btn_skill m-1">ReactJS</button>
                  <button className="btn btn_skill m-1">javaScript</button>
                  <button className="btn btn_skill m-1">HTML5</button>
                  <button className="btn btn_skill m-1">Matarial UI</button>
                  <a href="https://notebarapplications.netlify.app" target="_blank" className="btn btn_skill m-1">Demo</a>
                </div>
              </div>

              <div className="card card_summary p-4 mt-2">
                <h5 className="third_main3">E-Commerce (Project)</h5>
                <p className="paragraph py-0 my-0">To-do lists serve as a reminder for what you need to accomplish. When we check things off, it's proof that we were able to get stuff done and that makes us feel good..</p>
                <div className="pt-2">
                  <button className="btn btn_skill m-1">ReactJS</button>
                  <button className="btn btn_skill m-1">Rest API</button>
                  <button className="btn btn_skill m-1">javaScript</button>
                  <button className="btn btn_skill m-1">HTML5</button>
                  <button className="btn btn_skill m-1">CSS3</button>
                  <button className="btn btn_skill m-1">Bootstrap4</button>
                  <button className="btn btn_skill m-1">Matarial UI</button>
                  <a href="https://notebarapplications.netlify.app" target="_blank" className="btn btn_skill m-1">Demo</a>
                </div>
              </div>
            </div>

            <div className="pt-5" id="education">
              <h5 className="third_main pl-4"><b>EDUCATION</b></h5>
              <div className="card card_summary p-4">
                <h5 className="third_main1">Bachelor of Art (B.A)</h5>
                <p className="third_main2 py-0 my-0">IGNOU-Purnia Bihar</p>
                <p className="paragraph py-0 my-0">June 2018 to June 2021</p>
              </div>
              <div className="card card_summary p-4 mt-2">
                <h5 className="third_main1">Higher Secondary (12th Pass) in Commerce</h5>
                <p className="third_main2 py-0 my-0">BSEB-Purnia Bihar</p>
                <p className="paragraph py-0 my-0">March 2015 to Feb 2017</p>
              </div>
              <div className="card card_summary p-4 mt-2">
                <h5 className="third_main1">Secondary (10th)</h5>
                <p className="third_main2 py-0 my-0">BSEB - Purnia, Bihar (Hindi, English, Math, Science, Social Science, Urdu)</p>
                <p className="paragraph py-0 my-0">march 2014 to March 2015</p>
              </div>
            </div>

            <div className="pt-5" id="skill">
              <h5 className="third_main pl-4"><b>SKILLS</b></h5>
              <div className="card card_summary p-3 mt-3">
                <p className="third_main2 py-0 my-0"><span className="paragraph_skill">Programming Languages</span>  :- Javascript, Node Js (Server Side), Redux, Socket.io.</p>
              </div>

              <div className="card card_summary p-3 mt-2">
                <p className="third_main2 py-0 my-0"><span className="paragraph_skill">Version Controls</span>  :- Git, Github.</p>
              </div>

              <div className="card card_summary p-3 mt-2">
                <p className="third_main2 py-0 my-0"><span className="paragraph_skill">Frameworks / Library </span>  :- React Js, Redux.</p>
              </div>

              <div className="card card_summary p-3 mt-2">
                <p className="third_main2 py-0 my-0"><span className="paragraph_skill">IDE Editor </span>  :- Visual Studio Code, Sublime Text3, Notepad.</p>
              </div>
            </div>

            <div className="pt-4" id="language">
              <h5 className="third_main pl-4"><b>LANGUAGE</b></h5>
              <div className="card card_summary p-3 mt-3">
                <p className="third_main4 py-0 my-0">Hindi</p>
                <p className="paragraph py-0 my-0">Proficient</p>
              </div>

              <div className="card card_summary p-3 mt-3">
                <p className="third_main4 py-0 my-0">English</p>
                <p className="paragraph py-0 my-0">Fresher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
