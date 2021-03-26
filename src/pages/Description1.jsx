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

            <div>
  <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <h1> At the Going Down of the Sun</h1>
      <a style={{fontSize: '5vh', color: 'gray'}}>Maruis Oelsching</a><br />
      <a>
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
      </a>
      <table className="table" style={{marginTop: '5vh'}}>
        <tbody>
          <tr>
            <th scope="row">Publisher</th>
            <td>Gramedia Putaka Utama</td>
          </tr>
          <tr>
            <th scope="row">ISBN</th>
            <td>9786020385914</td>
          </tr>
          <tr>
            <th scope="row">Pages</th>
            <td>376 hlm</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" style={{borderRadius: 20, width: '15vh'}}><a href="borrowpage.html" style={{color: 'white'}}>Borrow</a></button>
      <button type="button" className="btn btn-light" style={{borderRadius: 20, width: '15vh', color: '#1f81DF'}}>Chat</button>
    </div>
  </div>
  <div className="row" style={{marginLeft: '38vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="col" style={{marginTop: '10vh'}}>
      <h3 className="h3"><b>Description</b></h3>
      <p className="text-muted" style={{textAlign: 'justify', marginLeft: '10vh'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ultricies purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi 
        ac eget elit. Pellentesque ut et placerat integer venenatis, urna. Elementum 
        in erat sit elit. Velit eget neque consectetur nunc aliquam at. Adipiscing 
        lectus egestas semper vitae, sed tellus. At cursus quam bibendum faucibus 
        sit blandit. Habitasse pulvinar ullamcorper elementum vitae vestibulum aenean 
        semper diam. Gravida diam sit quisque nulla.</p>
    </div>
  </div>
  <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <h4>Discussion</h4>
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <div className="form-group" style={{width: 800, marginTop: '5vh'}}>
        <input type="text" className="form-control" placeholder="Type Here" style={{border: '1px solid color = #1f81DF', height: 100, paddingLeft: 50}} />
      </div>
      <a href="javascript: void(0)" className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 150, height: 40, marginLeft: '100vh'}}>Send</a>
    </div>
  </div>
  <div className="container" style={{marginLeft: '38vh'}}>
    <h4>Total 777</h4>
    <div className="row">
      <div className="col-2 col-md-1">
        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" style={{width: 50, height: 50}} alt />
      </div>
      <div className="col-10 col-md-11">
        <p className="font-weight-bold mt-2">Alif ba ta</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi ac
          eget elit. Pellentesque ut et placerat integer venenatis, urna.
        </p>
      </div>
      <div className="col-2 col-md-1">
        <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" style={{width: 50, height: 50}} alt />
      </div>
      <div className="col-10 col-md-11">
        <p className="font-weight-bold mt-2">Alif ba ta</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          purus vitae metus egestas etiam vestibulum id aenean. Diam, in mi ac
          eget elit. Pellentesque ut et placerat integer venenatis, urna.
        </p>
      </div>
    </div>
  </div>
 
</div>

            </>
        )
    }
}
