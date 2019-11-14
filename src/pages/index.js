import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/mainSection"
import WhoAmISection from "../components/whoAmISection"
import WorksSection from "../components/worksSection"
import BlogSection from "../components/blogSection"
import OpinionsSection from "../components/opinionsSection"
import PodcastSection from "../components/podcastSection"

class IndexPage extends React.Component {
  render() {
    return (
        <Layout>
          <SEO title="Home" />
          <MainSection />
          <WhoAmISection />
          <WorksSection />
          <BlogSection />
          <OpinionsSection />
          <PodcastSection />

          {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
  }
}

export default IndexPage
