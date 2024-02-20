import React from "react";
import "./navbar.css";
function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light custom-navbar p-3">
            <a class="navbar-brand text-light" href="/">Farmer's Spot</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav  ml-auto">
                <a class="text-light nav-item nav-link navbar-text active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="text-light nav-item nav-link navbar-text" href="/login">Login</a>
                <a class="text-light nav-item nav-link navbar-text" href="/about">About</a>
                <a class="text-light nav-item nav-link navbar-text" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

function FarmerNavbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light custom-navbar p-3">
            <a class="navbar-brand text-light" href="/">Farmer's Spot</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <a class="text-light nav-item nav-link  navbar-text active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="text-light nav-item nav-link  navbar-text" href="/about">About Us</a>
                <a class="text-light nav-item nav-link  navbar-text" href="/weather">Weather</a>
                <a class="text-light nav-item nav-link  navbar-text" href="/AddProduct">Add Product</a>
                <a class="text-light nav-item nav-link  navbar-text" href="/">Government Schemes</a>
                <a class="text-light nav-item nav-link  navbar-text" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export {Navbar};
export {FarmerNavbar};