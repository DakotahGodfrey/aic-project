import React from 'react';
import Feed from 'components/layout/Feed';
import styled from 'styled-components/macro';
import { getFromTheme } from 'styles/themes';
import TextHero from 'components/layout/headers/TextHero';

const AboutContainer = styled.section`
  font-family: ${getFromTheme('sansSerifFonts')};
  color: ${getFromTheme('textColor')};
  h1 {
    font-size: 3.6rem;
    margin-bottom: 2.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${getFromTheme('textColor')};
  }
  h2 {
    font-weight: 200;
    font-size: 3.2rem;
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
  h3 {
    font-size: 2.8rem;
    font-weight: 200;
  }
  p {
    font-size: 2rem;
    padding: 1rem;
    line-height: 1.6;
  }
  a {
    color: ${getFromTheme('brandColor')};
    padding: 0.25rem;
  }
  .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.8rem;
    a {
      display: flex;
      align-items: center;
      i {
        padding: 1.6rem;
      }
    }
  }
`;

const AboutApp = () => {
  document.title = 'AIC Explorer | About this app';
  return (
    <>
      />
      <Feed
        css={`
          min-height: calc(100vh - 13rem);
          max-width: 100rem;
        `}
      >
        <TextHero
          heading={'About'}
          message={
            "AIC Explorer is a tool to explore the Art Institute of Chicago's online archives."
          }
        />
        <AboutContainer>
          <h2>About This App</h2>
          <p>
            I built this app as my final project for the{' '}
            <a href='https://www.codecademy.com/learn/paths/front-end-engineer-career-path'>
              Codecademy Front-End Engineering Pathway.
            </a>{' '}
            I wanted to make something other than the typical To Do List or
            Movies App. I also knew that I wanted the app to have an educational
            theme. I did some reasearch and found the public API offered by The
            Art Institute Of Chicago.
          </p>
          <p>
            While digging through the{' '}
            <a
              rel='noreferrer'
              target='_blank'
              href='https://api.artic.edu/docs/'
            >
              API Docs
            </a>
            , I found several endpoints I could use to provide user's with
            interesting information about the artworks and artists featured in
            the museum all from the comfort of their home. A huge thank you goes
            out to the maintainers of the{' '}
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/art-institute-of-chicago/data-aggregator'
            >
              API
            </a>
            , as well as to the{' '}
            <a rel='noreferrer' target='_blank' href='https://www.artic.edu/'>
              Art Institute Of Chicago
            </a>{' '}
            for offering this amazing resource for free.
          </p>
          <p>
            If you like this project and want to check out some of my other work
            you should visit my portfolio site{' '}
            <a href='https://dakotahg.dev'>dakotahg.dev</a>
          </p>
          <h2>About The Developer</h2>
          <p>
            Hey there! My name is Dakotah Godfrey. I am a community-taught web
            developer from Ontario, Canada. I'm new to the web development
            space, but I’ve become passionate about this field. I've focused on
            building the foundational skills needed to secure a job as a
            frontend developer. Lately, I've built accessible and beautiful web
            apps with React and Redux.
          </p>
          <p>
            Before the Covid-19 epidemic, I was working in the hospitality
            industry in Toronto. As work dried up, I started to look for at a
            career change. I started coding as a hobby, with HTML and CSS.
            Eventually, through resources like{' '}
            <a target='_blank' rel='noreferrer' href='https://codecademy.com'>
              Codecademy
            </a>{' '}
            and a number of online workshops from awesome creators and
            instructors like{' '}
            <a target='_blank' rel='noreferrer' href='https://kentcdodds.com/'>
              {' '}
              Kent C Dodds
            </a>
            ,{' '}
            <a target='_blank' rel='noreferrer' href='https://jhey.dev'>
              Jhey Dev
            </a>
            ,{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://twitter.com/ania_kubow'
            >
              Ania Kubów
            </a>{' '}
            and so many others, I found myself truly enjoying the development
            process. My long-term goal is to help make the tech more accessible.
          </p>
          <p>
            At the moment I'm looking for a position as an intern or junior
            developer, so I can continue to grow my skill set with more
            experience.
          </p>
          <h3>Find me</h3>
          <div className='socials'>
            <div className='social-link'>
              <a href='https://twitter.com/dakotah_dev'>
                <i className='fab fa-twitter fa-2x '></i>
                On twitter @dakotah_dev
              </a>
              <a href='https://github.com/dakotahgodfrey'>
                <i className='fab fa-github fa-2x '></i>
                On GitHub as Dakotah Godfrey
              </a>
              <a href='https://linkedin.com/in/dakotah-godfrey'>
                <i className='fab fa-linkedin-in fa-2x'></i>
                On LinkedIn as Dakotah Godfrey
              </a>
            </div>
          </div>
          <h3>Note</h3>
          <p>
            All images and data used by this app are provided by The Art
            Institue Of Chicago, under a Creative Commons Zero (CC0)
            designation.
          </p>
        </AboutContainer>
      </Feed>
    </>
  );
};

export default AboutApp;
