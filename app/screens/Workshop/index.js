import React from "react";
import { useAppContext } from "App";
import Person from 'components/Person';

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Workshop">
      <section className="highlight">
        {constants.Meta.EVENT_NAME} features two incredible workshop days preceding the conference.
        Come sharpen your skills with expert instruction from some of the most knowledgable people in the React community.
        Whether you are a newcomer to React wanting to get your feet wet, or have been using React for years our workshops
        have something to offer you!
      </section>

      <div className="Workshop__Sessions">
        <section className="Workshop__Sessions__Item">
          <h2>Intro to React</h2>

          <p>
            A <strong>two day</strong> workshop held <strong>August 15-16, 2023</strong> being taught by <strong>Michael Chan</strong>.
          </p>

          <p>
            React can be overwhelming, with countless concepts and a rich history to navigate. That's why we've crafted this beginner-friendly, two-day workshop to help you carve a path through the React ecosystem. Our seasoned instructor, chantastic, will be your guide, offering expert insight and support. Together, you'll explore JSX WTF’s, styling approaches, composition patterns, TypeScript fundamentals, powerful code organization, editor superpowers, and so much more. By the end of the workshop, you'll possess the skills and confidence to build React apps independently or collaboratively.
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
          <h2>Web App Fundamentals - Remix</h2>

          <p>
            A <strong>one day</strong> workshop held <strong>August 16, 2023</strong> being taught by <strong>Kent C. Dodds</strong>.
          </p>

          <p>
            Building modern web applications is riddled with complexity. And that's only if you bother to deal with the problems. Tired of wiring up onSubmit to backend APIs and making sure your client-side cache stays up-to-date? Wouldn't it be cool to be able to use the global nature of CSS to your benefit, rather than find tools or conventions to avoid or work around it? And how would you like nested layouts with intelligent and performance optimized data management that just works™? Remix solves some of these problems, and completely eliminates the rest. You don't even have to think about server cache management or global CSS namespace clashes. It's not that Remix has APIs to avoid these problems, they simply don't exist when you're using Remix. Oh, and you don't need that huge complex graphql client when you're using Remix. They've got you covered. Ready to build faster apps faster?
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
