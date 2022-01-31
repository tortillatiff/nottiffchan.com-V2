import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/projects/projectHeader";
import { StaticImage } from "gatsby-plugin-image";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";
import ProjectNextCase from "../../components/projects/projectNextCase";
import TwoColLayout from "../../components/projects/twoColLayout";

import userResearch from "../../images/larry/userResearch.png";
import userPersona from "../../images/larry/userPersona.png";
import userPersonaTable from "../../images/larry/userPersonaTable.png";
import ideation from "../../images/larry/ideation.png";
import sketches from "../../images/larry/sketches.png";
import lowfi from "../../images/larry/lowfi.png";
import issueOne from "../../images/larry/issue1.png";
import issueTwo from "../../images/larry/issue2.png";

import larryLeftOne from "../../images/larry/larryLeftOne.png";
import larryLeftTwo from "../../images/larry/larryLeftTwo.png";
import larryLeftThree from "../../images/larry/larryLeftThree.png";
import larryRightOne from "../../images/larry/larryRightOne.png";
import larryRightTwo from "../../images/larry/larryRightTwo.png";
import larryDesignSystem from "../../images/larry/larryDesignSystem.png";
import larryOnboarding from "../../images/larry/larryOnboarding.mp4";
import larryHome from "../../images/larry/larryHome.mp4";
import larryQuizzes from "../../images/larry/larryQuizzes.mp4";
import larryDeck from "../../images/larry/larry Deck.pdf";

const links = [
  { link: { larryDeck }, name: "Full Project Slide Deck" },
  {
    link: "https://www.figma.com/proto/jsvRrDaKeiZjHTzIP4vXen/CS3240-IDE---larry?page-id=0%3A1&node-id=5%3A70&viewport=262%2C48%2C0.12&scaling=scale-down&starting-point-node-id=5%3A70",
    name: "Figma Prototype",
  },
];

const leftItems = [
  {
    imgSrc: larryLeftOne,
    caption:
      "‘larry’ is a spin-off/pun of the last 2 syllables of ‘vocabulary’, and the app centers around a character Larry the Llama.",
  },
  {
    imgSrc: larryLeftTwo,
    caption: "Usage of visuals like funny gifs to enhance learning retention.",
  },
  { imgSrc: larryLeftThree, caption: "Different formats of quiz questions" },
];

const rightItems = [
  {
    imgSrc: larryRightOne,
    caption: "Onboarding process to determine user’s current skill level",
  },
  {
    imgSrc: larryRightTwo,
    caption: "Expanding on larry’s character to show various emotions",
  },
];

