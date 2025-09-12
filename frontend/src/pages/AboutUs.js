import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import { Breadcrumb } from 'react-bootstrap'
import AboutHero from './AboutHero'
import AboutPromotion from './AboutPromotion'
import AboutService from './AboutService'
import TeamSection from './TeamSection'
import AboutBanner from './AboutBanner'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerMenu from '../components/DrawerMenu'
import DrawerCart from '../components/DrawerCart'

const AboutUs = () => {
    return (
        <>
            <div className="body-wrapper">
                <AnnouncementBar />
                <Header />
                <Breadcrumb />
                <main id="MainContent" className="content-for-layout">
                    <div className="about-page">
                    <AboutHero />
                    <AboutPromotion />
                    <AboutService />
                    <TeamSection />
                    <AboutBanner />
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

export default AboutUs
