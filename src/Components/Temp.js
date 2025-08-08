import React, {useState} from 'react'

function Temp() {

    const [temp, setTemp] = useState('');

    return (
        <div>
            
                <div className='container'>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><strong>Enter Temperature in Celcius</strong></label>
                        <textarea type="number" className="form-control" value={temp} onChange={(e)=> setTemp(e.target.value)} id="exampleFormControlTextarea1" rows="3" placeholder='Will only give results to Numbers'></textarea>
                    </div>


                    <div className='container'>
                        <div><p>Temperature : {temp*1.8 + 32}</p></div>
                    </div>
                </div>







            
        </div>
    )
}

export default Temp
