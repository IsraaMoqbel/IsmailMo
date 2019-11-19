import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './worksSection.css'
import ShowMoreButton from './showMoreButton'

class WorksSection extends React.Component {
  state = {
    showItems: 5,
    works: [],
  }
  handleShowMore = () => {
    this.setState({
      showItems: this.state.showItems + 3,
    })
  }
  componentDidUpdate(prevProp) {
    this.props.data !== prevProp.data &&
      this.setState({ works: this.props.data.workses })
  }

  render() {
    const { works, showItems } = this.state
    return (
      <div
        style={{
          margin: `0 auto`,
          height: 'auto',
          alignItems: 'center',
          paddingTop: '40px',
          flexWrap:'wrap'
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
            className="box"

          >
            <p
              style={{
                color: '#0072ff',
                fontSize: '3.5vw',
                fontWeight: 'bold',
              }}
            >
              أعمالي
            </p>
          </div>
          {works &&
            works.slice(0, showItems).map(work => {
              return (
                <a
                  key={work.id}
                  href={work.link}
                  target="_blank"
                  style={{
                    width: '30%',
                    height: '280px',
                    backgroundColor: 'rgb(16, 22, 48)',
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="box"
                  title={work.link || 'اضغط لمشاهدة هذا العمل'}
                >
                  <img
                    src={work.pic.url}
                    style={{ width: '50%', alignSelf: 'center' }}
                  />
                </a>
              )
            })}
        </div>
        {works.length >= showItems && (
          <ShowMoreButton handleMore={this.handleShowMore} />
        )}
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
