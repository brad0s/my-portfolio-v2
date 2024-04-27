import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import heroImageDark from '../../images/top.svg';
import heroImageLight from '../../images/top-light.svg';
import { heroData } from '../../data/data';
import { useIntersectionObserver } from '../../utils/hooks';

function Hero() {
  const { header, cta } = heroData;
  const { theme } = useContext(ThemeContext);
  const [bgInit, setBgInit] = useState(false);

  // animate background image
  useEffect(() => {
    setTimeout(() => setBgInit(true), 500);
  }, []);

  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: [0.5],
  });

  return (
    <section className='Hero' id='Home'>
      <div
        className={`img-bg ${bgInit ? 'show' : ''}`}
        style={{ backgroundImage: `url(${theme === 'dark' ? heroImageDark : heroImageLight})` }}
      ></div>
      <div className='container'>
        <div className='Hero__content'>
          <h1 className='Hero__content__title'>
            {header.title}
            <span className='Hero__content__title--underline'>{header.titleAccent}</span>
            <br />
            {header.subTitle}{' '}
            <span className='Hero__content__title--accent'>{header.subTitleAccent}</span>.
          </h1>
          <div
            ref={containerRef}
            className={`slide-up-fade-in delay-animation--3000 ${isVisible ? 'run-animation' : ''}`}
          >
            <a href='#About' className='Hero__content__button'>
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
