import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowMoreButton from './showMoreButton'

class BlogSection extends React.Component {
  render() {
    const articles = this.props.data.articleses
    console.log(articles, 'articles')
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
              style={{ color: '#0072ff', fontSize: '3rem', fontWeight: 'bold' }}
            >
              المدونة
            </p>
          </div>
          {articles &&
            articles.map((article, i) => {
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
                    textDecoration:'none'
                  }}
                >
                  <p>{article.title}</p>
                  <img
                    src={article.pic.url}
                    style={{
                      width: '200px',
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    }}
                  />
                </a>
              )
            })}
        </div>
        <ShowMoreButton handleMore={() => console.log('xxx')} />
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
