import React from "react"
import personalImage from "./image.png"

class MainSection extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "#eaeaea",
          margin: "0 auto",
          padding: "0px",
          height: "85vh",
        }}
      >
        <hr />
        <div
          style={{
            margin: "0 auto",
            textAlign: "-webkit-right",
            display: "flex",
            flexDirection: "row",
            height: "100%",
            justifyContent: "center",
            marginLeft: 20,
            marginRight: 20,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "5px",
                fontSize: 24,
                margin: 0,
                width: "fit-content",
              }}
            >
              أهلًا بك في مدونتي
            </p>
            <h1 style={{ font: "3rem", letterSpacing: "2.3px" }}>
              إسماعيل محمد مقبل
            </h1>
            <h1 style={{ fontFamily: "sans-serif", fontWeight:"lighter" }}>
              Graphic Designer - Video Editor
            </h1>
          </div>

          <div>
            <img
              src={personalImage}
              style={{
                width: "auto",
                height: "-webkit-fill-available",
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainSection
