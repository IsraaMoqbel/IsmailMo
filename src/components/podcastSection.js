import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
class PodcastSection extends React.Component {
  render() {
    const podcasts = this.props.data.podcasts
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: '20px',
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
            padding: '3vw',
            margin: '10px',
            height: '240px',
            width: '30%',
          }}
        >
          <p style={{ color: '#0072ff', fontSize: '2.5vw', fontWeight: 'bold' }}>
            بودكاست
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px',
            width:'70%'
          }}
        >
          {podcasts &&
            podcasts.map(podcast => {
              return (
                <a key={podcast.id} href={podcast.link} target="_blank" style={{width:'100%'}}>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${podcast.link}`}
                  ></iframe>
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
