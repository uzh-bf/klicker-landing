import React from 'react'

import MaxWidth from './MaxWidth'

export default () => (
  <footer>
    <MaxWidth>Copyright blaa</MaxWidth>

    <style jsx>{`
      footer {
        background-color: grey;
        height: 200px;
        padding: 1rem;
      }
    `}</style>
  </footer>
)
