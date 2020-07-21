import React, { useState } from "react"
import { Link } from "gatsby"
import t from "./assets/t-hat.png"
import "./style.css"

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "purple", zIndex: 100, textAlign: "center" }}>
          Happy Birthday Boo
        </h1>
        <img className="rotate" src={t}></img>
        <Link
          style={{
            backgroundColor: "purple",
            color: "white",
            borderRadius: "30px",
            textAlign: "center",
            padding: "20px",
            textDecoration: "none",
            zIndex: 100,
          }}
          to="/reasons"
        >
          Click for some birthday sweeteness
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
