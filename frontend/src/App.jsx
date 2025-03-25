import "./App.css";
import CursorFollower from "./components/CursorFollwer";
import ErrorPage from "./Pages/ErrorPage";
import SubServiceDetail from "./components/SubServiceDetail";
import SubService from "./components/SubService";
import Testimonial from "./components/Testimonial";
import Whychoose from "./components/Whychoose";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import LiveStreamPage from "./Pages/LiveStreamPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <>
      <Router>
        <CursorFollower />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/whychoose" element={<Whychoose />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/live" element={<LiveStreamPage />} />
          <Route path="/*" element={<ErrorPage />}/>
          <Route path="/servicedetail/:id" element={<SubService />} />
          <Route path="/subservicedetail/:id/:index" element={<SubServiceDetail />} />
          <Route path="/coursedetail/:id" element={<CourseDetail />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
