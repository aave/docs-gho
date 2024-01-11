import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.css";
import ghostImgSrc from "@site/static/img/ghost.png";
import bubbleImgSrc from "@site/static/img/question_bubble.png";
import toolsImgSrc from "@site/static/img/tools.png";

const hackathonDashboardList = [
  {
    title: "PAYMENTS",
    imageSrc: toolsImgSrc,
    link: "/developer-docs/payments/",
    imageWrapperStyle: styles.toolsImgWrapper,
    description: <>Payments</>,
  },
  {
    title: "VAULTS",
    link: "/developer-docs/vaults/",
    imageSrc: ghostImgSrc,
    imageWrapperStyle: styles.ghostImgWrapper,
    description: <>Vaults</>,
  },
  {
    title: "FACILITATORS",
    link: "/developer-docs/facilitators/",
    imageSrc: bubbleImgSrc,
    imageWrapperStyle: styles.bubbleImgWrapper,
    description: <>Facilitators</>,
  },
  {
    title: "TESTING GUIDE",
    imageSrc: toolsImgSrc,
    link: "/developer-docs/testing-guide/",
    imageWrapperStyle: styles.toolsImgWrapper,
    description: <>Testing Guide</>,
  },
];

function Feature({ title, link, navigate }) {
  return (
    <div
      className={clsx("card", styles.cardWrapper)}
      onClick={() => navigate.push(link)}
    >
      <div className={clsx(styles.cardBase)}>
        <span className={clsx("badge", styles.cardBadge)}>{title}</span>
      </div>
    </div>
  );
}

export default function HackathonFeatures() {
  const navigate = useHistory();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featuresContainer)}>
          {hackathonDashboardList.map((props) => (
            <Feature key={props.title} {...props} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
