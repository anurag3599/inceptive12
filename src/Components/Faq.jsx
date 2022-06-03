import React, { useEffect } from 'react'
import './Faq.css';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Token() {


    //   useEffect(()=>{
    function aClick(i) {
        let accordions = document.querySelectorAll(".accordion");
        // accordions.forEach((element) => {
        // accordions[i].querySelector(".accordion__header").addEventListener("click", () => {
        toggleAccordion(accordions[i]);
        // });
        // });

        function toggleAccordion(element) {


            let isActive = element.classList.contains("active");
            if (document.querySelectorAll(".accordion.active").length > 0) {
                document.querySelector(".accordion.active .accordion__body").style.width =
                    document.querySelector(".accordion.active .accordion__header")
                        .offsetWidth + "px";
                document.querySelector(".accordion.active .accordion__body").style.height =
                    document.querySelector(".accordion.active .accordion__header")
                        .offsetHeight + "px";
                document.querySelector(".accordion.active").classList.remove("active");
            }
            if (isActive) {
                element.querySelector(".accordion__body").style.width =
                    element.querySelector(".accordion__header").offsetWidth + "px";
                element.querySelector(".accordion__body").style.height =
                    element.querySelector(".accordion__header").offsetHeight * 0.5 + "px";



                element.classList.remove("active");
            } else {
                element.querySelector(".accordion__body").style.width =
                    element.querySelector(".accordion__inner").offsetWidth + "px";
                element.querySelector(".accordion__body").style.height =
                    element.querySelector(".accordion__inner").offsetHeight + "px";
                element.classList.add("active");
            }
        }
    }


    return (

        <>
            <div className="container-fluid wrap">
                <Navbar />



                <div className="container">
                    <div className="col-md-12 col-sm-12 col-12 text-white">
                        <h1 style={{ marginTop: "20%", fontSize: "60px" }}>Frequently Asked <br />Question</h1>
                    </div>
                </div>
                <div class="accordions">
                    <div class="accordion active" onClick={() => aClick(0)} style={{ marginTop: "10%" }}>
                        <div class="accordion__header">
                            <div class="accordion__icon">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#1AB959" />
                                    <path d="M12.5 8V16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 12H16.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="accordion__title">What is Daito</div>
                        </div>
                        <div class="accordion__body" style={{ width: "304px", height: "249px" }}>
                            <div class="accordion__inner">
                                <div class="accordion__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='news' style={{ marginTop: "2%", width: "800px" }} />



                    <div class="accordion" onClick={() => aClick(1)} style={{ marginTop: "3%" }}>
                        <div class="accordion__header">
                            <div class="accordion__icon">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#1AB959" />
                                    <path d="M12.5 8V16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 12H16.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="accordion__title">What are the main characterstic of PRED Daito?</div>
                        </div>
                        <div class="accordion__body">
                            <div class="accordion__inner">
                                <div class="accordion__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr className='news' style={{ marginTop: "2%", width: "800px" }} />


                    <div class="accordion" onClick={() => aClick(2)} style={{ marginTop: "3%" }}>
                        <div class="accordion__header">
                            <div class="accordion__icon">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#1AB959" />
                                    <path d="M12.5 8V16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 12H16.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="accordion__title">What are the main characterstic of PRED Daito?</div>
                        </div>
                        <div class="accordion__body">
                            <div class="accordion__inner">
                                <div class="accordion__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='news' style={{ marginTop: "2%", width: "800px" }} />

                    <div class="accordion" onClick={() => aClick(3)} style={{ marginTop: "3%" }}>
                        <div class="accordion__header">
                            <div class="accordion__icon">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#1AB959" />
                                    <path d="M12.5 8V16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 12H16.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="accordion__title">What are the main characterstic of PRED Daito?</div>
                        </div>
                        <div class="accordion__body">
                            <div class="accordion__inner">
                                <div class="accordion__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr className='news' style={{ marginTop: "2%", width: "800px" }} />


                    <div class="accordion" onClick={() => aClick(4)} style={{ marginTop: "3%" }}>
                        <div class="accordion__header">
                            <div class="accordion__icon">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#1AB959" />
                                    <path d="M12.5 8V16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 12H16.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="accordion__title">What are the main characterstic of PRED Daito?</div>
                        </div>
                        <div class="accordion__body">
                            <div class="accordion__inner">
                                <div class="accordion__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </div>
                            </div>
                        </div>
                    </div>
                </div>










                <div class='container text-white ' style={{ marginTop: "30%" }} >
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 col-xxl-6 ">
                            <h2 className='text-center' style={{ marginTop: "10%", fontSize: "50px", marginRight: "15%" }}>Get Involved</h2>
                            <p style={{ marginLeft: "22%" }}>
                                Lorem ipsum dolor sit.  Lorem ipsum<br /> dolor sit.  Lorem ipsum dolor sit.
                            </p >
                            <div className='btyh text-center my-5 mx-auto'>
                                <button type="button" class="btn btn-success " style={{ marginRight: "28%", }}>Sign Up </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12  text-black ">
                            <figure className='d-flex justify-content-end'>
                                <img style={{ width: "75%" }} className='img-fluid' src="image/Asset 26.svg" alt="about image"></img>
                            </figure>
                        </div>
                    </div>
                </div>








                <Footer />


            </div>
        </>
    )
}
