import React from 'react'

export default ({ children }) => (
  <div className="klicker-maxWidth">
    {children}

    <style jsx>{`
      .klicker-maxWidth {
        margin: auto;
        max-width: 1000px;
      }
    `}</style>
  </div>
)
