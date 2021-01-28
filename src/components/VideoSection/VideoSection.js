import React from 'react'
import { Button } from '../Button/Button'
import './VideoSection.css'
import '../../App.css'

function VideoSection() {
    return (
        <div className="hero-container">
            <video src="/Videos/video.mp4" autoPlay loop muted />
            <h1>Cookies Awaits</h1>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Enter Our Bakery</Button>
            </div>
        </div>
    )
}

export default VideoSection

