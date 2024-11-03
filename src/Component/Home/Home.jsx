import React from "react";
import Nav from "../Navigation/Nav";
import Header from "../Header/Header";
import Newarrival from "../Service/Newarrival/Newarrival";
import Blog from "../Service/Blog/Blog";
import Footer from "../Service/Footer/Footer";
import "./Home.css";
import { motion, useScroll, useSpring } from "framer-motion";
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="homepage">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav />
      <Header />
      <Newarrival />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
