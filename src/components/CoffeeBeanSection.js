import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from '../styles/CoffeeBeanSection.module.css';

const CoffeeBeanSection = ({ coffeeBeans }) => {
  const containerRef = useRef(null);
  const beanRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const beans = beanRefs.current;
    const { width: containerWidth } = container.getBoundingClientRect();
    const centerX = containerWidth / 2;

    gsap.to(beans, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      x: (index) => (centerX - beans[index].offsetLeft),
      y: "90vh",
      scale: 1.5,
      stagger: 0.1,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Text Background */}
      <div className={styles.textBg}>
        <p>
          That morning<br />coffee, brewed<br />it for ya
        </p>
      </div>
      {/* Coffee Beans */}
      {coffeeBeans.map((bean, index) => (
        <img
          key={index}
          src={bean.src}
          className={styles.coffeeBean}
          alt={`Coffee Bean ${index + 1}`}
          ref={(el) => (beanRefs.current[index] = el)}
          style={{
            position: 'absolute',
            left: bean.x,
            top: bean.y,
            width: bean.width,
            height: bean.height,
          }}
        />
      ))}
    </div>
  );
};

export default CoffeeBeanSection;
