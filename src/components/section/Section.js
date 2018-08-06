import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

export default ({ title, children }) => (
  <div className="section">
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>

    <style jsx>{`
      .section {
        padding: 2rem 0;
      }
    `}</style>
  </div>
)
