import React from "react";

const title = "Most popular Tags"

const tagsList = [
  { link: "#", text: "envato" },
  { link: "#", text: "theme forest" },
  { link: "#", text: "code canyon" },
  { link: "#", text: "videohive" },
  { link: "#", text: "audio jungle" },
  { link: "#", text: "Italian job" },
  { link: "#", text: "envato" },
  { link: "#", text: "Animation" },
  { link: "#", text: "Repository" },
];

function Tags() {
  return <div className="widget widget-tags">
    <div className="widget-header">
        <h6 className="title">{title}</h6>
    </div>
    <ul className="widget-wrapper">
        {
            tagsList.map((val) => (
                <li key={val}><a href={val.link}>{val.text}</a></li>
            ))
        }
    </ul>
  </div>;
}

export default Tags;
