'use client';
import styles from '@/styles/Home.module.css'
import Header from '@/component/Header'
import Intro from "@/component/Intro";
import Features from "@/component/Features";
import Products from "@/component/Products";
import Testimonials from "@/component/Testimonials";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <>
      <div className='container'>
        <Header />
        <Intro />
        <Features />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
