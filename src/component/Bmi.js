import React, { useState } from 'react'
import './Bmi.css'

function Bmi() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');

    function submitClick(){
        if(height === '' || weight === '' ){
            alert('Please enter the values in both');
        }else{
            setBmi(
                weight / (height * height)
            )
        }
    }

    function reloadClick(){
        setWeight('')
        setHeight('')
        setBmi('')
    }

    function handleHeight(event){
        setHeight(event.target.value)
    }

    function handleWeigth(event){
        setWeight(event.target.value)
    }
  return (
    <div className='Bmi__container'>
        {/* add two inputs */}
        <p className='p__container'>Enter Your Weight</p>
        <input className='input__container' type='text' placeholder='(Kgs)' value = {weight} onChange={handleWeigth}/>
        <p className='p__container'>Enter Your Height</p>
        <input className='input__container' type='text' placeholder='(m)' value = {height} onChange={handleHeight}/>

        {/* add two buttons : submit and reload */}
        <button className='submit__btn' onClick={() => submitClick()}>Submit</button>
        <button className='reload__btn' onClick={() => reloadClick()}>Reload</button>

        {/* Bmi result space */}
        <p>Your BMI is : </p>
        {bmi && (
            <p className='bmi__p'>{bmi}</p>
        )}
    </div>
  )
}

export default Bmi