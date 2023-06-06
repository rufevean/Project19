import React, { useState, useEffect } from 'react';
import "../styles/preloader.css";
import marie0 from '../assets/images/marie0.png';
import marie1 from '../assets/images/marie1.png';
import marie2 from '../assets/images/marie2.png';
import marie3 from '../assets/images/marie3.png';
import marie4 from '../assets/images/marie4.png';
import marie5 from '../assets/images/marie5.png';
import marie6 from '../assets/images/marie6.png';
import marie7 from '../assets/images/marie7.png';
import marie8 from '../assets/images/marie8.png';
import marie9 from '../assets/images/marie9.png';

const images = [
  marie0,
  marie1,
  marie2,
  marie3,
  marie4,
  marie5,
  marie6,
  marie7,
  marie8,
  marie9,
];

export default function Preloader() {
  const [imageIndex, setImageIndex] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 50);

    const numberInterval = setInterval(() => {
      if (number < 18) {
        setNumber((prevNumber) => prevNumber + 1);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      clearInterval(numberInterval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(numberInterval);
    };
  }, []);

  return (
    <div className="Preloader">
      <div className="Preloader-Content">MONTH {number}</div>
      <img src={images[imageIndex]} alt="Avengers Animation" />
    </div>
  );
}
