import React from "react";
import { useAppContext } from "App";
import Person from 'components/Person';

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Workshop">
      <section className="highlight">
        {constants.Meta.EVENT_NAME} features two incredible workshops preceding the conference.
        Come sharpen your skills with expert instruction from some of the most knowledgable people in the React community.
        Whether you are a newcomer to React wanting to get your feet wet, or have been using React for years our workshops
        have something to offer you!
      </section>

      <div className="Workshop__Sessions">
        <section className="Workshop__Sessions__Item">
          <h2>Intro to React</h2>

          <p>
            A <strong>one day</strong> workshop held <strong>August 16, 2023</strong> being taught by <strong>Michael Chan</strong>.
          </p>

          <p>
            React can be overwhelming, with countless concepts and a rich history to navigate. That's why we've crafted this beginner-friendly, workshop to help you carve a path through the React ecosystem. Our seasoned instructor, chantastic, will be your guide, offering expert insight and support. Together, you'll explore JSX WTF’s, styling approaches, composition patterns, TypeScript fundamentals, powerful code organization, editor superpowers, and so much more. By the end of the workshop, you'll possess the skills and confidence to build React apps independently or collaboratively.
          </p>

          <p>
            As a React Rally speaker and MC, chantastic knows precisely what you need to make the most of the conference. Let us clear the path to success, ensuring your React learning experience is both enjoyable and rewarding!
          </p>

          <Person
            name="Michael Chan"
            avatar="https://avatars.githubusercontent.com/u/658360?v=4"
            twitter="chantastic"
            github="chantastic"
          />
        </section>

        <section className="Workshop__Sessions__Item">
          <h2>Full Stack Foundations</h2>

          <p>
            A <strong>one day</strong> workshop held <strong>August 16, 2023</strong> being taught by <strong>Kent C. Dodds</strong>.
          </p>

          <p>
            You're busy shipping software,<br/><br/>
            You've got tons of responsibility.<br/><br/>
            Solving problems with the simplest, most optimal pattern is absolutely one of them.<br/><br/>
            Shipping quickly is another.<br/><br/>
            In your rush to get things out the door, you can often skip over many important foundational concepts that would simplify your life a great deal without even knowing it. Even if you've been doing this for a long time, keeping up with advancements in software development is challenging (I promise, you don't have to use <code>display: table</code> to vertically center divs anymore 😩).<br/><br/>
            This workshop will fill gaps in your knowledge you didn't even know you had and update your mental models for the NOW!<br/><br/>
            In the time we go through this together, we'll cover modern best practices across the stack:<br/>
            <ul>
              <li>Styling</li>
              <li>Routing</li>
              <li>Loading & Mutating Data</li>
              <li>Client-side Scripting</li>
            </ul>
            We'll cover a lot of ground, giving you a solid foundation for everything else you do on the web. ⚡️
          </p>

          <Person
            name="Kent C. Dodds"
            avatar="https://avatars.githubusercontent.com/u/1500684?v=4"
            twitter="kentcdodds"
            github="kentcdodds"
          />
        </section>
      </div>
    </div>
  )
}
