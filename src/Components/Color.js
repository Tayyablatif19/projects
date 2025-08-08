import React, { useState } from 'react'

function Color() {

    const [color, setColor] = useState('');



    return (


        <>

            <div>
                <>
                    <div className='container d-flex justify-content-evenly my-5'>
                        <button type="button" class="btn btn-secondary " onClick={() => setColor('grey')}>Grey </button>
                        <button type="button" class="btn btn-dark " onClick={() => setColor('black')}>Black</button>
                        <button type="button" class="btn btn-success " onClick={() => setColor('green')}>Green</button>
                       
                    </div>

                </>

            </div>


            <div className='container' style={{ backgroundColor: color, height: '100px', width: '100%' }}>

            </div>

        </>
    )

}

export default Color
