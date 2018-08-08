import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Link } from 'gatsby'

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
              <Link to="/">
                Klicker
                <span className="klicker-logo-high">UZH</span>
              </Link>
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

              <Menu.Item name="faq">
                <a
                  href="https://uzh-bf.github.io/klicker-docs/docs/faq.html"
                  target="_blank"
                >
                  FAQ
                </a>
              </Menu.Item>

              <Menu.Item>
                <a href="http://www.klicker.uzh.ch/login" target="_blank">
                  Legacy
                </a>
              </Menu.Item>

              <Menu.Item
                name="contact"
                active={this.state.activeMenuItem === 'contact'}
                onClick={this.changeActiveMenuItem}
              >
                <ScrollLink to="footer" smooth duration={500} offset={-50}>
                  Contact
                </ScrollLink>
              </Menu.Item>

              <Menu.Item>
                <Button
                  primary
                  as="a"
                  href="https://app.klicker.uzh.ch/user/login"
                  size="tiny"
                  target="_blank"
                >
                  Login
                </Button>
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
            flex-direction: column;

            align-items: center;
            justify-content: space-between;
          }

          .klicker-logo {
            margin-top: 1rem;

            color: #375164;
            font-size: 2rem;
            line-height: 2rem;
          }

          .klicker-logo-high {
            font-size: 1rem;
            line-height: 1rem;
            vertical-align: top;
          }

          @media all and (min-width: 986px) {
            .klicker-headerContent {
              flex-direction: row;
            }

            .klicker-logo {
              flex: 0 0 200px;
              margin: 0.25rem 0;
            }
          }
        `}</style>
      </header>
    )
  }
}
