// import React from 'react'

// export const GifGridItem = (props) => {
  export const GifGridItem = ({title, url, id}) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
      GifGridItem
    </div>
  )
}

