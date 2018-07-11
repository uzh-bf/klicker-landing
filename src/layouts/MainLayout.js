import React from 'react'
import Helmet from 'react-helmet'
import '../../node_modules/semantic-ui-css/semantic.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div className="klicker-main">
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Helmet>

    <div className="klicker-stickyHeader">
      <Header />
    </div>

    <main className="klicker-content">{children}</main>

    <div className="klicker-footer">
      <Footer />
    </div>

    <style jsx global>{`
      body,
      #___gatsby,
      .klicker-main {
        height: 100%;
      }
    `}</style>

    <style jsx>{`
      .klicker-main {
        display: flex;
        flex-direction: column;
      }

      .klicker-stickyHeader {
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
      }

      .klicker-content {
        flex: 1;
        height: 100%;
      }

      .klicker-footer {
        flex: 0 0 auto;
      }
    `}</style>
  </div>
)
