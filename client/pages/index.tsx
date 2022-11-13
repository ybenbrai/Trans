import Head from 'next/head'
import App from './components/App'
import styles from '../styles/Home.module.css'

export default function Home() {
  const colors = [
    "0466c8",
    "0353a4",
    "023e7d",
    "002855",
    "001845",
    "001233",
    "38b000",
    "70e000",
    "9ef01a",
    "ccff33",
  ];
    // random number generator
    const randomNumber = (num : any) => {
      return Math.floor(Math.random() * num);
    };
  const backgroundAnimation = () => {
    // get elemnt by class name
    const container = document.querySelector('.bg');
    console.log("voilaa :",bg);
    for (let i = 0; i < 20; i++) {
      // span creation and putting a custom height, width, left, animation duration, rotate and animation direction for earch span
      const bgSpan = document.createElement("span");
      bgSpan.style.height = `${randomNumber(20) + 1}%`;
      bgSpan.style.width = `${randomNumber(100) + 30}%`;
      if (i % 2 === 0) {
        bgSpan.style.rotate = `${-45}deg`;
        bgSpan.style.left = `${-30 + randomNumber(100)}%`;
      } else {
        bgSpan.style.rotate = `${45}deg`;
        bgSpan.style.left = `${-70 + randomNumber(100)}%`;
      }
      bgSpan.style.animationDuration = `${20 + randomNumber(30)}s`;
      bgSpan.style.backgroundColor = `#${colors[randomNumber(10)]}`;
      if (i % 4 === 0) {
        bgSpan.style.animationDirection = "reverse";
      } else {
        bgSpan.style.animationDirection = "normal";
      }
      // appending the span to the bg
      bg.appendChild(bgSpan);
    }
  };

  
  backgroundAnimation();
  
  return (
    <div className={styles.container}>
      <div className="bg"></div>
      <App />
      <Head>
        <title>Transendance</title>
        <meta name="description" content="Transendance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



     
    </div>
  )
}
