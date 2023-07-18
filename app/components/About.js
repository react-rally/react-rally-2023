import React from "react";
import { useAppContext } from "App";

export default () => {
  const { constants } = useAppContext();

  return (
    <section className="highlight">
      <p>
        {constants.Meta.CONFERENCE_NAME} is a two day conference designed for developers of all backgrounds, 
        from seasoned professionals to those just starting out. With a single track program, 
        you'll be immersed in a variety of exciting presentations that cover a range of topics, 
        including state management, hooks, accessibility, performance, JavaScript, native applications, 
        career growth, and more. Our inclusive conference is a great place to network, learn, and share experiences with like-minded individuals.
        Don't miss this chance to take your skills to the next level and join us at {constants.Meta.CONFERENCE_NAME}.
      </p>
    </section>
  );
}
