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

            <div className="container">
  <div className="row">
    <div className="col-2 col-md-10">
      <h5 style={{marginTop: '5vh'}}>Technology</h5>
      <div className="row d-flex">
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description1.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627810/chunin/image5_vsy6g7.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <a href="description1.html" style={{color: 'black'}}>
                    <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                    <p className="card-text">Marius Oelsching</p>
                  </a><a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description1.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description1.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description1.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description1.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card-books mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
              <div className="col-12 col-md-4">
                <a href="description.html">
                  <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: 100, height: 170}} alt="..." />
                </a>
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                  <p className="card-text">Marius Oelsching</p>
                  <a>
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                    <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>

      


            </>
        )
    }
}
