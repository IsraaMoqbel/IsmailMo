import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './worksSection.css'
import ShowMoreButton from './showMoreButton'

class WorksSection extends React.Component {
  render() {
    const works = this.props.data.workses
    console.log(works, 'works')
    return (
      <div
        style={{
          margin: `0 auto`,
          height: 'auto',
          alignItems: 'center',
          paddingTop: '40px',
        }}
        id="works"
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
              أعمالي
            </p>
          </div>
          {works &&
            works.map(work => {
              return (
                <a
                  key={work.id}
                  href={work.link}
                  target="_blank"
                  style={{
                    width: '30%',
                    height: '280px',
                    backgroundColor: 'black',
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={work.pic.url}
                    style={{ width: '200px', alignSelf: 'center' }}
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

export const works = gql`
  query {
    workses(orderBy: status_ASC) {
      status
      link
      pic {
        url
      }
      id
    }
  }
`
export default graphql(works)(WorksSection)
