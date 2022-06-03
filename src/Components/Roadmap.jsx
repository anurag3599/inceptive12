import React, { usestate } from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"

function Roadmap() {

    return (
        <>


            <div className="container " style={{ textAlign: "center", marginTop: "5%" }}>
                <div className="row">
                    <div className="col text-white">
                        <h1 style={{color: "#39ff14"}}>Roadmap title</h1>
                        <div className="nextBtn">
                            <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-left" style={{ color: "#39ff14", fontSize: "20px" }}></i></button>
                            <button style={{ width: "30px", height: "30px", border: "none", margin: "5px" }}><i class="fa-solid fa-angle-right" style={{ color: "#39ff14", fontSize: "20px" }}></i></button>
                        </div>


                    </div>
                </div>
            </div>







            <div className="container " style={{ marginTop: "4%" }}>
                <div className="row d-flex justify-content-center">
                    <div style={{ width: "900px" }}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ margin: "8px 6px",color:"white" }}>Q2 2016</div>
                                    <div style={{ width: "100%", height: '5px', background: 'black', alignItems: "center", display: "flex" }}>
                                        <div style={{ height: "20px", width: "20px", borderRadius: '50%', backgroundColor: '#39ff14', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <BsFillCheckCircleFill color={'white'} style={{ height: "100%", width: "100%" }} />
                                        </div>
                                        <div style={{ width: '100%', height: "5px", background: "#39ff14" }}></div>
                                    </div>
                                    <div style={{ margin: "8px 0px",color:"white" }}>Lorem ipsum dolor sit.</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ margin: "8px 6px",color:"white" }}>Q2 2016</div>
                                    <div style={{ width: "100%", height: '5px', background: 'black', alignItems: "center", display: "flex" }}>
                                        <div style={{ height: "20px", width: "20px", borderRadius: '50%', backgroundColor: '#39ff14', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <BsFillCheckCircleFill color={'white'} style={{ height: "100%", width: "100%" }} />
                                        </div>
                                        <div style={{ width: '100%', height: "5px", background: "#39ff14" }}></div>
                                    </div>
                                    <div style={{ margin: "8px 0px",color:"white" }}>Lorem ipsum dolor sit.</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ margin: "8px 6px",color:"white" }}>Q2 2016</div>
                                    <div style={{ width: "100%", height: '5px', background: 'black', alignItems: "center", display: "flex" }}>
                                        <div style={{ height: "20px", width: "20px", borderRadius: '50%', backgroundColor: '#39ff14', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <BsFillCheckCircleFill color={'white'} style={{ height: "100%", width: "100%" }} />
                                        </div>
                                        <div style={{ width: '0%', height: "5px", background: "#39ff14" }}></div>
                                    </div>
                                    <div style={{ margin: "8px 0px",color:"white" }}>Lorem ipsum dolor sit.</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ margin: "8px 6px",color:"white" }}>Q2 2016</div>
                                    <div style={{ width: "100%", height: '5px', background: 'black', alignItems: "center", display: "flex" }}>
                                        <div style={{ height: "20px", width: "20px", borderRadius: '50%', backgroundColor: '#39ff14' }}></div>
                                        <div style={{ width: '  0%', height: "5px", background: "#39ff14" }}></div>

                                    </div>
                                    <div style={{ margin: "8px 0px" ,color:"white"}}>Lorem ipsum dolor sit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}
export default Roadmap  