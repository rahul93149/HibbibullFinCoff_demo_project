import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/CoffeeMachine.module.css';

gsap.registerPlugin(ScrollTrigger);

const CoffeeMachine = () => {
  const filterRef = useRef(null);
  const espressoRef = useRef(null);
  const cupRef = useRef(null); // Ref for the cup image

  useEffect(() => {
    const filterElement = filterRef.current;
    const cupElement = cupRef.current;

    // Animation for coffee filter
    gsap.to(filterElement, {
      y: "55vh",
      ease: "none",
      scrollTrigger: {
        trigger: filterElement,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Animation for cup image
    gsap.fromTo(cupElement, {
      scale: 0.8,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: cupElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={filterRef} className={styles.filterWrapper}>
        <img src="/images/coffee-filter.png" className={styles.filterImage} alt="Coffee Filter" />
      </div>

      <div className={styles.textBg}>
        <p>walked in dream came true for ya</p>
      </div>
      
      <div ref={espressoRef} className={styles.espressoWrapper} style={{width:"80%"}}>
        <img src="/images/espresso.png" className={styles.espressoImage} alt="Espresso" />
      </div>

      <div ref={cupRef} className={styles.cupWrapper} style={{width:"80%"}}>
        <img src="/images/cup.png" className={styles.cupImage} alt="Cup" />
      </div>

      <div className={styles.marquee}>
        <p>FRESH COFFEE · FRESH COFFEE · FRESHLY BREWED · BEST COFFEE IN TOWN · ENJOY YOUR CUP · FRESH COFFEE · FRESH COFFEE · FRESHLY BREWED · BEST COFFEE IN TOWN · ENJOY YOUR CUP · FRESH COFFEE · FRESH COFFEE · FRESHLY BREWED · BEST COFFEE IN TOWN · ENJOY YOUR CUP · FRESH COFFEE · FRESH COFFEE · FRESHLY BREWED · BEST COFFEE IN TOWN · ENJOY YOUR CUP · </p>
      </div>
    </div>
  );
};

export default CoffeeMachine;
