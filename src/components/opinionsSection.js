import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './opinionsSection.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class OpinionsSection extends React.Component {
  render() {
    const clients = this.props.data.clientses
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div
        style={{
          height: 'auto',
          marginBottom: '90px',
        }}
        id="opinions"
      >
        <Slider {...settings}>
          {clients &&
            clients.map(e => {
              return (
                <div key={e.id}>
                  <div className="row">
                    <div className="culomn" style={{ width: '30%' }}>
                      <div
                        style={{
                          // margin: '10px auto',
                          // width: '50%',
                          height: '280px',
                          borderWidth: '1px',
                          borderColor: '#DDD',
                          borderStyle: 'solid',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '3vw',
                        }}
                      >
                        <p
                          style={{
                            color: '#0072ff',
                            fontSize: '3.5vw',
                            fontWeight: 'bold',
                          }}
                        >
                          آراء العملاء
                        </p>
                      </div>
                      <div>
                        <p>{e.opinion}</p>

                        <p style={{ fontWeight: 'bold', colog: 'black' }}>
                          {e.name}
                        </p>
                        <p>{e.clientTitle}</p>
                      </div>
                    </div>
                    <div>
                      <img src={e.pic.url} width="80%" />
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    )
  }
}

export const opinions = gql`
  query {
    clientses {
      clientTitle
      name
      opinion
      status
      pic {
        url
      }
      id
    }
  }
`

export default graphql(opinions)(OpinionsSection)
