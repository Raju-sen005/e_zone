import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerMenu from '../components/DrawerMenu'
import DrawerCart from '../components/DrawerCart'
import ProductQuickviewModal from '../components/ProductQuickView'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const VideoEditing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle same item or open new
  };
  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />

        <main id="MainContent" className="content-for-layout">

          {/* <!-- breadcrumb start --> */}
          <div className="breadcrumb">
            <div className="container">
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                <li>
                  <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path
                        d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z"
                        fill="#000" />
                    </g>
                  </svg>
                </li>
                <li>Video Editing</li>
              </ul>
            </div>
          </div>
          {/* <!-- breadcrumb end --> */}


          <section>

            <div className="container">

              <div className="row mt-4 pt-4">

                <div className="col-md-12">

                  <h2 className="about-hero-title mb-5 text-center">
                    Video Editing Training Classes for Edius
                  </h2>

                </div>

                <div className="col-lg-6">

                  <h3 className="">
                    About This Course
                  </h3>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/video/about-video.jpg`} className="img-fluid py-4 " alt="" />

                  <h3 className="pt-4 pb-2">Upcoming Batch Details  </h3>

                  <div className="table-responsive">
                    <table className="table table-bordered custom-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Batche Name</th>
                          <th>Timing</th>
                          <th>Book Demo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>11-04-2025</td>
                          <td>UI/UX Designing</td>
                          <td>10:00:00 AM</td>
                          <td className="book-demo"><Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Demo</Link></td>
                        </tr>
                        <tr>
                          <td>15-04-2025</td>
                          <td>Recat Js</td>
                          <td>01:00:00 PM</td>
                          <td className="book-demo"><Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Demo</Link></td>
                        </tr>
                        <tr>
                          <td>17-04-2025</td>
                          <td>Advance Canva</td>
                          <td>10:00:00 AM</td>
                          <td className="book-demo"><Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Demo</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-1 mb-3 about-hero-subtitle">
                    Our videography course offers a comprehensive exploration of the art and science of photography, catering to beginners and enthusiasts alike. Starting with the basics of camera operation, exposure, and composition, students progress to advanced techniques in lighting, portrait, landscape, and conceptual photography. The course also covers post-processing techniques using industry-standard software. Through a blend of theory and practical sessions, students develop a critical eye, creative vision, and technical proficiency. Guest lectures, field trips, and portfolio reviews by experienced professionals enhance the learning experience. By the end of the course, students emerge with a diverse portfolio and the skills to pursue photography as a profession or passion.
                  </p>


                  <h4 className="pt-4">Instructor</h4>

                  <div className="Instructor d-flex justify-content-between">
                    <div className="">
                      <img src={`${process.env.PUBLIC_URL}/assets/img/team/6.jpg`} className="img-fluid" alt="" />
                    </div>
                    <div className="ps-3">
                      <h6>Anup Kumar</h6>
                      <p>Hello, I'm Anup Kumar, your instructor in UI/UX & Web designing at Creative Web Pixel. With a passion for creating engaging digital experiences, I'm here to guide you through the exciting world of user interface and user experience design. Let's unleash our creativity and craft meaningful designs together!</p>
                      <p><strong>Course :</strong> UI/UX Designing</p>
                      <div className="text-black">
                        <Link to="/"><i className="bi bi-twitter-x"></i></Link>
                        <Link to="/"><i className="bi bi-facebook"></i></Link>
                        <Link to="/"><i className="bi bi-instagram"></i></Link>
                        <Link to="/"><i className="bi bi-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>



                </div>


                <div className="col-lg-6">

                  <div>


                    <div className="card-points d-flex justify-content-between align-items-center w-75 mx-auto">

                      <h4 className="fw-light fs-14 mt-4 mb-4"><i className="fa-solid fa-chalkboard-user me-2"></i>Instructor</h4>

                      <h4 className="fw-light fs-14 mt-4 mb-4">Anup Sir</h4>

                    </div>

                    <div className="card-points d-flex justify-content-between align-items-center w-75 mx-auto">

                      <h4 className="fw-light fs-14 mt-4 mb-4"><i className="fa-brands fa-uncharted me-2"></i>
                        Software</h4>

                      <h4 className="fw-light fs-14 mt-4 mb-4">Edius</h4>

                    </div>

                    <div className="card-points d-flex justify-content-between align-items-center w-75 mx-auto">

                      <h4 className="fw-light fs-14 mt-4 mb-4"><i className="fa-solid fa-clock me-2"></i>Duration</h4>

                      <h4 className="fw-light fs-14 mt-4 mb-4">30 Days</h4>

                    </div>

                    <div className="card-points d-flex justify-content-between align-items-center w-75 mx-auto">

                      <h4 className="fw-light fs-14 mt-4 mb-4"><i className="fa-solid fa-language me-2"></i>Language</h4>

                      <h4 className="fw-light fs-14 mt-4 mb-4">Hindi</h4>

                    </div>

                    <div className="card-points d-flex justify-content-between align-items-center w-75 mx-auto">

                      <h4 className="fw-light fs-14 mt-4 mb-4"><i className="fa-solid fa-chalkboard-user me-2"></i>Price</h4>

                      <h4 className="fw-light fs-14 mt-4 mb-4">RS 20000</h4>

                    </div>

                    <div className="mt-5 text-center">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Your Demo Class Now
                      </button>


                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Book Your Demo Now</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <form action="#" className="contact-form">
                                <div className="row">
                                  <div className="col-md-6 col-12">
                                    <fieldset>
                                      <input type="text" placeholder="Full name" />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    <fieldset>
                                      <input type="email" placeholder="Email Address*" />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    <fieldset>
                                      <input type="text" placeholder="Type a subject" />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    <fieldset>
                                      <input type="text" placeholder="Phone Number" />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-12 col-12">
                                    <fieldset>
                                      <textarea cols="20" rows="6" placeholder="Write your message here*"></textarea>
                                    </fieldset>
                                    <button type="submit" className="position-relative review-submit-btn contact-submit-btn">SEND MESSAGE</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>



                    </div>



                  </div>

                </div>

              </div>

            </div>

          </section>


          <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 pt-4">
            <h4 className="pb-3">Our Courses Module</h4>
            <div className="accordion accordion-flush" id="accordionFlushExample">

              {/* Module 1 */}
              <div className="accordion-item rounded-3 border-0 shadow mb-2">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom fw-semibold ${openIndex === 0 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(0)}
                    aria-expanded={openIndex === 0}
                  >
                    Module 1 – Digital Designing & Image Editing
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openIndex === 0 ? 'show' : ''}`}>
                  <div className="accordion-body fs-6">
                    <p>This is the first module of our video editing course that begins with the teaching of
                      digital media designing and image editing. Essential software that will be covered in this module are Adobe Photoshop and Bridge.</p>
                    <p><strong>Key Takeaways:</strong></p>
                    <strong>Visual Design Basics</strong>
                    <ul>
                      <li>Principles and elements of design</li>
                      <li>Light and shadows</li>
                      <li>Compositing the scene</li>
                      <li>Logo making process</li>
                      <li className="pb-5">Storyboarding</li>
                    </ul>
                    <strong>Master Digital Designing</strong>
                    <ul>
                      <li>Understanding the digital media fundamentals</li>
                      <li>File formats and color system</li>
                      <li>Energy-oriented graphics and background creations.</li>
                      <li>Designing Logos, Posters, YouTube Thumbnails, and much more</li>
                      <li>Editing and retouching the photos using filters and advanced options in Photoshop</li>
                      <li>Creating digital paintings and stunning matte paintings</li>
                      <li>AI-enhanced editing on images</li>
                      <li>Working on GIF animation in Photoshop</li>
                      <li>Creating motion graphics in Photoshop</li>
                      <li>Animating the web ads</li>
                      <li>Scanning, storing, and transporting Images</li>
                      <li>Exporting PSD files on various file formats</li>
                      <li>Projects and case studies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="accordion-item rounded-3 border-0 shadow mb-2">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom fw-semibold ${openIndex === 1 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={openIndex === 1}
                  >
                    Module 2 – Motion Graphics
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openIndex === 1 ? 'show' : ''}`}>
                  <div className="accordion-body fs-6">
                    <p>Module two is all about motion graphics and compositing. Here you will get basic to advanced
                      knowledge of motion graphics and compositing. The main software for this module is Adobe After Effects
                      which is a leading software for compositing and motion graphics.</p>
                    <p><strong>Key Takeaways:</strong></p>
                    <ul>
                      <li>Work with keyframes to add motion in the still images</li>
                      <li>Work with mattes, masks, modes, trimming</li>
                      <li>Create an amazing composition with 3D part</li>
                      <li>Applying different special effects</li>
                      <li>Work on whiteboard animation</li>
                      <li>Learn to create text and logo animation</li>
                      <li>Understand the tracking and time</li>
                      <li>Work on chroma keying and color grading</li>
                      <li>Learn to paint and rotoscope</li>
                      <li>And much more.</li>
                      <li>Work on live Projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom fw-semibold ${openIndex === 2 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={openIndex === 2}
                  >
                    Module 3 – Non-Linear Editing
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openIndex === 2 ? 'show' : ''}`}>
                  <div className="accordion-body">
                    <p>Module 3 teaches video editing techniques according to the non-linear editing method which is
                      in trend nowadays. The main application for this module is Adobe Premiere Pro and it also covers
                      Media Encoder.</p>
                    <p><strong>Key Takeaways:</strong></p>
                    <strong>Video Editing with Adobe Premiere Pro</strong>
                    <p>You will learn the process of rearranging, adding, and subtracting the video shots/clips to create a
                      good flow of story using Premiere Pro. You will also learn color correction, filters, and transition
                      creation between clips.</p>
                    <strong>Rendering in Adobe Media Encoder</strong>
                    <ul>
                      <li>Rendering in Adobe Media Encoder</li>
                      <li>Work on color balancing and grading in videos</li>
                      <li>Learn about audio synchronization</li>
                      <li>Add different effects and styles</li>
                      <li>Work on chroma keying</li>
                      <li>Add text animation</li>
                      <li>Create promos and montage</li>
                      <li>Work with different video file formats</li>
                      <li>And many more advanced video editing segments.</li>
                      <li>Work on video editing Projects</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
        </main>
        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
        <DrawerCart />
        <ProductQuickviewModal />
      </div>
    </>
  )
}

export default VideoEditing
