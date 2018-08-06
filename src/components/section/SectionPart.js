import React from 'react'
import { Icon, Image, Segment } from 'semantic-ui-react'

export default ({ iconName, imageSrc, title, description }) => (
  <div className="sectionPart">
    <Segment>
      <div className="icon">
        {iconName && <Icon name={iconName} size="huge" />}
        {imageSrc && <Image src={imageSrc} />}
      </div>

      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </Segment>

    <style jsx>{`
      .sectionPart {
        display: flex;
        flex-direction: column;
      }

      .sectionPart .icon,
      .sectionPart h3,
      .sectionPart p {
        text-align: center;
      }
    `}</style>
  </div>
)
