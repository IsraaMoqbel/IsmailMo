import React from "react"
import { Link } from "gatsby"
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ArticlePage extends React.Component {
  state = {
    article: '',
  }
  handleShowMore = () => {
    this.setState({
      showItems: this.state.showItems + 3,
    })
  }
  componentDidUpdate(prevProp) {
    if (this.props.data) {
      this.props.data !== prevProp.data &&
        this.setState({ article: this.props.data.articles })
    }
    console.log(this.props, prevProp, 'prevProp.data')
  }

  render() {
    console.log(this.props, this.state)
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to dynamic page</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export const article = gql`
query getArticle {
  articles(where: {id: $clientId}) {
    contents
    createdAt
    id
    pic {
      url
    }
  }
}
`
export default graphql(article)(ArticlePage)
