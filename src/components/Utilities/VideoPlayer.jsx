"use client"
import { XCircle } from "@phosphor-icons/react"
import { Allerta_Stencil } from "next/font/google"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }
    const Player = () => {
        return (<div className="fixed bottom-2 right-4">
            <div>
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right"><XCircle size={32} /></button>
            </div>
            <YouTube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo}
                opts={option}
                onError={ () => alert("Video Is Broken, Try again another")}
            />
        </div>
        )
    }
    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="rounded fixed bottom-5 right-4 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all
    shadow-xl">
                Tonton Trailer
            </button>
        )
    }
    return isOpen ? <Player /> : <ButtonOpenPlayer />

}
export default VideoPlayer