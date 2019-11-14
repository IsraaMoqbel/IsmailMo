import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
class PodcastSection extends React.Component {
  render() {
    const podcasts = this.props.data.podcasts
    console.log(podcasts, 'podcasts')
    return (
      <div
        style={{
          margin: `0 auto`,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="broadcast"
      >
        <div
          style={{
            // width: '30%',
            height: '280px',
            margin: '0 auto',
            borderWidth: '1px',
            borderColor: '#DDD',
            borderStyle: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ color: '#0072ff', fontSize: '3rem', fontWeight: 'bold' }}>
            بودكاست
          </p>
        </div>
        <div>
          {podcasts &&
            podcasts.map(podcast => {
              return (
                <a
                  key={podcast.id}
                  href={podcast.link}
                  target="_blank"
                  style={{
                    width: '70%',
                    // height: '200px',
                    backgroundColor: 'black',
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={podcast.pic.url} style={{ width: '100%', }} />
                </a>
              )
            })}
        </div>
      </div>
    )
  }
}

export const podcasts = gql`
  query {
    podcasts {
      id
      link
      pic {
        url
      }
      status
    }
  }
`
export default graphql(podcasts)(PodcastSection)
