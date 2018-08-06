import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Events, Link, animateScroll as scroll, scrollSpy } from 'react-scroll'

export default class Header extends React.Component {
  state = {
    activeMenuItem: 'home',
  }

  changeActiveMenuItem = (e, { name }) => {
    this.setState({ activeMenuItem: name })
  }

  scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    })
  }

  render() {
    return (
      <header>
        <Container>
          <div className="klicker-headerContent">
            <div className="klicker-logo">
              Klicker<span className="klicker-logo-high">UZH</span>
            </div>

            <Menu text as="nav">
              <Menu.Item
                name="home"
                active={this.state.activeMenuItem === 'home'}
                onClick={(_, data) => {
                  this.changeActiveMenuItem(_, data)
                  this.scrollToTop()
                }}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="faq"
                active={this.state.activeMenuItem === 'faq'}
                onClick={this.changeActiveMenuItem}
              >
                FAQ
              </Menu.Item>

              <Menu.Item
                name="header1"
                active={this.state.activeMenuItem === 'header1'}
                onClick={this.changeActiveMenuItem}
              >
                <Link to="header1" smooth duration={500} offset={-50}>
                  Header 1
                </Link>
              </Menu.Item>

              <Menu.Item
                name="header2"
                active={this.state.activeMenuItem === 'header2'}
                onClick={this.changeActiveMenuItem}
              >
                <Link to="header2" smooth duration={500} offset={-50}>
                  Header 2
                </Link>
              </Menu.Item>

              <Menu.Item
                name="header3"
                active={this.state.activeMenuItem === 'header3'}
                onClick={this.changeActiveMenuItem}
              >
                <Link to="header3" smooth duration={500} offset={-50}>
                  Header 3
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Container>

        <style jsx>{`
          header {
            background-color: white;
          }

          .klicker-headerContent {
            display: flex;

            align-items: center;
            justify-content: space-between;
          }

          .klicker-logo {
            flex: 0 0 200px;
            margin: 0.25rem 0;

            color: #375164;
            font-size: 2rem;
            line-height: 2rem;
          }

          .klicker-logo-high {
            font-size: 1rem;
            ling-height: 1rem;
            vertical-align: top;
          }
        `}</style>
      </header>
    )
  }
}
