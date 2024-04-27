import React, { useRef, useEffect } from 'react';
import { projectsData } from '../../data/data';
import TiltController from '../../utils/tilt';
import { useIntersectionObserver } from '../../utils/hooks';

const Project = ({ project, index }) => {
  const { title, subtitle, description, tags, url, repo, image } = project;
  const projectImage = require(`../../images/${image.filename}`);
  const imageRef = useRef(null);
  const animationClassName = index % 2 === 0 ? 'slide-left' : 'slide-right';

  useEffect(() => {
    const tiltController = new TiltController(imageRef.current);

    return () => {
      tiltController.root.removeEventListener('mousemove', tiltController.handleTilt);
      tiltController.root.removeEventListener('mouseleave', tiltController.resetTilt);
    };
  }, []);

  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: [0.1],
  });

  return (
    <div
      ref={containerRef}
      className={`Project ${animationClassName} ${isVisible ? 'run-animation' : ''}`}
    >
      <div className='Project__info'>
        <h3 className='Project__info__title'>
          {title} <span className='Project__info__title--subtitle'>{subtitle}</span>
        </h3>
        <p className='Project__info__description'>{description}</p>
        <ul className='Project__info__tags'>
          {tags &&
            tags.map((tag) => (
              <li key={tag} className='Project__info__tags__item'>
                {tag}
              </li>
            ))}
        </ul>

        <div className='Project__info__links'>
          <a
            className='Project__info__links__link Project__info__links__link--primary'
            target='_blank'
            rel='noreferrer'
            href={url}
            aria-label={`View the live site for this project`}
          >
            View live
          </a>
          {repo && (
            <a
              className='Project__info__links__link Project__info__links__link--default'
              target='_blank'
              rel='noreferrer'
              href={repo}
              aria-label={`View code for project`}
            >
              View code
            </a>
          )}
        </div>
      </div>

      <div ref={imageRef} className='Project__picture'>
        <a
          className=''
          target='_blank'
          rel='noreferrer'
          href={url}
          aria-label={`Link to portfolio project`}
        >
          <img src={projectImage} alt={image.alt} width='636' height='332' />
        </a>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section className='Projects' id='Projects'>
      <div className='container'>
        <h2 className='Projects__title'>Projects</h2>
        <div className='Projects__content'>
          {projectsData.map((project, index) => (
            <Project project={project} key={project.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
