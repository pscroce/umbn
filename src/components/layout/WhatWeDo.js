import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import Paragraph from '../layout/elements/Paragraph';
import Subtitle from '../layout/elements/Subtitle';
import Title from '../layout/elements/Title';
import Card from '../layout/elements/Card';
import Label from '../layout/elements/Label';

import legoImg from '../../imgs/lego.jpg';
import cpsImg from '../../imgs/cps.jpg';
import designSprint from '../../imgs/design-sprint.jpg';
import businessImprov from '../../imgs/business-improv.jpg';


function WhatWeDo() {
  return (
    <div>
      <div style={styles.titleArea}>
        <Section>
          <Title>
            What We Do
          </Title>
        </Section>
      </div>

      <Section>

        <Card>

          <div style={styles.whatWeDoText}>
            <Subtitle>
              Design Sprint
            </Subtitle>

            <Paragraph>
              We design meetings that result in clarity, creativity, and action.
              Our signature approach helps teams design winning
              products, services, and experiences by involving the human
              perspective in all steps of the problem solving process.
              The need for
              better meetings and process is universal, as is the creative human
              ability to rise to any challenge.
            </Paragraph>
          </div>
          <div style={[styles.whatWeDoImg, styles.designSprint]}></div>
        </Card>


      </Section>

      <Section>

        <Card>
          <div style={[styles.whatWeDoImg, styles.legoImg]}></div>

          <div style={styles.whatWeDoText}>
            <Subtitle>LEGO<sup>®</sup> Serious Play</Subtitle>
            <Paragraph>
            “You can learn more about a person in an hour of play than you can
            from a lifetime of conversation” - Plato
            </Paragraph>
            <Paragraph>
              The LEGO<sup>®</sup> Serious Play methodology is designed to enhance
              innovation and business performance. This strategy produces a more
              meaningful understanding of the world and its possibilities.
            </Paragraph>
            <Paragraph>
              We love employing this “hands on, minds on” methodology
              to create a more reflective atmosphere and engage participants in
              deeper, more effective dialogue.
            </Paragraph>
          </div>

        </Card>

      </Section>

      <Section>

        <Card>

          <div style={styles.whatWeDoText}>
            <Subtitle>
              Creative Problem Solving
            </Subtitle>

            <Label>
              Osborne – Parnes Creative Problem Solving Model
            </Label>
            <Paragraph>
              One of our most commonly used methods is the CPS Model. Using
              recent research and plain language, this approach is comprised of four
              explicit process steps: Clarify the problem, Ideate on possible
              solutions, Develop the best solution, and Implement the final strategy.
            </Paragraph>
            <Paragraph>
              Within this process, UMBN designs a customized suite of tools to meet
              each team’s goals and challenges, guiding participants through each
              step.
            </Paragraph>
          </div>
          <div style={[styles.whatWeDoImg, styles.cpsImg]}></div>
        </Card>


      </Section>

      <Section>

        <Card>
          <div style={[styles.whatWeDoImg, styles.businessImprov]}></div>

          <div style={styles.whatWeDoText}>
            <Subtitle>Business Improv</Subtitle>
            <Paragraph>
              In today’s ever changing world, mental agility is essential. At UMBN,
              we customize Improvisational tools and skill sets to help teams
              embrace uncertainty, learn to view change as opportunity, and value
              collaboration with their team. Through fun, high-energy Improv
              workshops, teams become more cohesive, adaptable and open-
              minded to the “Yes, and” approach to life and business.
            </Paragraph>
          </div>

        </Card>

      </Section>

    </div>
  )
}

// Colors
const primary = '#65a3d6';
// const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';

const styles = {
  titleArea: {
    backgroundColor: primary,
    // clipPath: 'polygon(100% 0, 100% 50%, 61% 75%, 27% 80%, 0 100%, 0 0)',
    clipPath: 'polygon(100% 0, 100% 60%, 61% 85%, 27% 95%, 0 100%, 0 20%)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 200,
    paddingTop: 40,
    paddingLeft: 30,

    '@media (max-width: 992px)': { // tablet
      alignItems: 'flex-start',
      minHeight: 170,
      paddingTop: 0,

    },
    '@media (max-width: 649px)': { // mobile medium
      minHeight: 130,
      paddingLeft: 15,

    },
    '@media (max-width: 480px)': { // mobile
      minHeight: 100,
    },
  },
  whatWeDoText: {
    width: '50%',
    backgroundColor: primary,
    padding: 30,
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
      padding: 15,
    },
  },
  whatWeDoImg: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '50%',
    '@media (max-width: 649px)': { // large mobile
      height: 200,
      width: '100%',
    },
  },
  cpsImg: {
    backgroundImage: `url(${cpsImg})`,
  },
  legoImg: {
    backgroundImage: `url(${legoImg})`,
  },
  designSprint: {
    backgroundImage: `url(${designSprint})`,
  },
  businessImprov: {
    backgroundImage: `url(${businessImprov})`,
  },
  superScript: {

  }
}

export default Radium(WhatWeDo);
