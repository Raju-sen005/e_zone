import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerMenu from '../components/DrawerMenu'
import DrawerCart from '../components/DrawerCart'

const Error = () => {
    return (
        <>
            <div className="body-wrapper">
                <AnnouncementBar />
                <Header />
                <Breadcrumb currentPage="404" />
                <main id="MainContent" className="content-for-layout">
                    <div className="error-page mt-100">
                        <div className="container">
                            <div className="error-content text-center">
                                <div className="error-img mx-auto">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/error/error.png`} alt="error" />
                                </div>
                                <p className="error-subtitle">Page Not Found</p>
                                <Link to="/" className="btn-primary mt-4">
                                    BACK TO HOMEPAGE
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <ScrollUpButton />
                <DrawerMenu />
                <DrawerCart />
            </div>
        </>
    )
}

export default Error
