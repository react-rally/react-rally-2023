import React from "react";
import { useAppContext } from "App";

export default () => {
  const { constants } = useAppContext();

  return (
    <section className="highlight">
      <p>
        {constants.Meta.CONFERENCE_NAME} is a two day, single track conference
        for developers of all backgrounds using React.js, React Native, and
        related tools. Speakers will cover topics like React Native, state
        management, hooks, universal JavaScript, and more. Whether you're a
        seasoned developer who has been using React since before it was cool,
        or a newcomer to the scene, {constants.Meta.CONFERENCE_NAME} has
        something for everyone!
      </p>
    </section>
  );
}
