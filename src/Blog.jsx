import React from "react";
import PageHeader from "./Component/PageHeader";

import blogList from '../src/utilis/blogdata'
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <PageHeader title={`Blog Page`} currentPage={`Blog`} />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {
                blogList.map((blogs)=>(
                  <div key={blogs} className="col">
                    <div className="post-item">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <Link to={`/blog/${blogs.id}`}><img src={blogs.imgUrl} alt="" /></Link>
                        </div>
                        <div className="post-content">
                          <Link to={`/blog/${blogs.id}`}><h4>{blogs.title}</h4></Link>
                          <div className="meta-post">
                            <ul className="lab-ul">
                                {
                                  blogs.metaList.map((val) =>(
                                    <li key={val} className={val.iconName}><i>{val.text}</i></li>
                                  ))
                                }
                            </ul>
                          </div>
                          <p>{blogs.desc}</p>
                        </div>
                        <div className="post-footer">
                          <div className="pf-left">
                            <Link to={`/blog/${blogs.id}`} className="lab-btn-text">{blogs.btnText} <i className="icofont-external-link"></i></Link>
                          </div>
                          <div className="pf-right">
                            <i className="icofont-comment"></i>
                            <span className="comment-count">{blogs.commentCount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
