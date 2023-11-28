import React, { useRef, useEffect } from 'react';
// import { Fade } from 'react-reveal';
// import { useStaticQuery, graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { projectsData } from '../../data/data';
import TiltController from '../../utils/tilt';

const Project = ({ project }) => {
  const { title, subtitle, description, tags, url, repo, image } = project;
  const projectImage = require(`../../images/${image.filename}`);
  const imageRef = useRef(null);

  useEffect(() => {
    const tiltController = new TiltController(imageRef.current);

    return () => {
      tiltController.root.removeEventListener('mousemove', tiltController.handleTilt);
      tiltController.root.removeEventListener('mouseleave', tiltController.resetTilt);
    };
  }, []);

  return (
    <div className='Project'>
      <div className='Project__info'>
        {/* <Fade bottom> */}
        <h3 className='Project__info__title'>
          {title} <span className='Project__info__title--subtitle'>{subtitle}</span>
        </h3>
        <p className='Project__info__description'>{description}</p>
        <ul className='Project__info__tags'>
          {tags &&
            tags.map((tag) => (
              // <Fade bottom key={tag}>
              <li key={tag} className='Project__info__tags__item'>
                {tag}
              </li>
              // </Fade>
            ))}
        </ul>
        {/* </Fade> */}
        {/* <Fade bottom> */}
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
        {/* </Fade> */}
      </div>
      {/* <Fade bottom> */}
      <div ref={imageRef} className='Project__picture'>
        <a
          className=''
          target='_blank'
          rel='noreferrer'
          href={url}
          aria-label={`Link to portfolio project`}
        >
          <img src={projectImage} alt={image.alt} />
        </a>
      </div>
      {/* </Fade> */}
    </div>
  );
};

function Projects() {
  return (
    <section className='Projects' id='Projects'>
      <div className='container'>
        {/* <Fade bottom> */}
        <h2 className='Projects__title'>Projects</h2>
        {/* </Fade> */}
        <div className='Projects__content'>
          {projectsData.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
