import React from 'react';

const Color = ({value}) => (
  <div className={`Color Color--${value}`}>$color-{value}</div>
);

export default () => (
  <div className="StyleGuide">
    <section>
      <h2>Colors</h2>
      <div>
        <Color value="tealLight" />
        <Color value="teal" />
        <Color value="tealDark" />
      </div>
      <div>
        <Color value="red" />
        <Color value="redDark" />
      </div>
      <div>
        <Color value="white" />
        <Color value="primary" />
      </div>
      <div>
        <Color value="grayLightest" />
        <Color value="grayLight" />
        <Color value="gray" />
        <Color value="grayDark" />
        <Color value="grayDarkest" />
      </div>
    </section>
  </div>
);
