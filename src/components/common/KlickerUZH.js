import React from 'react'

export default () => (
  <span className="logo">
    Klicker<span className="high">UZH</span>
    <style jsx>{`
      .logo {
        font-size: 2rem;
      }

      .logo > .high {
        font-size: 1rem;
        vertical-align: top;
      }
    `}</style>
  </span>
)
