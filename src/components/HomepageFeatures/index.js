import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.css";
import ghostImgSrc from "@site/static/img/ghost.png";
import bubbleImgSrc from "@site/static/img/question_bubble.png";
import toolsImgSrc from "@site/static/img/tools.png";

const featureList = [
  {
    title: "DEVELOPERS",
    imageSrc: toolsImgSrc,
    link: "/developer-docs/overview",
    imageWrapperStyle: styles.toolsImgWrapper,
    description: <>Build with GHO</>,
  },
  {
    title: "WHAT IS GHO?",
    link: "/concepts/overview",
    imageSrc: ghostImgSrc,
    imageWrapperStyle: styles.ghostImgWrapper,
    description: <>Learn the basics</>,
  },
  {
    title: "FAQ",
    link: "/concepts/faq",
    imageSrc: bubbleImgSrc,
    imageWrapperStyle: styles.bubbleImgWrapper,
    description: <>Get answers</>,
  },
];

function Feature({
  imageSrc,
  title,
  description,
  imageWrapperStyle,
  link,
  navigate,
}) {
  return (
    <div
      className={clsx("card", styles.cardWrapper)}
      onClick={() => navigate.push(link)}
    >
      <div className="card__header">
        <span className={clsx("badge", styles.cardBadge)}>{title}</span>
      </div>
      <div className={clsx(imageWrapperStyle, styles.cardImageWrapper)}>
        <img src={imageSrc} />
      </div>
      <div className={clsx("card__footer", styles.cardFooter)}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const navigate = useHistory();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featuresContainer)}>
          {featureList.map((props) => (
            <Feature key={props.title} {...props} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
