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
          <h3>Aleksej Domovec</h3>
          <div className={styles['text-box']} >
            <p ref={addToRefs}>Sehr geehrtes Team in der Tower-Kontrolle,
              <br /><br />
              Mit großer Freude und Begeisterung möchte ich an Bord Ihres Teams kommen und meine Flugkünste als Art Director unter Beweis stellen. Als kreativer Pilot bin ich bereit, das Ruder in die Hand zu nehmen und den Himmel unserer Möglichkeiten zu durchqueren. Hier sind drei Gründe, warum ich glaube, dass ich den Kurs Ihrer Agentur erfolgreich steuern kann: 
            </p>
            <ol>
              <li ref={addToRefs}>
                Meine technische Flugausbildung umfasst umfassende Kenntnisse in der Frontend-Programmierung, im Design und in der 3D-Visualisierung. Diese Ausbildung hat mich darauf vorbereitet, digitale Projekte mit Geschick und Präzision zu leiten und vollständig umzusetzen.
              </li>
              <li ref={addToRefs}>
                Mein Augenmerk für Form, Konzeption und Ästhetik ermöglicht es mir, wie ein Adler mit scharfem Blick einzigartige und ansprechende Designs zu entwickeln, die unsere Passagiere (Kunden) fesseln werden.
              </li>
              <li ref={addToRefs}>
                Getrieben von Innovation und immer in der Luft mit den neuesten Technologien, bringe ich immer die leistungsstärksten Lösungen auf den Flugtisch. Mit einer Begeisterung für KI-Technologien, bin ich bereit, unseren Kurs zu steuern und unser Team auf die nächste Flughöhe zu bringen.
              </li>
            </ol>
            <p ref={addToRefs}>
              Derzeit navigiere ich als Digital Designer in Teilzeit bei einem eCommerce-Unternehmen, wo ich das Steuer für die Gestaltung von Online-Shops übernehme. Zusätzlich dazu bin ich seit 8 Jahren ein Freiberufler-Pilot, der kleine bis mittlere Unternehmen und Agenturen in den Bereichen Webseitenprogrammierung navigiert.  
            </p>
            <p ref={addToRefs}>
              In meiner vorherigen Rolle als Junior Art Director bei der B2B Werbeagentur RTS-Rieger Team, konnte ich meinen Horizont im Bereich des Online-Marketings erweitern und die Kunst der Kreativkonzeption meistern. Es war eine lehrreiche Reise, in der ich gelernt habe, digitale und grafische Medien zu erstellen, die die Kommunikation zwischen Marken und ihrem Publikum verändern. Meine Arbeit hat mich auch auf die belebten Flure von Messeveranstaltungen geführt, wo ich interaktive Anwendungen entwickelt habe, die die Interaktion der Nutzer steigern und gleichzeitig den Informationsfluss verbessern. Außerdem konnte ich ein tieferes Verständnis für die Nutzer-Usability erlangen und erfolgreich Animationen erstellen, die das Benutzererlebnis verbessern und den Wert der Produkte meiner Kunden hervorheben. Dieser Teil meiner Flugreise hat meine Fähigkeiten geschärft und mir die Möglichkeit gegeben, die Theorie in die Praxis umzusetzen. Mit jedem Projekt, das ich angenommen habe, konnte ich wertvolle Erfahrungen sammeln und meinen Flugplan für zukünftige Erfolge ausarbeiten.
            </p>
            <p ref={addToRefs}>
              Nun bin ich bereit, meine Flugkünste in Ihrer Agentur als Art Director Digital einzubringen und Ihr Team mit meinem Fachwissen zu unterstützen. Ich habe eine Leidenschaft für 3D-Technologie, sowohl in der Gestaltung von Grafiken als auch in der Animation. Mein umfangreiches Wissen umfasst insbesondere das Programm Blender. Diese Fähigkeiten in einer sich entwickelnden Agentur wie Ihrer zu haben, ist wie mit einem Überschalljet in den Wettbewerb zu fliegen und neue Möglichkeiten für beeindruckende und innovative Projekte zu eröffnen. 
            </p>
            <p ref={addToRefs}>
            Ich möchte den hybriden Ansatz, den ich in meiner Arbeit verfolge, beibehalten, da ich glaube, dass er sowohl für mich als auch für Ihre Agentur vorteilhaft ist.
            </p>
            <p ref={addToRefs}>
            Ich danke Ihnen für Ihre Zeit und freue mich darauf, Sie in einem persönlichen oder Online-Vorstellungsgespräch zu treffen, um unsere gemeinsame Flugroute zu besprechen. 
            </p>
            <p ref={addToRefs}>
              Mit freundlichen Grüßen,<br />
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