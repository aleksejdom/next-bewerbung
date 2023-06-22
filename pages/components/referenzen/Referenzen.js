import styles from './Referenzen.module.css';

export default function Referenzen({ title, descr, imageA, imageB, imageC }) {
    return ( 
      <div className={styles['referenz']}> 
        <div>
          <div className={styles['info']}>
            <h3>{title}</h3>
            <p>{descr}</p>
          </div>
           {imageA} 
        </div>
        <div>{imageB}</div>
        <div>{imageC}</div>
      </div>
    )
}