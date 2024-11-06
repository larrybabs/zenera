import { Culture } from "./pages/culture/Culture";
import { Brand } from "./pages/culture/OurBrand";
import { Insights } from "./pages/culture/OurInsights";
import { Lifestyle } from "./pages/culture/OurLifestyle";
import { People } from "./pages/culture/OurPeople";
import { Recognitions } from "./pages/culture/OurRecognition";
import { Home } from "./pages/home/Home";
import { Leadership } from "./pages/leadership/Leadership";
import { Reports } from "./pages/ReportsDownload/ReportsDownload";
import { Services } from "./pages/services/Services";


const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sustainability/leadership" element={<Leadership />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/our-brand" element={<Brand />} />
          <Route path="/our-people" element={<People />} />
          <Route path="/our-recognitions" element={<Recognitions />} />
          <Route path="/our-lifestyle" element={<Lifestyle />} />
          <Route path="/our-insights" element={<Insights />} />
          <Route path="/reports" element={<Reports />} />
          {/* <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/waitlist" element={<Waitlist />} /> */}
        </Routes>
    </>
  );
}

export default App;
