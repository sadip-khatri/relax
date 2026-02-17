import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Treatment from "./pages/Treatment/Treatment";
import Pricing from "./pages/Pricing/Pricing";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="treatments" element={<Treatment />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="whychooseus" element={<WhyChooseUs />} />
        <Route path="contactus" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
