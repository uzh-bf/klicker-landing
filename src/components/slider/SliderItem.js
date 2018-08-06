import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default ({ title, description, imageSrc, children }) => (
  <div className="sliderItem">
    <Grid>
      <Grid.Column width={5}>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="actions">{children}</div>
      </Grid.Column>
      <Grid.Column width={11}>
        <div className="image">
          <Image src={imageSrc} height="300px" width="100%" />
        </div>
      </Grid.Column>
    </Grid>

    <style jsx>{`
      .sliderItem {
      }

      p.description {
        color: #375164;
      }

      .image {
        border: 1px solid lightgrey;
      }

      .actions {
        margin-top: 1rem;
      }
    `}</style>
  </div>
)
