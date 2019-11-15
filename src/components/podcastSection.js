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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin:'20px'
        }}
        id="podcast"
      >
        <div
          style={{
            borderWidth: '1px',
            borderColor: '#DDD',
            borderStyle: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding:'3vw',
            margin:'10px',
            height:'240px',
            width:'30%'
          }}
        >
          <p style={{ color: '#0072ff', fontSize: '3vw', fontWeight: 'bold' }}>
            بودكاست
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            margin:'10px'
          }}
        >
          {podcasts &&
            podcasts.map(podcast => {
              return (
                <a
                  key={podcast.id}
                  href={podcast.link}
                  target="_blank"
                >
                  <img src={podcast.pic.url} style={{ width:'100%' }} />
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
