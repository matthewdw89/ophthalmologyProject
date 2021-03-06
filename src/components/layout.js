<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

import NavBar from './navbar'
import Footer from './footer'
import Form from '../components/contact-form'
import '../styles/base/styles.css'

class Layout extends React.Component {
  state = {
    display: "none"
  }

  toggleForm = () => {
    console.log(this.state.display)
    if (this.state.display === "none") {
      this.setState({
        display: "flex"
      });
    } else {
      this.setState({
        display: "none"
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("submit")
  }

  render() {
    const { children } = this.props
    return (
      <>
        <NavBar toggleForm={this.toggleForm}/>
        <div className="main__content">
          {children}
        </div>
        <Footer />
        <Form display={this.state.display} submitForm={this.submitForm} toggleForm={this.toggleForm}/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
||||||| merged common ancestors
=======
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Menu from './menu';
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
>>>>>>> a181bcad6115774aebca10ede6ebc07579bcefeb
