import React from 'react'
import { Container, Grid, List } from 'semantic-ui-react'

export default () => (
  <footer>
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <strong>KlickerUZH</strong>

            <p>
              Created by the DBF Teaching Center at the University of Zurich
            </p>

            <address>
              Teaching Center<br />
              Department of Banking and Finance<br />
              Plattenstrasse 32<br />
              8032 Zurich
            </address>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>Terms of Service</List.Item>
              <List.Item>Privacy Policy</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <style jsx>{`
      footer {
        background-color: #375164;
        color: white;
        height: 15rem;
        padding: 1rem;
      }

      address {
        font-style: none;
      }
    `}</style>
  </footer>
)
