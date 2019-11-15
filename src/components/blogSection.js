import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowMoreButton from './showMoreButton'
import './blogSection.css'

class BlogSection extends React.Component {
  state = {
    showItems: 5,
    articles: [],
  }
  handleShowMore = () => {
    this.setState({
      showItems: this.state.showItems + 3,
    })
  }
  componentDidUpdate(prevProp) {
    this.props.data !== prevProp.data &&
      this.setState({ articles: this.props.data.articleses })
  }
  render() {
    const {articles, showItems} = this.state
    // console.log(this.props.data.articleses, 'articles')
    return (
      <div
        style={{
          margin: `0 auto`,
          height: 'auto',
          alignItems: 'center',
          paddingTop: '40px',
        }}
        id="blog"
      >
        <div
          className="worksContainer"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            height: '90%',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '30%',
              height: '280px',
              margin: '10px',
              borderWidth: '1px',
              borderColor: '#DDD',
              borderStyle: 'solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                color: '#0072ff',
                fontSize: '3.5vw',
                fontWeight: 'bold',
              }}
            >
              المدونة
            </p>
          </div>
          {articles &&
            articles.slice(0, showItems).map((article, i) => {
              return (
                <a
                  key={article.id}
                  href={`/${article.id}`}
                  target="_blank"
                  style={{
                    width: '30%',
                    height: '280px',
                    backgroundColor: 'black',
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <div className="container">
                    <div className="text">
                      <p>{article.title}</p>
                    </div>
                    <img
                      src={article.pic.url}
                      style={{
                        width: '100%',
                        alignSelf: 'center',
                        height: '-webkit-fill-available',
                        verticalAlign: 'top',
                        filter: 'brightness(50%)'
                      }}
                    />
                  </div>
                </a>
              )
            })}
        </div>
        {articles.length >= showItems && (
          <ShowMoreButton handleMore={this.handleShowMore} />
        )}
      </div>
    )
  }
}

export const articles = gql`
  query {
    articleses {
      id
      status
      title
      contents
      createdAt
      pic {
        url
      }
    }
  }
`

export default graphql(articles)(BlogSection)
