import React, { Component } from 'react'
import { Image,Button } from 'react-bootstrap'



export default class Signin extends Component {
    render() {
        return (
           


        <div className="container-fluid">
            <div className="row" style={{height: '100vh'}}>
                <div className="col-4 " style={{backgroundColor: '#1f81DF'}}>
                    <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '70%', marginTop: 40}}>
                    <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616622142/logoPLUGIN_qsovpm_jmo8rn.png" alt width="50px" height="40px" />
        <h1 style={{color: 'white'}}>Hallo, Pluginers</h1>
        <p style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Enter your personal details <br /> and starts journey with us</p>
        <a href="signup.html" className="btn w-50" style={{border: '1px solid white', borderRadius: 20, height: 40, color: 'white', bottom: '50%'}}>Sign Up</a>
      </div>
    </div>
    <div className="col-8 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '60%', width: '70%', marginTop: '5vh'}}>
        <h1 style={{color: '#1f81DF'}}>Sign In to Plugin Books</h1>
        <div>
          <div className="form-group" style={{width: 500}}>
            <input type="text" className="form-control" placeholder="Email" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55, marginTop: '10vh'}} />
          </div>
          <div className="form-group" style={{width: 500}}>
            <input type="password" className="form-control" placeholder="Password" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55, marginTop: '5vh'}} />
            <i className="fa fa-eye-slash" aria-hidden="true" />
          </div>
          <a href="home.html" className="btn" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 30, width: 300, height: 40, marginTop: '5vh', marginLeft: '20vh'}}>Sign In</a>
        </div>
      </div>
    </div>
  </div>
</div>



        )
    }
}
