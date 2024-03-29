import React from 'react'
class ShowMoreButton extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          // padding: `0px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '20px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#DDD',
          maxWidth: 'max-content',
          marginBottom: '10px'
        }}
        onClick={() => this.props.handleMore()}
        className="button box"
      >
        <p
          style={{
            color: '#0072ff',
            fontSize: '1.2rem',
            margin: '0 auto',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          عرض المزيد
        </p>
      </div>
    )
  }
}

export default ShowMoreButton
