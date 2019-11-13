import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import GraphIMG from "graphcms-image"
import "./workSection.css"
import ShowMoreButton from "./showMoreButton"

class WorksSection extends React.Component {
  render() {
    console.log(this.props)
    const works = this.props.data.workses
    const work = works && works[0]
    console.log(work && work.pic)
    const img = {
      createdAt: "2019-05-22T13:54:23.569Z",
      fileName: "Valhalla_Java-ground-12oz-front_3qtrR_1024x1024.jpg",
      handle: "OkAVRJKROmmLbkdc8Xtw",
      height: 1001,
      id: "cjvzagqmp02ly09411vyql3bd",
      mimeType: "image/jpeg",
      size: 138541,
      status: "PUBLISHED",
      updatedAt: "2019-05-22T14:11:51.084Z",
      width: 1001,
      __typename: "Asset",
    }
    let arr = [1, 2, 3, 4]
    return (
      <div
        style={{
          margin: `0 auto`,
          // padding:`0px`,
          height: "100vh",
          alignItems: "center",
          paddingTop: "40px",
        }}
        id="works"
      >
        <div
          className="worksContainer"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap",
            height: "90%",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "280px",
              margin: "10px",
              borderWidth: "1px",
              borderColor: "#DDD",
              borderStyle: "solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: "#0072ff", fontSize: "3rem", fontWeight: "bold" }}
            >
              أعمالي
            </p>
          </div>

          <div
            style={{
              width: "30%",
              height: "280px",
              backgroundColor: "black",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!this.props.data.loading && (
              <GraphIMG
                image={work.pic}
                maxWidth={800}
                style={{ width: "200px" }}
                width={300}
              />
            )}
          </div>

          {arr.map(e => {
            return (
              <div
                key={e}
                style={{
                  width: "30%",
                  height: "280px",
                  backgroundColor: "black",
                  margin: "10px",
                }}
              ></div>
            )
          })}
          <ShowMoreButton handleMore={() => console.log("xxx")} />
        </div>
      </div>
    )
  }
}
export const works = gql`
  query {
    workses {
      status
      updatedAt
      createdAt
      id
      link
      pic {
        status
        updatedAt
        createdAt
        id
        handle
        fileName
        height
        width
        size
        mimeType
      }
    }
  }
`

// export default WorksSection
export default graphql(works)(WorksSection)
