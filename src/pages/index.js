import CoffeeBeanSection from '../components/CoffeeBeanSection';
import CoffeeMachine from '../components/CoffeeMachine'; // Import the new component
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const coffeeBeans = [
  { src: "/images/coffee-bean-single.jpg", x: "10%", y: "20%", width: "80px", height: "80px" },
  { src: "/images/coffee-bean-single.jpg", x: "30%", y: "40%", width: "120px", height: "120px" },
  { src: "/images/coffee-bean-single.jpg", x: "50%", y: "10%", width: "90px", height: "90px" },
  { src: "/images/coffee-bean-single.jpg", x: "70%", y: "50%", width: "70px", height: "70px" },
  { src: "/images/coffee-bean-single.jpg", x: "20%", y: "70%", width: "95px", height: "95px" },
  { src: "/images/coffee-bean-single.jpg", x: "80%", y: "80%", width: "105px", height: "105px" },
  { src: "/images/coffee-bean-single.jpg", x: "40%", y: "30%", width: "286px", height: "286px" },
];

const Page = () => (
  <>
    <CoffeeBeanSection coffeeBeans={coffeeBeans} />
    <CoffeeMachine />
  </>
);

export default Page;
