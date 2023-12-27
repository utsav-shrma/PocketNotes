import React from 'react'
import './EmptyView.css'
import imageUrl from './image-removebg-preview 1.png'
import lockImage from './lockImage.png'

function EmptyView() {
  return (
    <div id="empty-view-conatiner">
        <div id="empty-notes-list">
            <img src= {imageUrl}></img>
            <h1>Pocket Notes</h1>
            <p id='tag-line'>Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    
            
        </div>
        <div id="encrypted-line-container"><div id="encrypted-line"><img src={lockImage}></img><p>end-to-end encrypted</p></div></div>
        
    </div>
  )
}

export default EmptyView