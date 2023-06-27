import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap'; 
import styles from './Anschreiben.module.css'; 


export default function Anschreiben({home}) {
  console.log(home)
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
          {home && 
            <h2>
              {home.headline.content?.[0]?.content?.[0]?.value ?? ""}
              <br/>
              {home.headline.content?.[1]?.content?.[0]?.value ?? ""}
            </h2>
          }
          <div className={styles['text-box']} >
            {/* <p ref={addToRefs}>Sehr geehrte Damen und Herren</p> */} 
            
            {home && home.paragraph.content.map((content, index) => {
              if (content.content.length > 2) {
                return (
                  <ul key={`ul-${index}`}>
                    {content.content.map((item, idx) => (
                      <li ref={addToRefs} key={`li-${index}-${idx}`}>{item.content[0].content[0].value}</li>
                    ))}
                  </ul>
                )
              } else {
                return <p ref={addToRefs} key={`p-${index}`}>{content.content[0].value}</p>
              }
            })}
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
                    <p className={styles['lebenslauf-name']}>Aleksej Domovec</p>
                    <img src="./assets/images/photo.png" alt="Aleksej Domovec" title="Aleksej Domovec" />
                  </div>
                  <div className={styles['lebenslauf-grid']}>
                    <div>
                      <p><span>Geburtsdatum:</span></p>
                      <p><span>Geburtsort:</span></p>
                      <p><span>Nationalität:</span></p>
                    </div>
                    <div>
                      <p>16.05.1990</p>
                      <p>Kasachstan</p>
                      <p>deutsch</p>
                    </div>
                  </div>
                  <div className={styles['lebenslauf-grid']}>
                     <div>
                        <p><span>Sprachen:</span></p>
                        <p><span>Telefon:</span></p>  
                        <p><span>E-Mail:</span></p>
                     </div>
                     <div>
                        <p>Deutsch, Russisch, Englisch</p>
                        <p>0159 06372543</p>
                        <a href="mailto:aleksej.3dweb@gmail.com" target='_blank'>aleksej.3dweb@gmail.com</a>
                     </div>
                  </div>
                </div>
                <div className={styles['lebenslauf-zahlen']}> 
                  <div className={styles['lebenslauf-text-box-headline']}>
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

                  <div className={styles['lebenslauf-text-box-headline']} >
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

                  <div className={styles['lebenslauf-text-box-headline']}  >
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
            {!isLebenslauf ? 'Lebenslauf aufklappen' : 'Lebenslauf zuklappen'}
          </button>
        </div>
      </div>
    )
} 