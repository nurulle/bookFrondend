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
    </div>
  </div>
  {/*  */}
  <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <input type="datetime-local" className="dateTime" name="starttime" id="startTime" step={2} style={{width: 250}} />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <h4>Discussion</h4>
      <div className="form-group" style={{width: 600}}>
        <input type="text" className="form-control" placeholder="Type Here" style={{border: '1px solid color = #1f81DF', height: 100, paddingLeft: 55}} />
      </div>
      <a href="waitingborrow.html" className="btn w-50px" style={{backgroundColor: '#1f81DF', color: 'white', borderRadius: 20, width: 150, height: 40, marginLeft: '55vh'}}>Send</a>
    </div>
  </div>
</div>


            </>
        )
    }
}
