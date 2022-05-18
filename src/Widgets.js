import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://www.space.com/26218-astrophysics.html"
                width="340px" height="100%" 
                style={{border: "none", overflow: "hidden"}}
                scrolling="no" frameborder="0"
                allowTransparency="false"
                allow="encrypted-media"
             ></iframe>
        </div>
    )
}

export default Widgets
