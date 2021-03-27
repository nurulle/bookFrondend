import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Navbar,Form,FormControl, Image, } from 'react-bootstrap'
// import { FaSearch } from "react-icons/fa";
import image10 from '../assets/img/image10.png';
import image13 from '../assets/img/image13.png';
import image5 from '../assets/img/image5.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Index extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

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
                      <Link to="/home"> 
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616622142/logoPLUGIN_qsovpm_jmo8rn.png" alt width="50px" height="40px"></Image>
                      </Link>
                    </div>

                    <div>
                        <Link to="/profil"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
                        </Link> 
                    </div>

                </div>
            
          </Navbar>   

{/*  */}

         <div className="container">
                <h5 className="mt-4">Popular</h5>
              </div>

          <Slider {...settings}>
            <div>
              <div className="slide-item">
                <div className="card m-2 bg-linear-red" style={{ maxWidth: 540, background: "#7A284C" }}>
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                    <div>
                          <Link to="/description1"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627810/chunin/image3_izfo32.png" style={{width: 150, height: 200, marginLeft: '1vh'}}/>
                          </Link> 
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <div>
                            <Link to="/description1" style={{color: 'black'}}> 
                              <h5 className="card-title"> aaAt The Going Down of the Sun</h5>
                              <p className="card-text">Marius Oelsching</p>
                            </Link> 
                        </div>
                        <p className="card-text">
                          <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>


              <div className="slide-item">
                <div className="card m-2 bg-linear-blue" style={{ maxWidth: 540, background: "#6E79E5" }}>
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                         <div>
                          <Link to="/description1"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" style={{width: 150, height: 200, marginLeft: '1vh'}}/>
                          </Link> 
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <div>
                            <Link to="/description1" style={{color: 'black'}}> 
                              <h5 className="card-title"> At The Going Down of the Sun</h5>
                              <p className="card-text">Marius Oelsching</p>
                            </Link> 
                        </div>
                        <p className="card-text">
                          <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>


              <div className="slide-item">
                <div className="card m-2 bg-linear-pink" style={{ maxWidth: 540, background: "#F7E9E0" }}>
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                        <div>
                          <Link to="/description1"> 
                            <Image src={image13} style={{width: 150, height: 200, marginLeft: '1vh'}}/>
                          </Link> 
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <div>
                            <Link to="/description1" style={{color: 'black'}}> 
                              <h5 className="card-title"> At The Going Down of the Sun</h5>
                              <p className="card-text">Marius Oelsching</p>
                            </Link> 
                        </div>
                        <p className="card-text">
                          <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="slide-item">
                <div className="card m-2 bg-linear-red" style={{ maxWidth: 540, background: "#7A284C" }}>
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4 ">
                        <div>
                          <Link to="/description1"> 
                            <Image src={image10} style={{width: 150, height: 200, marginLeft: '1vh'}}/>
                          </Link> 
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="card-body">
                        <div>
                            <Link to="/description1" style={{color: 'black'}}> 
                              <h5 className="card-title"> At The Going Down of the Sun</h5>
                              <p className="card-text">Marius Oelsching</p>
                            </Link> 
                        </div>
                       <p className="card-text">
                          <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

            



          {/* BRowse */}



          <div className="container">
            <div className="row">

              <div className="col-5 col-md-10">
                <h5 style={{marginTop: '5vh'}}>Browse</h5>
                <div className="row d-flex">

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src={image5} className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>   
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link>  
                            </div> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link> 
                            </div> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link> 
                            </div>
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link> 
                            </div> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link> 
                            </div> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">

                        <div className="col-12 col-md-4">
                          <div>
                            <Link to="/description1"> 
                              <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: '100', height: '170'}}/>
                            </Link> 
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <div>
                              <Link to="/description1" style={{color: 'black'}}> 
                                <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                                <p className="card-text">Marius Oelsching</p>
                              </Link> 
                            </div> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616839142/chunin/Group_2_n9cqm7.png"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* kat */}

              <div className="col-7 col-md-2">
                <h5 className="category-text" style={{marginTop: '5vh'}}>Category</h5>
                <div className="row category">

                  <div className="col-md-12 mt-3">
                    <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/khistory_vbqvek.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>Technology</p>
                      </Link> 
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/khistory_vbqvek.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>History</p>
                      </Link> 
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/kpolitic_tydfda.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>Politics</p>
                      </Link> 
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/kromance_k94qgp.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>Romance</p>
                      </Link> 
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/ksciense_c6ody1.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>Science</p>
                      </Link> 
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                  <div>
                      <Link to="/category"  className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/ksport_j2h5p2.png" style={{width: '30', height: '30'}}/>
                        <p style={{display: 'inline-block'}}>Sports</p>
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
                  
               
        </>

            
      )
    }
}


