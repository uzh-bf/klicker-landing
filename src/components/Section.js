import React from 'react'

import MaxWidth from './MaxWidth'

export default ({ children }) => (
  <div className="klicker-section">
    <MaxWidth>{children}</MaxWidth>
    <style jsx>{`
      .klicker-section {
        padding: 1rem 0;
      }

      .klicker-section h2 {
        color: #1e70bf;
      }

      .klicker-section p {
        color: grey;
      }
    `}</style>
  </div>
)
