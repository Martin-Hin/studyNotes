import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Motivation & Aspirations',
    Svg: require('@site/static/img/motivation2.svg').default,
    description: (
      <>
        I am an aspiring Full-Stack developer with a keen eye on UI/UX design. I am motivated to study and learn the ins and outs of web development and it&apos;s environment. I am also interested in creating chatbots and quizbots that utilize Artificial Intelligence and Machine Learning to optimize the interface and experience of the user.   
      </>
    ),
  },
  {
    title: 'What you will find on this website',
    Svg: require('@site/static/img/what_you_find_in_site.svg').default,
    description: (
      <>
        This website is dedicated to my notes that I take while I study. The main reason is to have easy access from anywhere using any device including on mobile devices. It also helps me to keep up to date with the practice and process of writing code and deploying it.
      </>
    ),
  },
  {
    title: 'My Blogs',
    Svg: require('@site/static/img/about_blogs.svg').default,
    description: (
      <>
        My blogs are about tech topics that I find interesting, and worth sharing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


