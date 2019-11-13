import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./header.css"

library.add(fab)
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#eaeaea`,
    }}
    id="main"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        paddingBottom: `0`,
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0 }}>
          <a
            href="#main"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            الرئيسية
          </a>
        </p>
      </div>
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0 }}>
          <a
            href="#whoAmI"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            من أنا
          </a>
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="#works"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            أعمالي
          </a>
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="#blog"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            المدونة
          </a>
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="#opinions"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            آراء العملاء
          </a>
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="#broadcast"
            style={{
              color: `#666`,
              textDecoration: `none`,
              margin: "10px",
            }}
          >
            بودكاست
          </a>
        </p>
        <div
          style={{
            margin: `0 auto`,
            padding: `0px`,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <a href="https://www.facebook.com/Ismail.Moqbel123" className="header-item" target="_blank">
            <FontAwesomeIcon className="icons" icon={["fab", "facebook-f"]} />
          </a>
          <a href="https://twitter.com/IsmailMoqbel" className="header-item" target="_blank">
            <FontAwesomeIcon className="icons" icon={["fab", "twitter"]} />
          </a>
          <a href="https://www.instagram.com/ismailmoqbel/" className="header-item" target="_blank">
            <FontAwesomeIcon className="icons" icon={["fab", "instagram"]} />
          </a>
          <a href="" className="header-item">
            <FontAwesomeIcon className="icons" icon={["fab", "youtube"]} target="_blank"/>
          </a>
          <a href="00970592727704" className="header-item">
            <FontAwesomeIcon className="icons" icon={["fab", "whatsapp"]} />
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