export default function Larry() {
  return (
    <Layout title="larry – Tiffany Chan">
      <Header projName="larry" projDesc="Mobile app for learning vocabulary" />
      <StaticImage src="../../images/larry/hero.png" alt="Hero image" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          This case study explores the experience of learning and understanding
          new concepts and phrases by thoroughly researching how people learn
          new vocabulary, and designing a mobile app to address their goals and
          challenges.
          <br />
          <br />
          larry is designed for users who enjoy fun game-like learning exercises
          presented in a visually appealing format. Bright appealing visuals and
          a simple interface enable the app’s features to be digested in small
          and short chunks. This memory app is designed for users on the go, who
          might have a few minutes to kill waiting for the next bus or an
          appointment.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>User Research</h3>
        <p>
          I conducted short interviews with 4 users who have made attempts to
          improve their lexicon of English. All interviewees had used
          educational or vocab learning apps in the past year and were able to
          provide useful insights and feedback on their experiences.
          <br />
          <br />
          My findings from the interviews were synthesized into an affinity
          diagram to identify what I should focus on, and inform what kind of
          design and learning styles users found useful.
          <br />
          <br />
          In addition, I considered the findings from 2 notable research papers,
          namely *Desirable Difficulties in Vocabulary Learning* (Bjork & Kroll,
          2015) **and *Test-Enhanced Learning* (Roediger & Karpicke, 2006).
        </p>

        <ScreenshotContainer>
          <img src={userResearch} alt="User Research" />
        </ScreenshotContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Persona Development</h3>
        <p>
          Using my research, I created one primary persona as the primary user
          profile of the app.
        </p>
        <ScreenshotContainer>
          <img src={userPersona} alt="User persona" />
        </ScreenshotContainer>
        <p>
          The characteristics I identified from my user interview participants
          were also mapped to a customer journey map with the relevant
          Doing/Thinking/Feeling/Saying points.
        </p>
        <br />

        <ScreenshotContainer>
          <img src={userPersonaTable} alt="User Research" />
        </ScreenshotContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Ideation</h3>
        <p>
          With the brainstorming from the user journey map compounded with the
          learnings from the research papers, I proceeded to compile a list of
          ideas I could potentially integrate into the app.
        </p>
        <ScreenshotContainer>
          <img src={ideation} alt="Ideation" />
        </ScreenshotContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Sketches</h3>
        <p>
          With these ideas in mind, I began sketching ideas for how to meet the
          needs of the user personas identified. The main goal I had was to
          incorporate variety into vocab quizzes, and make the usage of visuals
          and images rich since it had been shown to improve memorability of a
          word. Another idea I wanted to play with was incorporating minigames
          with friends to challenge users to apply the words they learnt.
        </p>
        <ScreenshotContainer>
          <img src={sketches} alt="Ideation" />
        </ScreenshotContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Prototyping</h3>
        <p>
          Once I had a visual direction of the layout, I started to add more
          details and precisions to the sketches by turning them into
          low-fidelity wireframes using Figma. Creating low-fidelity wireframes
          helps me focus on the visual consistency and hierarchy before applying
          styles.
        </p>
        <ScreenshotContainer>
          <img src={lowfi} alt="Low fi wireframes" />
        </ScreenshotContainer>
        <p>
          In order to test the main features of my prototype, I carried out some
          basic usability testings with 3 participants. Results were analysed
          with Jakob Nielsen’s error severity rating scale.
        </p>
      </ProjectTextSection>

      <ProjectTextSection>
        <h4>Usability Issue 1</h4>
        <TwoColLayout
          colOneWidth={5}
          alignCenter
          colOne={
            <p>
              One usability issue was that users felt on the first onboarding
              screen was too long and tedious. The continue button was below the
              fold and having to scroll down to find it was confusing. To
              improve this, I collapsed and condensed the words so users would
              have to scroll and shift their gaze less. The continue button was
              also made more visible and conspicious to improve user knowledge
              of what was next.
            </p>
          }
          colTwo={
            <img
              src={issueOne}
              style={{ width: "100%" }}
              alt="Usability issue One"
            />
          }
        />
      </ProjectTextSection>
      <ProjectTextSection>
        <h4>Usability Issue 2</h4>
        <TwoColLayout
          colOneWidth={5}
          alignCenter
          colOne={
            <img
              src={issueTwo}
              style={{ width: "100%" }}
              alt="Usability issue One"
            />
          }
          colTwo={
            <p>
              The add action icon button on various screens was easily missable
              and ambigous in meaning (”add what?”). One user also remarked that
              his thumbs would probably be too fat for the small button. As
              such, I replaced the button with a clearer and larger text button.
            </p>
          }
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Design System</h3>
        <p>
          I wanted the visual language of the app to be friendly and
          motivational, to Based on some research, I learnt that blue is best
          used for learning situations, and has been shown to improve reading
          comprehension. As such, I felt it would be appropriate to adopt an
          energetic and inspiring bright blue as the primary color, with a twist
          on typography by embracing a friendly rounded sans-serif typeface.
        </p>
      </ProjectTextSection>

      <ScreenshotContainer>
        <img
          src={larryDesignSystem}
          alt="design system"
          style={{ paddingBottom: "200px" }}
        />
      </ScreenshotContainer>

      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <ProjectTextSection>
        <TwoColLayout
          colOneWidth={6}
          alignCenter
          colOne={
            <>
              <h4>Onboarding</h4>

              <p>
                In the onboarding process, users pick words that they are
                familar with. This helps the app get a good sensing of the
                user’s current vocabulary mastery and suggest daily words that
                are appropriate for the user’s skill level.
              </p>
            </>
          }
          colTwo={
            <video
              style={{ width: "100%" }}
              src={larryOnboarding}
              loop
              muted
              autoPlay
              playsInline
            ></video>
          }
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <TwoColLayout
          colOneWidth={4}
          alignCenter
          colOne={
            <video
              style={{ width: "100%" }}
              src={larryHome}
              loop
              muted
              autoPlay
              playsInline
            ></video>
          }
          colTwo={
            <>
              <h4>Home</h4>
              <p>
                Upon entering the app, the user will see a suggested word of the
                day, a suggested pick of words to learn, or to revise words that
                they have already learnt before. There are also community
                contributed sets for them to explore vocabulary terms within
                certain contexts.
              </p>
            </>
          }
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <TwoColLayout
          colOneWidth={6}
          alignCenter
          colOne={
            <>
              <h4>Quizzes</h4>
              <p>
                From my research, testing with <b>variations</b> has been shown
                as an effective tool for learning and future recall. For
                learning questions, users are for example shown a{" "}
                <b>funny GIF</b> demonstrating the definition of a word. This
                helps users with <b>better visual association</b> and{" "}
                <b>recall</b> while learning. As the users grasp the meaning of
                the words within the quiz, the questions will get progressively
                more challenging to encourage independent recall.
              </p>
            </>
          }
          colTwo={
            <video
              style={{ width: "100%" }}
              src={larryQuizzes}
              loop
              muted
              autoPlay
              playsInline
            ></video>
          }
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Final Interactive Prototype</h3>
        <ScreenshotContainer>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjsvRrDaKeiZjHTzIP4vXen%2FCS3240-IDE---larry%3Fpage-id%3D0%253A1%26node-id%3D5%253A70%26viewport%3D262%252C48%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A70"
            allowfullscreen
          ></iframe>
        </ScreenshotContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>Reflections</h3>
        <p>
          This app has been personally very challenging and exciting to work on.
          Apart from acquiring valuable experience through{" "}
          <b>user interviews</b>, which allowed me to obtain direct user input,
          I tried my best to
          <b> rationalize every single design decision</b> with thorough
          research that minimises gaps. The user research I conducted was
          critical in <b>identifying the core features</b> of the app and it
          helped me understand <b>user needs and pain points</b>.
          <br />
          <br />
          Working through the various stages was challenging and rewarding, as I
          learned how to <b>organize and strategize concepts</b> while
          identifying problems and solutions. I learned the value of working
          iteratively, <b>testing and more testing</b> to ensure the needs of
          the user were met and there were no confusions. It was exciting to
          watch users interacting with my app and providing real-time feedback
          and suggestions on how I could improve it.
          <br />
          <br />
          Overall, I truly enjoyed working on <b>larry</b> and learned a great
          deal about the UX design process.
        </p>
      </ProjectTextSection>

      <ProjectNextCase />
    </Layout>
  );
}
