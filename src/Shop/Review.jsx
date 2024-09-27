import React from "react";
import { useState } from "react";
import Rating from "../Component/Rating";

const reviewTitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

function Review() {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Review
        </li>
      </ul>

      {/* desc and review content */}

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((rev) => (
              <li key={rev}>
                <div className="post-thumb">
                  <img src={rev.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{rev.name}</a>
                      <p>{rev.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{rev.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* add review filed */}

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>

              <form action="" className="row">
                <div className="col-lg-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-lg-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-lg-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating </span>
                    <Rating />
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Message Here"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex non
            dignissimos commodi sunt iste voluptas impedit adipisci, excepturi
            illo repellendus, reiciendis omnis, minima aperiam natus
            voluptatibus veritatis autem porro nihil quis nesciunt incidunt?
            Numquam aspernatur modi laudantium deleniti ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex non
            dignissimos commodi sunt iste voluptas impedit adipisci, excepturi
            illo repellendus, reiciendis omnis, minima aperiam natus
            voluptatibus veritatis autem porro nihil quis nesciunt incidunt?
            Numquam aspernatur modi laudantium deleniti ducimus?
          </p>
          <div className="post-item">
            <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi!</li>
                </ul>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex non
            dignissimos commodi sunt iste voluptas impedit adipisci, excepturi
            illo repellendus, reiciendis omnis, minima aperiam natus
            voluptatibus veritatis autem porro nihil quis nesciunt incidunt?
            Numquam aspernatur modi laudantium deleniti ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex non
            dignissimos commodi sunt iste voluptas impedit adipisci, excepturi
            illo repellendus, reiciendis omnis, minima aperiam natus
            voluptatibus veritatis autem porro nihil quis nesciunt incidunt?
            Numquam aspernatur modi laudantium deleniti ducimus?
        </div>
      </div>
    </>
  );
}

export default Review;
