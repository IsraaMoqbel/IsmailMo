import React from "react"
import ShowMoreButton from "./showMoreButton"

class BlogSection extends React.Component {
  render() {
    let arr = [1, 2, 3, 4, 5]
    return (
      <div
        style={{
          margin: `0 auto`,
          // padding:`0px`,
          height: "100vh",
          alignItems: "center",
          paddingTop: "40px",
        }}
        id="blog"
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
              المدونة
            </p>
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

export default BlogSection
