import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
import Progress from './Progress';
import Roadmap from "./Roadmap";
import Footer from "./Footer";
// import Document from "./Document";
import Lottie from 'react-lottie';
import circle_rotate from '../json/circle_rotate.json'
import circulation_daata from '../json/circulation_daata.json'
import team_photo from '../json/team_photo.json'
import $ from 'jquery';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Frontdesign() {
    // this.state = {isStopped: false, isPaused: false};
    const { isStopped } = useState(false)
    const { isPaused } = useState(false)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: circle_rotate,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: circulation_daata,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions6 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions7 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions8 = {
        loop: true,
        autoplay: true,
        animationData: team_photo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    $.fn.aksCountDown = function (options) {
        console.log("calledd")
        const aks = $(this);
        var settings = $.extend(
            {
                endTime: "",
                refresh: 1000,
                onEnd: function () { }
            },
            options
        );
        return this.each(function (i) {
            function endTimeCheck(d1, d2) {
                return (
                    d1.getFullYear() === d2.getFullYear() &&
                    d1.getMonth() === d2.getMonth() &&
                    d1.getDate() === d2.getDate()
                );
            }
            function countTimer() {
                var endTime = new Date(settings.endTime);
                endTime = Date.parse(endTime) / 1000;

                var now = new Date();
                now = Date.parse(now) / 1000;

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - days * 86400) / 3600);
                var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
                var seconds = Math.floor(
                    timeLeft - days * 86400 - hours * 3600 - minutes * 60
                );

                if (hours < "10") {
                    hours = "0" + hours;
                }
                if (minutes < "10") {
                    minutes = "0" + minutes;
                }
                if (seconds < "10") {
                    seconds = "0" + seconds;
                }

                $(aks).find("[data-days]").html(days);
                $(aks).find("[data-hours]").html(hours);
                $(aks).find("[data-minutes]").html(minutes);
                $(aks).find("[data-seconds]").html(seconds);
            }
            var now = new Date();
            var endTime = new Date(settings.endTime);

            if (endTimeCheck(now, endTime) === true) {
                settings.onEnd.call(aks);
            } else {
                setInterval(function () {
                    countTimer();
                }, settings.refresh);
            }
        });
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsiveOne = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    const responsiveTwo = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };
    const responsiveThree = {
        superLargeDesktop: {
          
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        $("#timer").aksCountDown({
            endTime: "15 June 2022 9:56:00 GMT+01:00",
            onEnd: function () {
                $(this).html('<div class="timer-end">Finished Time</div>');
            }
        });

    }, [])

    return (
        <div>
            <div className="container-fluid wrapper">

                <Navbar />

                <section id="header" className=" pt-5 " style={{ marginTop: "9%", marginLeft: "8%" }}>
                    <div className="container-fluid nav_bg banner pt-5">
                        <div className="row ">
                            <div className="col-12 mx-auto">
                                <div className="row">
                                    <div className='col-md-6 pt-5 pt-lg-0 order-2  order-lg-1 mt-5'>
                                        <h1 className='tyur mx-3 '><strong>  Revolutionsing The investment management industry</strong></h1>

                                        <p className='my-4 mx-3 text-white'>throught articial intelligence</p>
                                        <div className='mt-5'>
                                            <a href="" className='btn btn-success mx-md-4 mx-sm-0 ' >Join</a>
                                            <a href="" className="btn btn-light my-3 mx-1"><b>Token Sale</b></a>
                                        </div>

                                    </div>
                                    <div className='counter col-lg-6 col-md-6 col-sm-12 pt-5 pt-lg-0 order-2   mt-5 shadow mb-5 bg-white ' style={{ marginTop: "10px" }}>
                                        <div className='pt-3 d-flex justify-content-center'>
                                            <h3 style={{ fontSize: "25px" }}><b>Token sale Ends in</b> </h3>
                                        </div>

                                        <div id="timer">
                                            <div class="unit-list my-3 mx-5">
                                                <div class="item">Days</div>
                                                <div class="item">Hours</div>
                                                <div class="item">Minutes</div>
                                                <div class="item">Seconds</div>
                                            </div>
                                            <div class="number-list mx-md-5">
                                                <div class="item" data-days="">00</div>
                                                <div class="item" data-hours="">00</div>
                                                <div class="item" data-minutes="">00</div>
                                                <div class="item" data-seconds="">00</div>
                                            </div>


                                            <div className='progress-box ' style={{ marginTop: "10px" }}>
                                                <div class="bar-legend my-3 text-center">$18.090 pledget of $25.000 goal</div>
                                                <div class="progress">
                                                    <div class="progress-value"></div>
                                                </div>
                                            </div>

                                            <div class="link-box">
                                                <a href="#" class="theme-btn btn-style-three">
                                                    <button type="button" class="btn btn-outline-success" style={{ width: "100%", marginTop: "30px" }}>PURCHASE TOKEN</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class='container' style={{ marginTop: "4%" }}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6">
                            <figure>
                                <img className='img-fluid' src="image/Asset100.svg" alt="about image"></img>
                            </figure>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 text-white">
                            <h1 className="allhead" style={{ fontSize: "48px", color: "#39ff14",marginBottom:"6%" }}><b > What is Prediction</b></h1>
                            <p className="allp" style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content
                            </p>
                        </div>
                    </div>
                </div>

                <div class='container'>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 mt-5 text-white  " >
                            <p style={{ textAlign: "justify", marginTop: "35%" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content
                            </p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 text-white" style={{ marginTop: "7%" }}>
                            <figure className="pcImg d-flex justify-content-end" style={{ marginLeft: "15%", marginTop: "10%" }}>
                                <img className='img-fluid' style={{ width: "536px" }} src="image/Asset101.svg " alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>

                <div class='container'>
                    <div class="row">
                        <div class="col-12 text-center">
                            <figure>
                                <img style={{ width: "200px" }} src="image/Asset102.svg" alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>

                <h3 className='text-center pt-3 text-white'><strong>How artifical intelligence & blockchain is revolutionising <br />investment management</strong></h3>

                <div class="container">
                    <div className="row">
                        <div className="col-md-12 col-12 text-center">
                            <img style={{ width: "100%" }} src="image/Asset 5.png" alt="about image"></img>
                        </div>
                    </div>
                </div>



                <div className=" container mx-auto text-dark  ">
                    <div className="row" style={{ marginTop: "3%" }}>
                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 ">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>


                        <div className="contentss  col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" container mx-auto text-dark  ">
                    <div className="row" style={{ marginTop: "8%", color: "#39ff14" }}>
                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className=' mx-auto  text-white'>
                                    <h1 style={{ color: "#39ff14" }}>Solution</h1>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 ">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset104.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>


                        <div className="contentss  col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset105.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset106.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p style={{ textAlign: "justify" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className='text-center pt-3  text-white' style={{ marginTop: "7%",color:"#39ff14"}}><strong style={{color:"#39ff14"}}>Alpha Platform Launched Since January</strong></h3>

                <div className=" container mx-auto text-dark text-center  ">
                    <div className="row" style={{ marginTop: "7 %" }}>
                        <div className="col-md-6">
                            <div className="card my-2 mx-3">
                                <h3 className=' infoDiv'>
                                    70%
                                </h3>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p>Number of unique tokens that <br /> are tracked.</p>
                                </div>
                            </div>
                            <div className="card my-2 mx-3">
                                <h3 className=' infoDiv'>
                                    70%
                                </h3>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p>Number of unique tokens that <br /> are tracked.</p>
                                </div>
                            </div>
                        </div>



                        <div className="contentss  col-md-6">
                            <div className="card my-2 mx-3">
                                <h3 className=' infoDiv'>
                                    5+ million
                                </h3>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p>Number of unique tokens that <br /> are tracked.</p>
                                </div>
                            </div>





                            <div className="card my-2 mx-3">
                                <h3 className=' infoDiv'>
                                    20 000
                                </h3>
                                <div className="content  text-white" style={{ marginTop: "5%" }}>
                                    <p>Number of unique tokens that <br /> are tracked.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='container ' style={{ marginTop: "7%" }} >
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 ">
                            <h2 className='text-center text-white' style={{ marginTop: "10%" }}>Alpha Platform title</h2>
                            <div className='btyh text-center my-5'>
                                <button type="button" class="btn btn-success ">Text alpha </button>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 text-black ">
                            <figure className='d-flex justify-content-end'>
                                <img className='img-fluid' src="image/Asset100.svg" alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>


                <div class='container px-sm-1' style={{ marginTop: "8%", marginBottom: "8%" }}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 text-dark">
                            <h1 className="allhead text-white" style={{ fontSize: "48px", color: "#39ff14",marginBottom:"4%" }}><b style={{ color: "#39ff14" }}> What is Prediction</b></h1>
                            <p style={{ textAlign: "justify", color: "white" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content
                            </p>
                        </div>
                        <div class="col-lg-5 col-md-5 col-12 col-xxl-5 offset-1">
                            <figure>
                                <img className='img-fluid' src="image/Asset100.svg" alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className='container plathead'>
                    <div className="row text-white" style={{ marginLeft: "60%", marginTop: "10%", }}>
                        <h1 className="h" style={{ color: "#39ff14" }}>Who is the Platform  for?</h1>
                    </div>
                </div>

                <div className="container platcont mx-auto" style={{ marginTop: "-3%" }}>
                    <div classname="row d-flex">
                        <div className="mar offset-3 offset-md-7 offset-lg-7 col-12 col-sm-12 Col-md-12" >
                            <div className="cloud text-white">
                                <img src="image/Asset107.svg" alt="" className='"imgAbsolute1 imge' style={{ height: "65px" }} />
                                <div style={{ fontSize: "20px" }}><b className="h">Investor</b></div>
                                <p className="p" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptas.</p>
                            </div>
                            <div className="cloud1 text-white">
                                <img src="image/Asset108.svg" alt="" className='"imgAbsolute1 imge' style={{ height: "65px" }} />
                                <div style={{ fontSize: "20px" }}><b className="h">Founders</b></div>
                                <p className="p" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptas.</p>
                            </div>
                        </div>
                    </div>
                    <div classname="row d-flex">
                        <div className="mar offset-3 offset-md-7 offset-lg-7  col-12 col-sm-12" >
                            <div className="cloud2 text-white">
                                <img src="image/Asset109.svg" alt="" className='"imgAbsolute1 imge' style={{ height: "65px" }} />
                                <div style={{ fontSize: "20px" }}><b className="h">Researches</b></div>
                                <p className="p" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptas.</p>
                            </div>
                            <div className="cloud3 text-white">
                                <img src="image/Asset110.svg" alt="" className='"imgAbsolute1 imge' style={{ height: "65px" }} />
                                <div style={{ fontSize: "20px" }}><b className="h">data scientists</b></div>
                                <p className="p" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ padding: "0px 50px 50px 0px" }}>
                    <div className="row">
                        <div className="col-md-12 col-12 text-center text-white">
                            <h3 style={{ fontSize: "50px",color:"#39ff14" }}>Our Documents</h3>
                        </div>
                    </div>
                </div>




                <div className=" container mx-auto text-dark  ">
                    <div className="row">
                        <Carousel responsive={responsiveOne}>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white" style={{ marginTop: "5%" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white " style={{ marginTop: "5%" }}>
                                        <p>Whitepaper </p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white" style={{ marginTop: "5%" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white " style={{ marginTop: "5%", textAlign: "" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white " style={{ marginTop: "5%", textAlign: "" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white " style={{ marginTop: "5%", textAlign: "" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card my-2 mx-3">
                                    <div className='imgDivv mx-auto'>
                                        <img src="image/Asset 16@72x.png" class="img-fluid abouts_img" alt="img" />
                                    </div>
                                    <div className="contents text-white " style={{ marginTop: "5%", textAlign: "" }}>
                                        <p>Whitepaper</p>
                                        <select name="" id="" className='form-control selectform' style={{ width: "130px", textAlign: "center", border: "2px solid #39ff14", background: "none", color: " white" }}>
                                            <option selected="selected" value="">select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div class='container' style={{ marginTop: "4%" }} >
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-12 text-white">
                            <h1 style={{ marginLeft: "20%" }} ><b className="position" style={{position:"relative",left:"342px",color: "#39ff14",fontSize: "50px",    fontWeight:"100"}}>About Token</b></h1>
                        </div>

                        <div class=" col-lg-7 col-md-7 col-12  text-white" style={{ marginTop: "5%" }} >
                            <p className="position" style={{ textAlign: "justify",position:"relative",top:"335px" }}>The lorem ipsum is a placeholder text used in publishing and graphic design. The lorem ipsum is a placeholder text used in publishing and graphic design. The lorem ipsum is a placeholder text used in publishing and graphic design. The lorem ipsum is a placeholder text used in publishing and graphic design.The lorem ipsum is a placeholder text used in publishing and graphic design. The lorem ipsum is a placeholder text used in publishing and graphic design.
                            </p>
                        </div>
                    </div>
                </div>


                <div class='container' style={{ marginTop: "-4%", }}>
                    <div class="row">
                        <div class=" col" >
                            <figure className='josnimg'>
                                {/* <img className='img-fluid' src="../json/circle_rotate.json" alt="about image"></img> */}
                                <Lottie options={defaultOptions}
                                    // height={400}
                                    // width={400}
                                    isStopped={isStopped}
                                    isPaused={isPaused} />
                            </figure>
                        </div>

                    </div>
                </div>

                <Progress />

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-5 text-white" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores esse aperiam quod sequi fuga. Molestias, minus. Asperiores, ut quia commodi deleniti labore ea voluptatem expedita quaerat porro tempora cumque neque!.

                        </div>
                        <div className=" pt-4 col-md-2 d-flex flex-column align-items-flex-end justify-content-center " style={{ borderRadius: "10%", }}>
                            <button className='btn' style={{
                                backgroundColor: "transparent",
                                border: '1px solid #00ff58',
                                color: "#00ff58",
                                borderRadius: "5%",
                            }}>
                                Fund distribution
                            </button>
                            <p style={{ marginLeft: "18%", paddingTop: "10%", color: "white" }}><b>Token Distribution</b></p>
                        </div>
                        <div className=" pt-4 col-md-5 d-flex  align-items-start justify-content-md-end justify-content-sm-center " style={{ paddingLeft: "71px" }}   >
                            <figure className='josnimg11'>
                                <Lottie options={defaultOptions1}
                                    // height={400}
                                    // width={400}
                                    isStopped={isStopped}
                                    isPaused={isPaused} />
                            </figure>
                            {/* <img className='img-fluid' src="image/Asset 19@72x.png" alt="about image"></img> */}
                        </div>
                    </div>
                </div>

                {/* card */}

                <div class="container cardCont" style={{ marginTop: "10%" }}>
                    <div className="row">

                        <Carousel responsive={responsiveTwo} >

                            <div class="col-12 ">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="int-div">
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div2">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="zoom">
                                    <a href="#">
                                        <div class="div3">
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>


                <div className="container mx-auto my-5">
                    <div className="row">
                        <div className="col-md-4 col-12 mx-auto allhead" style={{ fontSize: "40px", paddingTop: "10%", color: "#39ff14" }}><b>Decentralised <br />Algorithmic<br />Initial Token <br />Sale (DAITO)</b> </div>
                        <div className="col-md-4 col-12  mx-auto"></div>
                        <div className="col-md-4 col-12  mx-auto text-" style={{ fontSize: "15px", paddingTop: "10%", textAlign: "justify", color: "white" }}>Lorem ipsum dolor sit Lorem ipsum dolor sit  Lorem ipsum dolor sit Lorem ipsum dolor sit  Lorem ipsum dolor sit
                            Lorem ipsum dolor sit  Lorem ipsum dolor sit  Lorem ipsum dolor sit  Lorem ipsum dolor sit Lorem ipsum dolor sit  </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12">
                            <h3 className="allhead" style={{ paddingTop: "8%", color: "white" }}><b>How will the Datio Work?</b></h3>
                        </div>
                    </div>
                </div>

                <div className=" container mx-auto text-dark  ">

                    <div className="row" style={{ marginTop: "7%", textAlign: "justify" }}>


                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content" style={{ marginTop: "5%", textAlign: "justify", color: "white" }}>

                                    <p> Lorem ipsum dollar sit  Lorem ipsum dollar sit  Lorem ipsum dollar sit </p>

                                </div>
                            </div>
                        </div>


                     `   <div className="col-md-3 ">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit  Lorem ipsum dollar sit  Lorem ipsum dollar sit </p>
                                </div>
                            </div>
                        </div>`


                        <div className="contentss  col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content" style={{ marginTop: "5%", textAlign: "justify", color: "white" }}>

                                    <p>Lorem ipsum dollar sit  Lorem ipsum dollar sit  Lorem ipsum dollar sit </p>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDiv mx-auto'>
                                    <img src="image/Asset103.svg" class="img-fluid abouts_img" alt="img" />
                                </div>
                                <div className="content" style={{ marginTop: "5%", textAlign: "justify", color: "white" }}>

                                    <p>Lorem ipsum dollar sit  Lorem ipsum dollar sit  Lorem ipsum dollar sit .</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h1 style={{ marginTop: "7%", textAlign: "center", color: "#39ff14" }}>what advantages do DAITOS have over ICOs?</h1>

                            {/* <figure>
                                <img className='img-fluid' src="image/Asset 22.svg" alt="about image"></img>
                            </figure> */}




                            <div className="container">
                                <div className="row">
                                    <div className="col-6">

                                    </div>
                                    <div className="col-3 text-center text-white" style={{ borderBottom: "1px dotted #39ff14", backgroundColor: "" }}>
                                        <h3>ICOs</h3>
                                    </div>
                                    <div className="col-3 text-center text-white" style={{ borderBottom: "1px dotted #39ff14" }}>
                                        <h3>INRXs</h3>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Aligned interest  between <br />investor and team</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Ability to  raise follow - on <br />funding</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Transparency requirement</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Return on capital</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Return on capital</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                                <div className="row p-2" style={{ borderBottom: "1px dotted #39ff14" }}>
                                    <div className="col-6 text-white">
                                        <p><b>Return on capital</b></p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                    <div className="col-3 text-white">
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .</p>
                                    </div>
                                </div>
                            </div>












                            <h3 style={{ marginTop: "14%", textAlign: "center", color: "white" }}>More question On Daitos ?  Read our FAQs</h3>


                            <h3 style={{ paddingTop: "14%", textAlign: "center", fontSize: "50px", color: "white" }}><b>Enter Your Email To Subscribe</b></h3>

                            <section class="section no-pdy section-contact bg-transparent has-ovm" style={{ marginTop: "8%" }}>
                                <div class="container">
                                    <div class="nk-block block-contact">
                                        <div class="row justify-content-center g-0">
                                            <div class="col-lg-8 col-12">
                                                <div class="subscribe-wrap bg-grad tc-light round">
                                                    <div class="section-head section-head-sm wide-auto-sm text-center">
                                                        <h4 class="title title-sm" style={{ color: "white" }}>Dont miss out, Be the first to know</h4>
                                                        <p class="text-white">Get notified about the details of the Token Sale in May, as well as other important development update.</p>
                                                    </div>
                                                    <form action="form/subscribe.php" class="nk-form-submit" method="post" novalidate="novalidate">
                                                        <div class="field-inline field-inline-s2 bg-white shadow-soft">
                                                            <div class="field-wrap">
                                                                <input class="input-solid required email" type="text" name="contact-email" placeholder="Enter your email" style={{ border: "1px solid black" }} />
                                                                <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                                                            </div>
                                                            <div class="submit-wrap">
                                                                <button class="btnn btnn-secondary">Let Me Join</button></div>
                                                        </div>
                                                        <div class="form-results">
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="container  my-2" style={{ paddingTop: "8%" }} >
                    <div className="row my-5">
                        <div className="col-md-3 text-white ">
                            <h2 style={{ color: "#39ff14" }}><b>Featured <br />On</b></h2>
                            <div classname="arrow d-flex flex-row  " style={{ display: "flex" }}>
                                <div className="leftArr">
                                    <img src="image/Asset 23.svg" className='img-fluid' alt="" />
                                </div>
                                <div className="rightArr">
                                    <img src="image/Asset 24.svg" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 mx-sm-auto">
                            <div className="card featuredCard shadow p-3 mb-5 bg-white rounded">
                                <AiFillStar />
                            </div>
                        </div>

                        <div className="col-md-3 mx-sm-auto">
                            <div className="card featuredCard shadow p-3 mb-5 bg-white rounded">
                                <AiFillStar />
                            </div>
                        </div>

                        <div className="col-md-3 mx-sm-auto">
                            <div className="card featuredCard shadow p-3 mb-5 bg-white rounded">
                                <AiFillStar />
                            </div>
                        </div>
                    </div>
                </div>

                <Roadmap />

                <div className="container " style={{ marginTop: "4%" }}>
                    <div className="row">
                        <div className="col-md-12 text-white">
                            <h1>
                                <b className="allhead" style={{ color: "#39ff14" }}> Team Leadership</b>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className=" container mx-auto text-dark  ">
                    <div className="row" style={{ marginTop: "7%" }}>
                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions2}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 ">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions3}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="contentss  col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions4}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions5}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container " style={{ marginTop: "10%" }}>
                    <div className="row">
                        <div className="col-md-12 text-white">
                            <h1 style={{ color: "#39ff14" }}>
                                <b > Advisors</b>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className=" container mx-auto text-dark  ">
                    <div className="row" style={{ marginTop: "7%" }}>
                        <div className="col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions6}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 ">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions7}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="contentss  col-md-3">
                            <div className="card my-2 mx-3">
                                <div className='imgDivvv mx-auto'>
                                    <Lottie options={defaultOptions8}
                                        height={207}
                                        width={207}
                                        isStopped={isStopped}
                                        isPaused={isPaused} />
                                    {/* <img src="image/Asset 25.svg" class="img-fluid abouts_im" alt="img" /> */}
                                </div>
                                <div className="content" style={{ marginTop: "5%", color: "white" }}>
                                    <p>Lorem ipsum dollar sit.Lorem ipsum dollar sit.Lorem ipsum dollar sit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container " style={{ textAlign: "center", marginTop: "8%" }}>
                    <div className="row">
                        <div className="col text-white">
                            <h1 style={{ color: "#39ff14" }}>Partners title</h1>
                            <div className="nextBtn">
                                <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-left" style={{ color: "#39ff14", fontSize: "20px" }}></i></button>
                                <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-right" style={{ color: "#39ff14", fontSize: "20px" }}></i></button>
                            </div>
                        </div>
                    </div>
                </div>   

                <div className="container " style={{ marginTop: "10%" }}>
                    <div class="row">
                        <div class="col-sm-3 ">
                            <div class="service-card ">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3 style={{ color: "white" }}>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3 style={{ color: "white" }}>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3 style={{ color: "white" }}>CODEPEN</h3>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3 style={{ color: "white" }}>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container " style={{ textAlign: "center", marginTop: "8%" }}>
                    <div className="row">
                        <div className="col">
                            <h1><b>Legals & Banking Partners Logo</b></h1>
                            <div className="nextBtn">
                                <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-left" style={{ color: "green", fontSize: "20px" }}></i></button>
                                <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-right" style={{ color: "green", fontSize: "20px" }}></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "10%" }}>
                    <div className="row">

                        <div class="col-sm-4">

                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="service-card">
                                <div class="card">
                                    <i class="fab fa-codepen"></i>
                                    <h3>CODEPEN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="container" style={{ marginTop: "10%" }}>
                    <div className="row">
                        <div className="col">
                            <h1 style={{ textAlign: "center", color: "white", color: "#39ff14" }}><b>ICO RATING</b></h1>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto" style={{ marginTop: "4%" }}>

                    <Carousel responsive={responsive}>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/a.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/b.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul></div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/c.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul></div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/d.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/e.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul></div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/a.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/b.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/c.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/d.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/e.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/a.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/b.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/c.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="hexagon">
                            <ul class="rank-list">
                                <li class="rank-item">
                                    <img src="image/d.png" alt="logo" />
                                    <div class="rank-count">4.7
                                        <span>/5</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Carousel>
                </div>

                <div class='container text-white ' style={{ marginTop: "25%" }} >
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 ">
                            <h2 className="" style={{ marginTop: "10%", fontSize: "50px", color: "#39ff14" }}>Get Involved</h2>
                            <p >
                                Lorem ipsum dolor sit.  Lorem ipsum<br /> dolor sit.  Lorem ipsum dolor sit.
                            </p >
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
            </div >






        </div >

    )
}

export default Frontdesign
