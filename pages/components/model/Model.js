import React from 'react';
import Script from 'next/script';
import styles from './Model.module.css';

function Model() {
  return (
    <div className={styles['model-loader']}>
      <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type="module"/>
      <Script src="https://www.gstatic.com/draco/v1/decoders/draco_decoder_gltf.js" type="module"/>
      <model-viewer 
        src="./aircraft_a.glb"
        dracodecoderpath="./draco_decoder.js"
        camera-controls 
        poster="./poster.png"
        shadow-intensity="1" 
        environment-image="./hdri.jpg"
        exposure="1.12" 
        min-field-of-view="30deg"
        max-field-of-view="30deg"
        autoplay
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
      </model-viewer>
      <div className={styles["contact-box"]}>
        <h3>
          Kontakt:
        </h3>
        <div className={styles["wrapper"]}>
          <div>
            <p>
              Aleksej Domovec<br />
              Arnoldstr. 16<br />
              70378 Stuttgart<br />
            </p>
          </div>
          <div>
            <p>
              T. +4915906372543
            </p> 
            <a href='mailto:aleksej.3dweb@gmail.com' target='_blank'>
              E. aleksej.3dweb@gmail.com
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Model;