import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Logo from '@site/static/img/logo.svg';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoRow}>
          <Logo className={styles.logo} role="img" aria-label="Site Logo" />
        </div>
        <div className={styles.heroCopy}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        </div>
        <div className={styles.narrativeCard}>
          <p>
            NAP 9 was an <span className={styles.accentSubtle}>operationally lightweight</span> but <span className={styles.accentSubtleAlt}>technically dense</span> approach to governing Server 1866. It was written by potekima to be very simple to interface with during operations, but very strictly defined under the hood to leave little room for arguments over language or edge-cases.
          </p>
          <p>
            It was also crafted to be <span className={styles.accentSubtleWarm}>modular and adaptable</span> to discussion. The idea was that the NAP would be proposed to the community leadership with a very abstracted but conceptually complete "For Dummies" introduction along with the philosophy driving the decisions available. This would hopefully open the floor for a diagloue about what specifically is and is not important to include in our NAP.
          </p>
          <p>
            The hosting, presentation of information, implementation of custom code and CSS, configuration of CI/CD pipelines, creation of branding, and so forth were a combined effort of potekima and her girlfriend konpy, with generous support from other GMOB leadership (and Cliff) on critique.
          </p>
          <p>
            The tagline <span className={styles.accentSubtle}>“Love Letter in Governance”</span> is no accident. There was a lot of passion about contributing something meaningful for the community, and a ton of reflection went into deciding on balanced features that would address a variety of very real concerns about having a leadership that actually works! The hope was to cultivate a system that doesn't make people feel powerless to change the server, and therefore make such participants less inclined to abandon the server as a dramatic, lawless, lost cause.
          </p>
          <p>
            The hope was that the skeleton of this document - the hosting platform, the basic flow and structure, core ideas - would remain the mostly same, but that a <span className={styles.accentSubtle}>joint impassioned collaboration</span> between members of the community who have long had issues with our NAP would <span className={styles.accentSubtle}>enthusiastically engage</span> in an active constructive dialogue about what to change now that the opportunity to do so was topical and imminent.
          </p>
          <p>
            The CI/CD pipeline was <span className={styles.accentSubtleAlt}>agile</span>, and changes could be altered, committed, and credited nearly instantly with this architecture. Active specific published changes were explicitly planned for.
          </p> 
          <p>
            Unfortunately, what little engagement was afforded to NAP 9 seemed to waver between <span className={styles.accentSubtle}>“too long, didn't read”</span> and <span className={styles.accentSubtle}>“no thanks, something else”</span> despite mitigation efforts to hopefully avoid having to discard the platform entirely.
          </p>
          <p>
            I hope that someone will actually write a NAP for 1866 instead of suggesting what it could look like if someone else would just write it for them. I hope that when they do that, they get it perfectly right the first time.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link className={clsx('button button--secondary button--lg', styles.cta)} to="/docs/index">
            NAP 9 Overview
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Platform for Our NAP 9" description="A Love Letter in Governance to the 1866 Community">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
