import React from "react";

// NOTE: This component might be usable for hosting project demos via iframe if project is hosted on keatdev.com
export default function ProjectFrame({ site, ...props }) {
  return (
    <iframe
      title="project-frame"
      src={site}
      frameborder="0"
      width={"50%"}
      height={"50%"}
    ></iframe>
  );
}
