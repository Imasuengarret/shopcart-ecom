import React from "react";
import { useState } from "react";
import blogList from "../src/utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "./Component/PageHeader";
import PopularPost from "./Shop/PopularPost";
import Tags from "./Shop/Tags";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

function SingleBlog() {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((e) => e.id === Number(id));
  // console.log(result)
  return (
    <div>
      <PageHeader
        title={"Single Blog Page"}
        currentPage={"Blog / Blog Details"}
      />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val) => (
                                      <li key={val} className={val.iconName}>
                                        <i>{val.text}</i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  {item.desc} {item.desc} {item.desc}
                                  {item.desc} {item.desc}
                                </p>
                                <blockquote>
                                  <p>
                                    {item.desc} {item.desc}
                                  </p>
                                  <cite>
                                    <a href="#">...Imasuen Garret</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  {item.desc} {item.desc} {item.desc}
                                  {item.desc} {item.desc}
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  {item.desc} {item.desc} {item.desc}
                                  {item.desc} {item.desc}
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=1_B_rYLKieU"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  {" "}
                                  {item.desc} {item.desc} {item.desc}
                                  {item.desc} {item.desc}
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                        socialList.map((val) => (
                                            <li key={val}>
                                                <a href="#" className={val.className}>
                                                    <i className={val.iconName}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev"><i className="icofont-double-left">Previous Blog</i></a>
                            <a href="#" className="title">Evaluate Parallel via Technival Sound Models Authorisation</a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev"><i className="icofont-double-right">Previous Blog</i></a>
                            <a href="#" className="title">Evaluate Parallel via Technival Sound Models Authorisation</a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
