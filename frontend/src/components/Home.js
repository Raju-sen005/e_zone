// import React, { useEffect } from 'react';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Slideshow from './Slideshow';
import WhyChoose from './WhyChoose';
import FeaturedCollection from './FeaturedCollection';
import OurServices from './OurServices';
import VideoSection from './VideoSection';
import TestimonialSection from './TestimonialSection';
import LatestBlogs from './LatestBlogs';
import UpcomingEvents from './UpcomingEvents';
import UpcomingBatches from './UpcomingBatches';
import Footer from './Footer';
import ScrollUpButton from './ScrollUpButton';
import DrawerMenu from './DrawerMenu';
import DrawerCart from './DrawerCart';
import ProductQuickviewModal from './ProductQuickView';
import ContactModal from './ContactModal';

const Home = () => {

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />
      <main id="MainContent" className="content-for-layout">
        <Slideshow />
        <WhyChoose />
        <FeaturedCollection />
        <OurServices />
        <VideoSection />
        <TestimonialSection />
        <LatestBlogs />
        <UpcomingEvents />
        <UpcomingBatches />
      </main>
      <Footer />
      <ScrollUpButton />
      <DrawerMenu />
      <DrawerCart />
      <ProductQuickviewModal />
      <ContactModal />
    </div>
  );
};

export default Home;
