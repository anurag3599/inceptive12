import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "transparent !important" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="../image/logo (1) (1).png" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ outline: "none", border: "none", color: "white" }}>
            <span class="navbar-toggler-icon" style={{ color: "white" }}></span>
          </button>
          <div class="collapse navbar-collapse my-3 mx-3" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item ">
                < Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/Token">Tokens</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/Road">Roadmap</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="https://docs.analog.live/analog-inception-1/analog-inception-fortune">Rewards</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/Faq">FAQ</Link>
              </li>
              <button type="button" class="headerBtn btn btn-outline-success" onClick={() => navigate("/login")}>Account</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
