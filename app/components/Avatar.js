import React from 'react'

export default ({ size = 200, url, style }) => (
  <img
    src={url}
    alt=""
    className="Avatar"
    style={Object.assign(
      {
        width: size,
        height: size,
        borderRadius: size / 2
      },
      style
    )}
  />
);
