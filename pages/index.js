import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { BounceLoader } from 'react-spinners';


import Head from 'next/head';
import Model from './components/model/Model';
import styles from '../styles/Home.module.css';
import BackgroundVideo from './components/video/BackgroundVideo';
import Anschreiben from './components/anschreiben/Anschreiben';

const Referenzen = React.lazy(() => 
  new Promise(resolve => {
    setTimeout(() => resolve(import('./components/referenzen/Referenzen')), 400);
  })
);

function LazyLoadComponent(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><BounceLoader /></div>}>
          <Referenzen {...props} />
        </Suspense>
      )}
    </div>
  );
}


export default function Home() {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div>
      <Head>
        <title>Bewerbung als Art Director Digital</title>
        <meta name="description" content="Aleksej Domovec" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <BackgroundVideo />
        <Anschreiben />
        <div className={styles["referenzen-box"]}>
          <h3>Referenzen</h3>
          <p>
            Entdecken Sie meine vielfältigen Referenzen aus den Bereichen Konzeption, Grafikerstellung, UX Design, 3D Visualisierung und Programmierung. Diese Arbeiten spiegeln meine vielseitige Expertise und meine Leidenschaft für kreatives und technisches Design wider
          </p>
          <LazyLoadComponent
            title="3D Modellierung und Rendering"
            descr="Produktvisualisierung"
            imageA={<img src="./assets/images/referenzen/ref_01_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_01_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_01_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung und Rendering"
            descr="Produktbilder"
            imageA={<img src="./assets/images/referenzen/ref_02_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_02_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_02_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Kreativ Konzeption"
            descr="Bildwelt"
            imageA={<img src="./assets/images/referenzen/ref_03_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_03_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_03_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung, Programmierung"
            descr="AR Anwendung"
            imageA={<img src="./assets/images/referenzen/ref_04_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_04_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_04_03.jpg" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung, Animation"
            descr="3D Charakter"
            imageA={<img src="./assets/images/referenzen/ref_05_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_05_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_05_03.png" alt="Bild C" />}
          />
          {/* <LazyLoadComponent
            title="Konzeption, UX Design"
            descr="Online Shop"
            imageA={<img src="./assets/images/referenzen/ref_07_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_07_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_07_03.png" alt="Bild C" />}
          /> */}
          <LazyLoadComponent
            title="Konzeption, UX Design"
            descr="Online Shop"
            imageA={<img src="./assets/images/referenzen/ref_08_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_08_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_08_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Konzeption, Programmierung, Animation"
            descr="Hypebox für Messe"
            imageA={<img src="./assets/images/referenzen/ref_09_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_09_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_09_03.jpg" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Konzeption, Programmierung, Animation"
            descr="Hypebox für Messe"
            imageA={<img src="./assets/images/referenzen/ref_10_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_10_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_10_03.jpg" alt="Bild C" />}
          />
          {/* <LazyLoadComponent
            title="Konzeption, 3D Modellierung, Programmierung"
            descr="Interaktiver Messestand mit Unity"
            imageA={<img src="./assets/images/referenzen/ref_11_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_11_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_11_03.jpg" alt="Bild C" />}
          /> */}
         {/*  <LazyLoadComponent
            title="Programmierung"
            descr="Journal Website"
            imageA={<img src="./assets/images/referenzen/ref_12_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_12_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_12_03.png" alt="Bild C" />}
          /> */}
          <LazyLoadComponent
            title="Programmierung"
            descr="Kanzlei Website"
            imageA={<img src="./assets/images/referenzen/ref_13_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_13_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_13_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Design"
            descr="Logoentwicklung, Etiketten"
            imageA={<img src="./assets/images/referenzen/ref_14_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_14_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_14_03.png" alt="Bild C" />}
          />
          {/* <a href="https://aleksej-dom.de/referenzen/" target="_blank" className={styles['cta-link']}>Weitere Referenzen finden Sie hier</a> */}
        </div> 
        <Model />
      </main>

      <div className={styles['scrollToTop']} onClick={handleScrollToTop} >
      <img src="./assets/images/glasses.svg" alt="glasses" title="3d glasses"/>
      </div>

      <footer className={styles['footer']}>
        Copyright © Aleksej Domovec - 2023
      </footer>
    </div>
  );
}