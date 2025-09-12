import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import DrawerCart from '../components/DrawerCart'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerMenu from '../components/DrawerMenu'
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <>
    <div className="body-wrapper">
    <AnnouncementBar />
    <Header />
    <div className="breadcrumb">
            <div className="container">
                <ul className="list-unstyled d-flex align-items-center m-0">
                    <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
                    <li>
                        <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000"></path>
                            </g>
                        </svg>
                    </li>
                    <li>Download</li>
                </ul>
            </div>
        </div>

        <div className="download-banner pb-5 fixed"> 
          
        </div>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12  border-top pt-3 border-dark ">
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/banner/download-2.jpg`} className="img-fluid" alt=""/>
                        </div>
                        <div className="text-center border-bottom border-dark pb-3">
                          <button className="join-btn join-btn-2 mt-5 "><span className="icon-wrapper"><i className="bi bi-cloud-arrow-down-fill px-2"></i></span>Download Edit Zone Update</button>
                        </div>

                        <div className="py-3 whatsapp-content  border-bottom border-dark text-center">
                            <h3>
                                For Whatsapp : <button className=" Whatsapp-btn "><Link to="https://wa.link/sgfceq" className="text-white"><span className="icon-wrapper"><i className="bi bi-whatsapp px-2" style={{textDecoration:"none"}}></i></span>Click Here</Link></button>
                            </h3>
                            <h2 className="fs-4">
                                For More Details Call : 9530296302, 9509591495
                            </h2>
                        </div>

                       
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 ps-5">

                        
                        <div className="recent-task">
                            <ul className="p-0"><strong>Recent task</strong></ul>
                            <li><Link to="/" style={{textDecoration:"none"}}>  Gold Projects Free Download</Link></li>
                              <li><Link to="/" style={{textDecoration:"none"}}>  Edit Zone Gold 4.0 Projects New Version Launched</Link></li>
                                <li><Link to="/" style={{textDecoration:"none"}}> Edit Zone Gold Projects 3.3 Free Download For Users</Link></li>
                                  <li><Link to="/" style={{textDecoration:"none"}}> Edit Zone – Rakshabandhan 2023 Free Download For Everyone</Link></li>
                                    <li><Link to="/" style={{textDecoration:"none"}}>  Edit Zone Gold Projects 3.2 Free Download For Users</Link></li>
                        
                        </div>

                         <div className="recent-task">
                            <ul className="p-0 pt-5"><strong>Categories</strong></ul>
                            <li><Link to="/" style={{textDecoration:"none"}}>  Creative</Link></li>
                              <li><Link to="/" style={{textDecoration:"none"}}>  Edit Zone Updates</Link></li>
                                <li><Link to="/" style={{textDecoration:"none"}}>  Edius Gold Projects</Link></li>
                                  <li><Link to="/" style={{textDecoration:"none"}}>  Indian Wedding</Link></li>
                                    <li><Link to="/" style={{textDecoration:"none"}}>  Pre wedding</Link></li>
                                    <li><Link to="/" style={{textDecoration:"none"}}>  Video Editing System</Link></li>
                        
                        </div>
                    </div>

                     
                </div>
            </div>
        </section>
        <section>
            <div className="pt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.7333797461843!2d75.79373077494607!3d26.87344776177778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db42d48c8437b%3A0xea6edc3aee12feb0!2sEdit%20Zone%20-%20A%20Complete%20Photo%20%26%20Video%20Solution!5e1!3m2!1sen!2sin!4v1747905411238!5m2!1sen!2sin" width="600" height="450" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <DrawerCart />
        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
    </div>
    </>
  )
}

export default Download
