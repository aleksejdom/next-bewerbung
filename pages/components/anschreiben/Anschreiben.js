import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Anschreiben.module.css';

export default function Anschreiben() {
  const [isLebenslauf, setLebenslauf] = useState(false);
  const scrollToRef = useRef(null); // Erstellen Sie eine neue Referenz für das "video"-Element

  const refs = useRef([]);
  refs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { autoAlpha: 0.2, y: 0 },
              { duration: 1, autoAlpha: 1, y: 0 }
            );
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    refs.current.forEach((el) => observer.observe(el));

    return () => {
      refs.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const handleLebenslauf = () => {
    setLebenslauf(!isLebenslauf);
    // Scrollen Sie zur "video"-Sektion, wenn diese existiert
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

    return ( 
      <div ref={scrollToRef}>
        {!isLebenslauf && 
        <div className={styles['anschreiben']}>
          <h2>Bewerbung als<br /> Art Director Digital</h2> 
          <div className={styles['text-box']} >
            <p ref={addToRefs}>Sehr geehrte Damen und Herren,
              <br /><br />
              ich möchte Ihr großartiges Team verstärken und es noch herausragender machen. 
              Im Verlauf meiner Karriere als Junior Art Director konnte ich bereits ein reichhaltiges Portfolio an Erfahrungen 
              in kreativer Gestaltung, Konzeption und Online-Marketing aufbauen. Lassen Sie mich Ihnen drei gute Gründe 
              nennen, weshalb Sie von meiner Präsenz als Art Director profitieren können: 
            </p>
            <ol>
              <li ref={addToRefs}>
                Ich besitze umfassende Kenntnisse in der Frontend-Programmierung, im Design und in der 3D-Visualisierung. Mit meinen Fähigkeiten bin ich in der Lage, digitale Projekte eigenständig und ganzheitlich umzusetzen.
              </li>
              <li ref={addToRefs}>
                Mein geschultes Auge für Form, Konzeption und Ästhetik ermöglicht es mir, einzigartige und ansprechende Designs zu entwickeln, die Kunden begeistern.
              </li>
              <li ref={addToRefs}>
                Innovationsgetrieben und auf dem neuesten Stand der Technologie: Ich halte mich stets über die neuesten Trends auf dem Laufenden und kann mit innovativen und performanten Lösungen glänzen. Dabei integriere ich gerne moderne KI-Technologien um meinen Workflow auf das nächste Level zu bringen. 
              </li>
            </ol>
            <p ref={addToRefs}>
              Derzeit arbeite ich in Teilzeit als Digital Designer bei einem eCommerce-Unternehmen, wo ich für die Konzeption und 
              Gestaltung von Online-Shops verantwortlich bin. Zusätzlich dazu bin ich seit 8 Jahren als Freelancer tätig und betreue 
              klein- bis mittelständische Unternehmen und Agenturen in den Bereich Webseitenprogrammierung und Grafik.
            </p>
            <p ref={addToRefs}>
              Während meiner vorausgegangenen Anstellung als Junior Art Director bei der B2B-Werbeagentur RTS-Rieger Team konnte ich kostbare 
              Erfahrungen in Kreativkonzeption und der Erstellung digitaler und 
              grafischer Medien sammeln. In diesem Rahmen entwickelte ich unter anderem interaktive Anwendungen für Messen und schuf Animationskonzepte mit besonderem Fokus auf Nutzerfreundlichkeit und -
              erlebnis. 
            </p>
            <p ref={addToRefs}>
              Mit Leidenschaft nutze ich die 3D-Technologie zur Erstellung von 
              Grafiken und Animationen. Mein fundiertes Wissen umfasst insbesondere das Programm Blender, welches mir neue Horizonte eröffnet. 
              Die Vorhandensein solch herausragender Fähigkeiten in Ihrem Unternehmen schafft einen unschätzbaren Wettbewerbsvorteil und eröffnet völlig neue Möglichkeiten für beeindruckende und innovative Projekte.
            </p>
            <p ref={addToRefs}>
              Anhand meiner Referenzen können Sie zweifellos erkennen, dass ich auf hybride Art und Weise arbeite, was mich zu einem Generalisten von außergewöhnlichem Kaliber macht. Ich bin überzeugt, dass diese Eigenschaft in der Position als Art Director von unschätzbarem Vorteil ist, da sie es mir ermöglicht, mit anderen Abteilungen auf Augenhöhe zu kooperieren.
            </p>
            <p ref={addToRefs}>
              Ich hoffe, mit meinen überzeugenden Argumenten Ihr Interesse 
              geweckt zu haben, und stehe Ihnen jederzeit für weitere Auskünfte zur Verfügung. 
              Es wäre mir eine Freude, mich persönlich bei Ihnen vorzustellen und in einem angenehmen Gespräch 
              die Möglichkeit zu haben, Sie und Ihr Team näher kennenzulernen. 
            </p>
            <p ref={addToRefs}> 
              Mit besten Grüßen,<br />
              Aleksej Domovec
            </p>
          </div>
        </div> 
        }

          {isLebenslauf && 
        <div className={styles['lebenslauf-box']}>
            <div className={styles['lebenslauf-text']}>
              <h1>Lebenslauf</h1>
              <div className={styles['lebenslauf-data']}> 
                <div className={styles['lebenslauf-person']}>
                  <div>
                    <p>Aleksej Domovec</p>
                    <img src="./assets/images/photo.png" alt="Aleksej Domovec" title="Aleksej Domovec" />
                  </div>
                  <div>
                    <p>
                    <span>Geburtsdatum:</span> 16.05.1990<br />
                    <span>Geburtsort:</span> Kasachstan<br />
                    <span>Staatsangehörigkeit:</span> deutsch
                    </p>
                  </div>
                  <div>
                    <p>
                    <span>Sprachen:</span> Deutsch, Russisch, Englisch<br />
                    <span>Telefon:</span> 0159 06372543<br />
                    <span>E-Mail:</span> <a href="mailto:aleksej.3dweb@gmail.com" target='_blank'>aleksej.3dweb@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className={styles['lebenslauf-zahlen']}> 
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p><strong>Datum</strong></p> 
                    </div>
                    <div>
                      <p><strong>Berufserfahrung</strong></p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>04/2022 - heute</p>
                    </div>
                    <div>
                      <p>Digital Designer <br />Experts in Motion AG</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>11/2017 - 03/2022</p>
                    </div>
                    <div>
                      <p>Junior Art-Director / Digital<br />RTS Rieger Team Werbeagentur GmbH</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>01/2015 - heute</p>
                    </div>
                    <div>
                      <p>Webentwickler und Grafikdesigner<br />Freelancer</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>12/2015 - 08/2017</p>
                    </div>
                    <div>
                      <p>Fachinformatiker (Anwendungsentwicklung)<br />T4Media GmbH</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>07/2014 - 12/2015</p>
                    </div>
                    <div>
                      <p>Junior Art-Director <br />Emotion and Cue - Werbeagentur</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>10/2011 - 08/2012</p>
                    </div>
                    <div>
                      <p>IT-Soldat<br />Bundeswehr (Feldjäger Btl. 451)</p>
                    </div>
                  </div>

                  <div className={styles['lebenslauf-text-box']} style={{ marginTop : '3rem'}}>
                    <div>
                      <p><strong>Datum</strong></p> 
                    </div>
                    <div>
                      <p><strong>Qualifikationen</strong></p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>12/2015 - 08/2017</p>
                    </div>
                    <div>
                      <p>Fachinformatiker AE<br />T4Media GmbH</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>10/2013 - 07/2014</p>
                    </div>
                    <div>
                      <p>Fachhochschulreife<br />Kolping-Bildungswerk Stuttgart</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>09/2008 - 07/2011</p>
                    </div>
                    <div>
                      <p>Staatl. gepr. Grafikdesigner<br />Johaness-Gutenberg Schule Stuttgart</p>
                    </div>
                  </div>

                  <div className={styles['lebenslauf-text-box']} style={{ marginTop : '3rem'}}>
                    <div>  
                    </div>
                    <div>
                      <p><strong>Skills</strong></p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>Kreation</p>
                    </div>
                    <div>
                      <ul>
                        <li>Grafikdesign</li>
                        <li>3D Visualisierung</li>
                        <li>Animation (2D, 3D, Javascript)</li>
                        <li>UX Design (Screendesign)</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>Entwicklung</p>
                    </div>
                    <div>
                      <ul>
                        <li>Frontend Entwicklung (React)</li>
                        <li>WordPress Themes Entwicklung (ACF Blocks)</li> 
                      </ul>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-text-box']}>
                    <div>
                      <p>Marketing</p>
                    </div>
                    <div>
                      <ul>
                        <li>Advertising und Tracking</li>
                        <li>Online Marketing (SEO, SEA)</li> 
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          }
        <div className={styles['cta-lebenslauf-wrapper']}>
          <button className={styles['cta-lebenslauf']} onClick={handleLebenslauf}>
            {!isLebenslauf ? 'Lebenslauf' : 'Anschreiben'}
          </button>
        </div>
      </div>
    )
}