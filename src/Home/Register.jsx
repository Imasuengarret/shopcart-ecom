import React from 'react'
const subTitle = "Save The Day"
const title = (
    <h4 className='title'>Join on Day Long Free Workshop for <b>Advance <span>Mastering</span></b> on Sales</h4>
)
const desc = "Limited Time Offer! Hurry Up";

function Register() {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row gap-4 gap-lg-0 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h5>Register Now</h5>
                        <form className='register-form'>
                            <input type="text" name='name' placeholder='Username' className='reg-input'/>
                            <input type="email" name='email' placeholder='Email' className='reg-input'/>
                            <input type="number" name='number' placeholder='Phone' className='reg-input'/>
                            <button type='submit' className='lab-btn'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
