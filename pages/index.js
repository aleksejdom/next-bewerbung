import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { BounceLoader } from 'react-spinners';


import Head from 'next/head';
import Model from './components/model/Model';
import styles from '../styles/Home.module.css';
import BackgroundVideo from './components/video/BackgroundVideo';
import Anschreiben from './components/anschreiben/Anschreiben';
import { createClient } from 'contentful';


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

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  const res = await client.getEntries({ content_type: 'home'}) 
  
  return {
    props: {
      home: res.items[0].fields,
    },
    revalidate:1
  }
}


export default function Home({home}) {
  
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
        <Anschreiben home={home} />
        <div className={styles["referenzen-box"]}>
          <h3>Konzeption - Design - 3D - Programmierung</h3>
          <p>
            Mit über 9 Jahren Erfahrung im Cockpit der digitalen Produktion, habe ich viele aufregende Flüge durch das Universum der Kreativität unternommen. Ich lade Sie ein, an Bord zu kommen und meine Referenzen zu entdecken, die die Reise meiner Karriere aufzeigen.
          </p>
          <LazyLoadComponent
            title="3D Modellierung und Rendering"
            descr="Dieses Projekt stellte mich vor die knifflige Aufgabe, einen Greifarm, eingefangen in der Zweidimensionalität der Fotografie, ins dreidimensionale Universum zu transportieren. Ich merkte schnell, in der Welt der 3D-Visualisierung geht es nicht nur darum, 'zu greifen', sondern viel mehr darum, zu 'begreifen'. Und wenn ich das mal so salopp formulieren darf - das war eine 'greifende' Erfahrung!"
            imageA={<img src="./assets/images/referenzen/ref_01_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_01_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_01_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung und Rendering"
            descr="Die Mission war klar: Mit nur alten Fotos als Referenz sollten neue, lebendige Produktbilder für einen Online-Shop erblühen. Wie ein digitaler Pygmalion formte ich die Modelle und gab ihnen durchs Rendern ein neues Gesicht. Letztendlich entstand eine virtuelle Einkaufswelt, die so real war, dass man fast das Gefühl hatte, sie anfassen zu können. Und um es mal humorvoll auszudrücken - die Produkte waren 'bildschön'!"
            imageA={<img src="./assets/images/referenzen/ref_02_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_02_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_02_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Kreativ Konzeption"
            descr="Stellen Sie sich vor, Sie betreiben einen Online-Shop, der so technologisch fortgeschritten ist, dass er Lieferungen nicht nur an jeden Ort auf der Erde, sondern sogar darüber hinaus ermöglicht - Willkommen im interstellaren E-Commerce! Meine Mission? Nicht weniger als die Konzeption und Gestaltung passender Bildmotive."
            imageA={<img src="./assets/images/referenzen/ref_03_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_03_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_03_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung, Programmierung"
            descr="Mit einem Augenzwinkern und moderner AR-Technologie habe ich die entfernten Erinnerungen an mein altes Kindheitshaus, das heute hinter Kilometern und verblassten Wegen verborgen liegt, zum Leben erweckt. Jetzt kann jeder mit nur einem Klick eine Zeitreise unternehmen, direkt ins Herz meiner Vergangenheit, ohne die Gefahr, einem T-Rex zum Opfer zu fallen!"
            imageA={<img src="./assets/images/referenzen/ref_04_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_04_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_04_03.jpg" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="3D Modellierung, Animation"
            descr="In meinem neuesten Projekt wurde ich mit dem Auftrag betraut, ein 3D-Eichhörnchen zu gestalten. Während der Arbeit, und nach einigen haarlosen und frontalen Entwürfen, stellte ich fest, dass unsere kleinen Buschschwanz-Freunde mehr Ähnlichkeiten mit Mäusen aufweisen, als man denkt. Scheinbar ist der Unterschied zwischen 'Nussjäger' und 'Käseliebhaber' nur eine Frage der Frisur!"
            imageA={<img src="./assets/images/referenzen/ref_05_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_05_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_05_03.png" alt="Bild C" />}
          />
         
          <LazyLoadComponent
            title="Konzeption, UX Design"
            descr="Für mein neuestes Projekt galt es, das Konzept und Design für einen Online-Shop zu gestalten, wobei die Produktwelt, Zielgruppen und Benutzerfreundlichkeit den Kern bildeten. Es war wie das Zusammensetzen eines Puzzles, nur dass statt eines einzelnen Bildes eine ganze Einkaufswelt entstand."
            imageA={<img src="./assets/images/referenzen/ref_08_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_08_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_08_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Konzeption, Programmierung, Animation"
            descr="In einer Mission für Knauf, verwandelte ich die alltägliche Hypebox in ein Fenster zu einer unbekannten Dimension - der Welt der Schaumplatten. Durch meine programmierte Anwendung, die auf einer Messe glänzte, wurden Besucher auf eine interaktive Reise eingeladen, die sie das Lebendige im scheinbar Inertem erkennen ließ."
            imageA={<img src="./assets/images/referenzen/ref_09_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_09_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_09_03.jpg" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Konzeption, Programmierung, Animation"
            descr="Im Auftrag von Renolit verwandelte ich die bunte Palette ihrer Produkte in eine interaktive Erzählung. Mit fließenden Animationen und einem Auge für Nutzerfreundlichkeit webte ich eine digitale Bühne, auf der jedes Produkt seinen großen Auftritt hatte. Das Resultat war ein fesselndes Ballett von Pixeln und Praxis, das auf der Messe die Blicke auf sich zog wie ein Leuchtturm in der Nacht."
            imageA={<img src="./assets/images/referenzen/ref_10_01.jpg" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_10_02.jpg" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_10_03.jpg" alt="Bild C" />}
          />
         
          <LazyLoadComponent
            title="Programmierung"
            descr="Aufgepasst, hier kommt der Relaunch der Anwaltskanzlei! Ich habe Paragrafen zum Tanzen gebracht und Gesetzestexte zum Singen - all das im Rhythmus der Animation. Mit 'Klarheit im Recht' als Leitmotiv machten wir die kompliziertesten Rechtssprachen zu einem flotten Walzer, der selbst den stärksten Juristen zum Schmunzeln brachte!"
            imageA={<img src="./assets/images/referenzen/ref_13_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_13_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_13_03.png" alt="Bild C" />}
          />
          <LazyLoadComponent
            title="Logoentwicklung, Etiketten"
            descr="Mit Stolz und feiner Hand habe ich die Logoentwicklung und Etiketten für Kaffee Rio in Remseck Stuttgart entworfen, ein visuelles Echo des pulsierenden brasilianischen Lebens. In jeder Linie und jedem Detail spüre ich das hausgemachte Flair, das Aroma, das Herzstück Brasiliens, das ich kunstvoll zum Leben erweckt habe."
            imageA={<img src="./assets/images/referenzen/ref_14_01.png" alt="Bild A" />}
            imageB={<img src="./assets/images/referenzen/ref_14_02.png" alt="Bild B" />}
            imageC={<img src="./assets/images/referenzen/ref_14_03.png" alt="Bild C" />}
          />
          {/* <a href="https://aleksej-dom.de/referenzen/" target="_blank" className={styles['cta-link']}>Weitere Referenzen finden Sie hier</a> */}
        </div>
        <div className={styles['ansprache']}>
          <h3>...Anflug auf die Position des Art Directors, bitte um Landeerlaubnis.</h3>
          <p>Während wir virtuell die Lüfte durchquert und dabei das Echo der Turbinen genossen haben, hoffe ich, dass Sie gut unterhalten wurden und einen detaillierten Einblick in die Flugrouten meiner Projekte und Kenntnisse erhalten haben. Mit Vorfreude auf die mögliche Landung in Ihrem Team, schwebt mein Pilotenherz in der Hoffnung, bald von Ihnen zu hören.</p>
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