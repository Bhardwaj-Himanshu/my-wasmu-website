import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is WasmEdge?',
    Svg: require('@site/static/Images/logo.svg').default,
    description: (
      <>
        WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, smart contracts, and IoT devices. WasmEdge is currently a CNCF (Cloud Native Computing Foundation) Sandbox project.
      </>
    ),
  },
  {
    title: 'What is this Guide?',
    Svg: require('@site/static/Images/undraw_setup_wizard_re_nday.svg').default,
    description: (
      <>
        This book will guide the users and developers to work with WasmEdge and show the commonly use cases.
      </>
    ),
  },
  {
    title: 'Powered by People',
    Svg: require('@site/static/Images/undraw_collaborators_re_hont.svg').default,
    description: (
      <>
        WasmEdge is an open source project made with ♥ and efforts of many.
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
