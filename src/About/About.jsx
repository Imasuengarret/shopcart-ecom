import React from "react";
import PageHeader from "../Component/PageHeader";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc =
  "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

function About() {
  return (
    <div>
      <PageHeader title={`About Our Brand`} currentPage={`About`} />
      <div className="about-section style-3 padding-tb-section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-item-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpg" alt="" />
                </div>
                <div className="abs-thumb">
                <img src="/src/assets/images/about/02.jpg" alt=""  width={250}/>
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>

            {/* 2nd col */}
            <div className="col">
              <div className="about-right">
                <div className="section-header mt-32">
                  <span className="subtitle">{subTitle}</span>
                  <h3 className="title">{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul mb-5">
                    {
                      aboutList.map((list) =>(
                        <li key={list} >
                          <div className="sr-left">
                            <img src={list.imgUrl} alt="" />
                          </div>
                          <div className="sr-right">
                            <h5>{list.title}</h5>
                            <p>{list.desc}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
