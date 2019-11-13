import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import MainSection from "../components/mainSection"
import WhoAmISection from "../components/whoAmISection"
import WorksSection from "../components/worksSection"
import BlogSection from "../components/blogSection"
import OpinionsSection from "../components/opinionsSection"
import BroadcastSection from "../components/broadcastSection"

import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
const GRAPHCMS_API =
  "https://api-euwest.graphcms.com/v1/ck2vojr6f2q2501eofa05ajun/master"

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
})
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`

class IndexPage extends React.Component {
  state = {
    loading: false,
    error: false,
    pupper: {
      img: "",
      breed: "",
    },
  }
  componentDidMount() {
    this.fetchRicksPupper()
  }

  // This data is fetched at run time on the client.
  fetchRicksPupper = () => {
    this.setState({ loading: true })
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(pupper => {
        const {
          data: { message: img },
        } = pupper
        const breed = img.split("/")[4]
        this.setState({
          loading: false,
          pupper: {
            ...this.state.pupper,
            img,
            breed,
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          <SEO title="Home" />
          <MainSection />
          <WhoAmISection />
          <WorksSection />
          <BlogSection />
          <OpinionsSection />
          <BroadcastSection />

          {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
      </ApolloProvider>
    )
  }
}

export default IndexPage
