import React, { useEffect } from 'react'
import './Token.css';
import Navbar from "./Navbar";

import $ from 'jquery';
import Footer from "./Footer";


function Token() {
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

    useEffect(() => {
        $("#timerr").aksCountDown({
            endTime: "15 June 2022 9:56:00 GMT+01:00",
            onEnd: function () {
                $(this).html('<div class="timer-end">Finished Time</div>');
            }
        });

    }, [])


    return (

        <>



            <div className="container-fluid wrap">
                <Navbar />
              <div className="wraptokenpg">
              <div className="container">
                   
                        <h1  className='headingtext text-center mt-4'>The Token Rank</h1>
            
                </div>

                <div className="container husss">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="tohead" style={{ textAlign: "center",color:"white",color: "#adb1e2" }}>Analog Tokens</h1>
                            <h4 className="tohead" style={{ textAlign: "center",color:"white",color: "#adb1e2" }}>Our Tokens with a realworld use case created on the blockchain network</h4>
                        </div>
                    </div>
                </div>

                {/* timer */}
                <div className="container cont" style={{ marginTop: "3%" }}>
                    <div class="nk-block nk-block-token mgb-m30">
                        <div class="row">
                            <div class="col-lg-7" style={{ width: "623px" }}>
                                <div class="token-info bg-theme">
                                    <h4 class="title title-md mb-2 text-sm-center">Sales Information</h4>
                                    <table class="table table-s1 table-token">

                                        <tr>
                                            <td class="table-head">Public Sale Starts</td>
                                            <td class="table-des">15th Nov 2022 12:00 GMT</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Public Sale Ends</td>
                                            <td class="table-des">14th Dec 2022 12:00 GMT</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Total Token Supply</td>
                                            <td class="table-des">500,000,000</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Tokens Allocated for ICO</td>
                                            <td class="table-des">350,000,000</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Hard Cap</td>
                                            <td class="table-des">$4.75m</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Soft Cap</td>
                                            <td class="table-des">$1.75m</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Token Value</td>
                                            <td class="table-des">1 ETH = 1,000 ICOX</td>
                                        </tr>
                                        <tr>
                                            <td class="table-head">Accepted</td>
                                            <td class="table-des">ETH, BTC</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-5 p-sm-0">
                                <div class="class">
                                    <div class="token-status bg-theme" style={{ marginTop: "2px" }}>
                                        <h4 class="title title-md">Token Sale Stage End In</h4>
                                        <div class="token-countdown countdown" data-date="2022/06/11">

                                            <div id="timerr">

                                                <div class="number-listt mx-md-5 mx-sm-1">
                                                    <div class="item" data-days="">00</div>
                                                    <div class="item" data-hours="">00</div>
                                                    <div class="item" data-minutes="">00</div>
                                                    <div class="item" data-seconds="">00</div>

                                                </div>
                                                <div class="unit-listt my-3 mx-5">
                                                    <div class="item">Days</div>
                                                    <div class="item">Hours</div>
                                                    <div class="item">Minutes</div>
                                                    <div class="item">Seconds</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="progreess-wrap progress-wrap-point">
                                            <span class="progreess-info">Raised so far <span>$1,830,985</span></span>
                                            <div class="progreess-bar">
                                                <div class="progreess-percent bg-grad" data-percent="30" style={{ width: "30%" }}>
                                                </div>
                                                <div class="progreess-point progress-point-1">Soft Cap <span>$1.75m</span></div>
                                                <div class="progreess-point progress-point-2">Hard Cap <span>$4.75m</span></div>
                                            </div>
                                        </div>






                                        <a href="#" class="btnnn btnnn-grad" style={{ textDecoration: "none" }}>Register &amp; Buy Token Now</a>
                                        <span class="token-min">Minimum Purchase: 200 ICOX</span>
                                    </div>
                                    <div class="bonus bg-theme">
                                        <div class="bonus-info">
                                            <div class="bonus-percent">50% <small>Bonus</small></div>
                                            <div class="bonus-date">End at 30 Nov, 2022</div>
                                            <span class="bonus-badge badge-xs">Now</span>
                                        </div>
                                        <div class="bonus-info">
                                            <div class="bonus-percent">25%<small>Bonus</small></div>
                                            <div class="bonus-date">Start at 01 Dec, 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section-tokendes has-ovm my-5">
                    <div class="container">
                        <div class="nk-block nk-block-alocation mgb-m30">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="token-alocate-item">
                                        <div class="token-alocate-graph">
                                            <div class="chartjs-size-monitor">
                                                <div class="chartjs-size-monitor-expand">
                                                    <div class="">
                                                    </div>
                                                </div>
                                                <div class="chartjs-size-monitor-shrink">
                                                    <div class="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chartjs-size-monitor">
                                                <div class="chartjs-size-monitor-expand">
                                                    <div class="">
                                                    </div>
                                                </div>
                                                <div class="chartjs-size-monitor-shrink">
                                                    <div class="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="logo">
                                            <img src="./image/token_allocation.svg" class="img-fluid" style={{width:"300px", position:"relative",top:"165px",marginBottom:"65px"}} alt="Responsive image"/>
                                            </div>


                                        </div>
                                        <ul class="chart-data" data-canvas="token-alocate" data-canvas-type="doughnut">
                                            <li data-color="#223fa8" data-title="Token Sale Program" data-amount="60">
                                                <span class="chart-c" style={{ backgroundColor: "#223fa8" }}></span>
                                                <span class="chart-l">Token Sale Program</span>
                                                <span class="chart-p">60%</span>
                                            </li>
                                            <li data-color="#8fa0df" data-title="Reserve Fund" data-amount="8">
                                                <span class="chart-c" style={{ backgroundColor: "#8fa0df" }}></span>
                                                <span class="chart-l">Reserve Fund</span>
                                                <span class="chart-p">8%</span>
                                            </li>
                                            <li data-color="#4aa0f6" data-title="Team and Founders" data-amount="15">
                                                <span class="chart-c" style={{ backgroundColor: "#4aa0f6" }}></span>
                                                <span class="chart-l">Team and Founders</span>
                                                <span class="chart-p">15%</span>
                                            </li>
                                            <li data-color="#6ad9ac" data-title="Board Advisors" data-amount="4">
                                                <span class="chart-c" style={{ backgroundColor: "#6ad9ac" }}></span>
                                                <span class="chart-l">Board Advisors</span>
                                                <span class="chart-p">4%</span>
                                            </li>
                                            <li data-color="#4d6fe9" data-title="Ecosystem Development" data-amount="7">
                                                <span class="chart-c" style={{ backgroundColor: "#4d6fe9" }}></span>
                                                <span class="chart-l">Ecosystem Development</span>
                                                <span class="chart-p">7%</span>
                                            </li>
                                            <li data-color="#15216d" data-title="Marketing and Bounty" data-amount="6">
                                                <span class="chart-c" style={{ backgroundColor: "#15216d" }}></span>
                                                <span class="chart-l">Marketing and Bounty</span>
                                                <span class="chart-p">6%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="token-alocate-item">
                                        <div class="token-alocate-graph">
                                            <div class="chartjs-size-monitor">
                                                <div class="chartjs-size-monitor-expand">
                                                    <div class="">
                                                    </div>
                                                </div>
                                                <div class="chartjs-size-monitor-shrink">
                                                    <div class="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chartjs-size-monitor">
                                                <div class="chartjs-size-monitor-expand">
                                                    <div class="">
                                                    </div>
                                                </div>
                                                <div class="chartjs-size-monitor-shrink">
                                                    <div class="">
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="./image/fund_allocation.svg" style={{height:"70%"}} alt="Responsive image"/>
                                            <canvas class="chart-canvas chartjs-render-monitor" id="fund-alocate" width="320" height="360" style={{ display: "block", width: "320px", height: "360px" }}></canvas>
                                        </div>
                                        <ul class="chart-data" data-canvas="fund-alocate" data-canvas-type="doughnut">
                                            <li data-color="#15216d" data-title="Engineering and Development" data-amount="40">
                                                <span class="chart-c" style={{ backgroundColor: "#15216d" }}></span>
                                                <span class="chart-l">Engineering and Development</span>
                                                <span class="chart-p">40%</span>
                                            </li>
                                            <li data-color="#4aa0f6" data-title="Business Development" data-amount="12">
                                                <span class="chart-c" style={{ backgroundColor: "#4aa0f6" }}></span>
                                                <span class="chart-l">Business Development</span>
                                                <span class="chart-p">12%</span>
                                            </li>
                                            <li data-color="#223fa8" data-title="Marketing &amp; Promotion" data-amount="20">
                                                <span class="chart-c" style={{ backgroundColor: "#223fa8" }}></span>
                                                <span class="chart-l">Marketing &amp; Promotion</span>
                                                <span class="chart-p">20%</span>
                                            </li>
                                            <li data-color="#72a3f4" data-title="Legal &amp; Regulation" data-amount="10">
                                                <span class="chart-c" style={{ backgroundColor: "#72a3f4" }}></span>
                                                <span class="chart-l">Legal &amp; Regulation</span>
                                                <span class="chart-p">10%</span>
                                            </li>
                                            <li data-color="#6ad9ac" data-title="Operational &amp; Administration" data-amount="8">
                                                <span class="chart-c" style={{ backgroundColor: "#6ad9ac" }}></span>
                                                <span class="chart-l">Operational &amp; Administration</span>
                                                <span class="chart-p">8%</span></li><li data-color="#8fa0df" data-title="Contingency" data-amount="4">
                                                <span class="chart-c" style={{ backgroundColor: "#8fa0df" }}></span><span class="chart-l">Contingency</span>
                                                <span class="chart-p">4%</span>
                                            </li>
                                            <li data-color="#4d6fe9" data-title="Partners" data-amount="6">
                                                <span class="chart-c" style={{ backgroundColor: "#4d6fe9" }}></span>
                                                <span class="chart-l">Partners</span><span class="chart-p">6%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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


                <Footer />
              </div>

            </div>
        </>

    )
}

export default Token
