import React from 'react'
import './Road.css';
import Navbar from "./Navbar";
import $ from 'jquery';
import Footer from "./Footer";

function Road() {
    var Slider = function () {
        var total, $slide, $slider, sliderWidth, increment = 120;
        var on = function () {
            $slider = $('.slider');
            $slide = $('.slide');
            sliderWidth = $slider.width();
            total = $slide.length;
            position();

        }

        var position = function () {
            console.log("POS")
            //var sign, half = $('.active').index(), x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin;
            var sign, half = $('.active').index() ? $('.active').index() : 4, x = 0, z = 0, zindex, scaleX = 1.3, scaleY = 1.3, transformOrigin;
            console.log("POS", half);
            $slide.each(function (index, element) {
                scaleX = scaleY = 1;
                transformOrigin = sliderWidth / 2;
                if (index < half) {
                    sign = 1;
                    zindex = index + 1;
                    x = sliderWidth / 2 - increment * (half - index + 1);
                    z = -increment * (half - index + 1);
                } else if (index > half) {
                    sign = -1
                    zindex = total - index;
                    x = sliderWidth / 2 + increment * (index - half + 1);
                    z = -increment * (index - half + 1);
                } else {
                    sign = 0;
                    zindex = total;
                    x = sliderWidth / 2;
                    z = 1;
                    scaleX = scaleY = 1.2;
                    transformOrigin = 'initial';
                }
                $(element).css(
                    {
                        'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
                        'z-index': zindex,
                        'transform-origin-x': transformOrigin
                    }
                );
            });
        };

        var calculateX = function (position, sign, width) {
            switch (sign) {
                case 1:
                case 0: return position - width / 2;
                case -1: return position - width / 2;
                
            }
        }

        var imageSize = function () {
            return $slider.width() / 3;
        }

        var recalculateSizes = function () {
            sliderWidth = $slider.width();
            position();
        }

        var clickedImage = function () {
            $('.active').removeClass('active');
            $(this).addClass('active');
            position();
        }

        var addEvents = function () {
            $(window).resize(recalculateSizes);
            $(document).on('click', '.slide', clickedImage);
        }

        return {
            init: function () {
                on();
                addEvents();
            }
        };
    }();

    $(function () {
        var slider = Slider.init();
    })


    return (

        <>
            <div className="container-fluid wrap">

                <Navbar />

                <div className="container" >
                    <div className="col-md-12 col-sm-12 col-12 text-white">
                        <h1 style={{ marginTop: "20%", fontSize: "60px", marginBottom: "15%" }}>The Roadmap <br />Rank</h1>
                    </div>
                </div>

                <h1 class="main-title" style={{ color: "green", marginTop: "13%", color: "white", color: "#39ff14" }}>Roadmap </h1>
                <div class="slider" style={{ marginTop: "10%", marginBottom: "10%" }}>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q1 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q2 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q3 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q4 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q6 - 2022</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q7 - 2022</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q8 - 2022</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-container">
                            <h2 class="slide-Title">Q9 - 2022</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div><br/>





                <div class="container " style={{ marginTop: "5%", marginBottom: "10%" }}>
                    <ul class="prodNav">
                        <li id="pTab1" class="ptItem active">Tab 1</li>
                        <li id="pTab2" class="ptItem">Tab 2</li>
                        <li id="pTab3" class="ptItem">Tab 3</li>
                    </ul>

                    <div class="prodBody">
                        <div class="prodMain active" id="pTab1C">
                            Tab Container 1
                        </div>

                        <div class="prodMain" id="pTab2C">
                            Tab Container 2
                        </div>

                        <div class="prodMain" id="pTab3C">
                            Tab Container 3
                        </div>
                    </div>
                </div>

                <div class='container text-white ' style={{ marginTop: "25%" }} >
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 ">
                            <h2 className="" style={{ marginTop: "10%", fontSize: "50px", color: "#39ff14" }}>Get Involved</h2>
                            <p>
                                Lorem ipsum dolor sit.  Lorem ipsum<br /> dolor sit.  Lorem ipsum dolor sit.
                            </p>
                            <div className='btyh  my-5 mx-auto'>
                                <button type="button" class="btn btn-success ">Sign Up </button>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12  text-black ">
                            <figure className='d-flex justify-content-end'>
                                <img className='img-fluid' style={{ marginBottom: "25%" }} src="image/Asset 26.svg" alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>










                <Footer />

            </div>
        </>

    )
}

export default Road




