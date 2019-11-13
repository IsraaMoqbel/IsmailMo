import React from "react"
import Background from "../images/Group_4.png"

class WhoAmISection extends React.Component {
  render() {
    return (
      <div
        style={{
          // background: `#DDD`,
          margin: `0 auto`,
          padding: `0px`,
          height: "100vh",
          backgroundColor: `rgba(0,0,0,0)`,
          backgroundImage: `url(${Background})`,
          backgroundSize: `cover`,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        id="whoAmI"
      >
        <div
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderWidth: "5px",
              borderColor: "white",
              borderStyle: "solid",
              padding: "120px",
              margin: "25px",
            }}
          >
            <h1
              style={{
                color: "white",
                width: "max-content",
                fontSize: "3.5rem",
              }}
            >
              من أنا؟
            </h1>
          </div>
          {/* <div style={{  }}> */}
          {/* <img src={Background} /> */}
          <div>
            <p
              style={{
                color: "white",
                margin: "25px",
                // maxWidth: "60%",
                // margin: "0 auto",
                
                fontSize: "2rem",
              }}
            >
              أنا إسمـاعيل مقبل فلسطيـني من مديـنة غزة، أعمل في المجال الإبداع
              البصري، فيما يعرف بالتصميم الجرافيكي من ناحية الصور، والمونتاج
              والتحريـك من نـاحية الفيديو، حيث عملـت مع مؤسسـات عريقة محلية
              ودوليـة، وأتمـنى مـن خلال زيـارتك لموقعـي، أن تعـجب بمـا أقدمه من
              محـتوى
            </p>
          </div>
        </div>

        {/* </div> */}
      </div>
    )
  }
}

export default WhoAmISection
