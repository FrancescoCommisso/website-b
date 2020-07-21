import React, { useEffect } from "react"
import song from "../images/song.mp3"
import BackgroundSlider from "gatsby-image-background-slider"
import Typewriter from "typewriter-effect"
import { useStaticQuery } from "gatsby"
export default () => {
  useEffect(() => {
    let audio = new Audio(song)
    audio.loop = true
    audio.play()
    return () => {
      audio.pause()
    }
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        height: "100vh",
      }}
    >
      <h1
        style={{
          backgroundColor: "white",
          color: "purple",
          padding: "40px",
          textAlign: "center",
          borderRadius: "40px",
          margin: "50px",
          opacity: ".7",
        }}
      >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("Hey Baby!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Happy Birthday")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Love You More Than You Can Ever know")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Sorry my websites are always so ugly")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Thanks For Staying In The Car")
              .pauseFor(2500)
              .deleteAll()
              .start()
          }}
        />
      </h1>

      <div style={{ height: "50vh" }}>
        <BackgroundSlider
          initDelay={2}
          transition={4}
          duration={3} //
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile(
                filter: { sourceInstanceName: { eq: "backgrounds" } }
              ) {
                nodes {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 4000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
        />
      </div>
    </div>
  )
}
