// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Benefits from "./Components/Benefits";
import BidCalender from "./Components/BidCalender";
import BlogDetail1 from "./Components/BlogDetail1";
import BlogDetail2 from "./Components/BlogDetail2";
import BlogDetail3 from "./Components/BlogDetail3";
import BlogDetail4 from "./Components/BlogDetail4";
import Blog from "./Components/Blog";
import Cards from "./Components/Cards";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Forget from "./Components/Forget";
import JoinUs from "./Components/JoinUs";
import KeyFeatures from "./Components/KeyFeatures";
import Login from "./Components/Login";
import OurMission from "./Components/OurMission";
import OurServices from "./Components/OurServices"
import Privacy from "./Components/Privacy"
import Profile from "./Components/Profile"
import ProjectDetail from "./Components/ProjectDetail";
import ProjectInsight from "./Components/ProjectInsight";
import Register from "./Components/Register";
import Testimonials from "./Components/Testimonials";
import WhatWeDo from "./Components/WhatWeDo";
import ParticleEffect from './Components/ParticleEffect';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MiniNav setImages={setImages} /> */}
        {/* <Navbarreact /> */}
        {/* <Navbar/>
          <ProductList/>
          <ProjectName1 />
          <Weworkwith /> */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/particleffect" element={<ParticleEffect/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/benefits" element={<Benefits/>} />
          <Route path="/bidcalender" element={<BidCalender/>} />
          <Route path="/blogdetail1" element={<BlogDetail1/>} />
          <Route path="/blogdetail2" element={<BlogDetail2/>} />
          <Route path="/blogdetail3" element={<BlogDetail3/>} />
          <Route path="/blogdetail4" element={<BlogDetail4/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/joinus" element={<JoinUs/>} />
          <Route path="/keyfeatures" element={<KeyFeatures/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/ourmission" element={<OurMission/>} />
          <Route path="/ourservices" element={<OurServices/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/projectdetail" element={<ProjectDetail/>} />
          <Route path="/projectinsight" element={<ProjectInsight/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/whatwedo" element={<WhatWeDo/>} />
         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
