import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Events, Link, animateScroll as scroll, scrollSpy } from 'react-scroll'

import MaxWidth from './MaxWidth'

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
        <MaxWidth>
          <div className="klicker-headerContent">
            <div className="klicker-logo">logo</div>
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
        </MaxWidth>

        <style jsx>{`
          header {
            background-color: white;
          }

          .klicker-headerContent {
            display: flex;
            justify-content: space-between;
          }

          header .klicker-logo {
            background-color: lightgrey;
            flex: 0 0 200px;
            margin: 0.5rem 0;
          }

          header nav {
            flex: 0 0 auto;
          }
        `}</style>
      </header>
    )
  }
}
