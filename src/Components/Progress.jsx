import React, { useState } from 'react'

function Progress() {
    const percentarr = {
        usd: '10',
        three: '25',
        seven_five: '40',
        eight: '50',
        eight_five: '65',
        nine: '80',
        nine_five: '90',
        ten: '100'
    }
    const [percent, setpercent] = useState(percentarr.nine);
    return (
        <>
            
               
                    <div className=''>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", }}>
                                <div style={{ display: "flex", flexDirection: "row", flex: 0.3, }}>
                                    <div className='text-white'style={{color: "#39ff14" }}>USD</div>
                                    <div className='text-white px-5'style={{color: "#39ff14" }}>3</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", flex: 0.7, justifyContent: "space-between" }}>
                                    <div className='text-white'>7.5</div>
                                    <div className='text-white'>8</div>
                                    <div className='text-white'>8.5</div>
                                    <div className='text-white'>9</div>
                                    <div className='text-white'>9.5</div>
                                    <div className='text-white'>10</div>
                                </div>

                            </div>
                            <div class="proggress" style={{ height: '9px', background: "transparent", border: '0.5px solid #00ff58', borderRadius: '0' }}>
                                <div class="progggress-bar" role="progggressbar"
                                    aria-valuenow={percent} aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: percent + '%', background: '#00ff58', borderRadius: '0' }}>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", }}>
                                <div style={{ display: "flex", flexDirection: "row", flex: 0.3, }}>
                                    <div className='' style={{ color: "#39ff14" }}>Private <br />Sale</div>
                                    <div className=' px-5' style={{ color:"#39ff14" }}>Pre Sale</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", flex: 0.7, justifyContent: "space-between ", }}>
                                    <div className=' px-5' style={{ color: "#39ff14" }}>Token <br />Sale</div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            
        </>
    )
}

export default Progress