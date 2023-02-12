import React from 'react'

export default ({ size = 200, url }) => (
  <img
    src={url}
    alt=""
    className="Avatar"
    style={{
      width: size,
      height: size,
      borderRadius: size / 2
    }}
  />
);
