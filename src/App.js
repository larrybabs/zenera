import PostDetailsComponent from "./components/PostDetailsComponent";
import { About } from "./pages/aboutUs/about";
import { Culture } from "./pages/culture/Culture";
import { Brand } from "./pages/culture/OurBrand";
import { Insights } from "./pages/culture/OurInsights";
import { Lifestyle } from "./pages/culture/OurLifestyle";
import { People } from "./pages/culture/OurPeople";
import { Recognitions } from "./pages/culture/OurRecognition";
import Gallery from "./pages/gallery/Gallery";
import { Health } from "./pages/healthAndWellness/health";
import { Home } from "./pages/home/Home";
import { Leadership } from "./pages/leadership/Leadership";
import NotFound from "./pages/notFound/NotFound";
import { Press } from "./pages/press/Press";
import { Reports } from "./pages/ReportsDownload/ReportsDownload";
import { Services } from "./pages/services/Services";
import { Sports } from "./pages/sports/sports";
import { Sustainability } from "./pages/sustainability/Sustainability";


const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sustainability/leadership" element={<Leadership />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-brand" element={<Brand />} />
          <Route path="/our-people" element={<People />} />
          <Route path="/our-recognitions" element={<Recognitions />} />
          <Route path="/our-lifestyle" element={<Lifestyle />} />
          <Route path="/our-insights" element={<Insights />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/sustainability/health" element={<Health />} />
          <Route path="/sustainability/sports" element={<Sports />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press-releases" element={<Press />} />
          <Route path="/press/:id" element={<PostDetailsComponent />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
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
