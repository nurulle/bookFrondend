import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Navbar,Form,FormControl,Button, Image, } from 'react-bootstrap'


export default class Waiting extends Component {
    render() {
        return (
            <>

            <Navbar class="navbar navbar-expand-lg" bg="light" variant="light">
                <div class="container-fluid">

                    <div class="position-relative">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" img className="rounded-pill" alt="150x75" src="https://placehold.it/150x75">
                        {/* <i className="fa FaSearch fa-lg position-absolute" style={{top : '13', right: '1rem', color: 'rgb(184, 182, 182)'}} ></i> */}
   
                        </FormControl>
                    </Form>
                    </div>


                    <div class="text-center">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616622142/logoPLUGIN_qsovpm_jmo8rn.png" alt width="50px" height="40px"></Image>
                    </div>


                    <div>
                        <Link to="/signin"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
               
                        </Link> 
                    </div>

                </div>
               

            
            </Navbar>  


            <div className="container-fluid">
              <div className="row" style={{height: '50vh'}}>

                <div className="col-3">
                  <div className="d-flex justify-content-around align-items-center flex-column" style={{height: '5%', marginTop: '30vh', marginRight: 10}}>
                    
                    <div className="col-md-12 mt-3">
                      <a href="profil.html">
                        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group52_gdn8mt.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Profil</p>
                      </a>
                    </div>

                    <div className="col-md-12 mt-3">
                      <a href="books.html">
                        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Group53_akdcyu.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Books</p>
                      </a>
                    </div>

                    <div className="col-md-12 mt-3">
                      <a href="outofdate.html">
                        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Out of Date</p>
                      </a>
                    </div>

                    <div className="col-md-12 mt-3">
                      <a href="waitingborrow.html">
                        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_1_j2svvr.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting Borrow</p>
                      </a>
                    </div>

                    <div className="col-md-12 mt-3">
                      <a href="waiting.html">
                        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627809/chunin/Group54_2_cxiqma.png" style={{width: 40, height: 40}} alt />
                        <p style={{display: 'inline-block', marginLeft: '3vh', fontSize: 20}}>Waiting</p>
                      </a>
                    </div>
                  </div>
                </div>
            
                <div className="col-8 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '50%', width: '70%'}}>
                        <h3 style={{color: 'black', marginTop: '10%', textAlign: 'start'}}>Upload Books</h3>

                        <div>
                            <label>Title</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input titlr" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>Creator</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input Creator" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>Publisher</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input Publisher" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>ISBN</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input ISBN<" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>Pages</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="input Pages" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55}}></input>
                            </div>

                            <label>Upoad Gambar</label>
                            <div className="form-group" style={{width: 500}}>
                                <input type="text" className="form-control" placeholder="Drag Drop File Here" style={{border: '1px solid color = #1f81DF', borderRadius: 30, height: 50, paddingLeft: 55, backgroundImage: 'url("https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627807/chunin/file_tbk5bh.png")', backgroundRepeat: 'no-repeat', backgroundSize: 50, backgroundPosition: 'center'}}></input>
                            </div>

                            <a href="books.html" className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 200, height: 40, marginLeft: '50vh'}}>Add Books</a>
                        </div>

                    </div>

                </div>
            
               </div>
            </div>


            </>
        )
    }
}
