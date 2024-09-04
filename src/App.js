import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Text from "./components/form-elements/Text";
import Textarea from "./components/form-elements/Textarea";
import Email from "./components/form-elements/Email";
import Checkbox from "./components/form-elements/Checkbox";
import Password from "./components/form-elements/Password";
import Number from "./components/form-elements/Number";
import Date from "./components/form-elements/Date";
import Range from "./components/form-elements/Range";
import Radio from "./components/form-elements/Radio";
import Select from "./components/form-elements/Select";
import File from "./components/form-elements/File";
import Telephone from "./components/form-elements/Telephone";
import Url from "./components/form-elements/Url";
import Search from "./components/form-elements/Search";
import Color from "./components/form-elements/Color";
import Trialform from "./components/Trialform";
import About from "./components/About";
import ContactUs from "./components/ContactUs";


function App() {
  return (
      <Router>
        <div className="min-h-screen">
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/trial" element={<Trialform />} />
                <Route path="/text" element={<Text />} />
                <Route path="/textarea" element={<Textarea />} />
                <Route path="/email" element={<Email />} />
                <Route path="/password" element={<Password />} />
                <Route path="/number" element={<Number />} />
                <Route path="/date" element={<Date />} />
                <Route path="/range" element={<Range />} />
                <Route path="/checkbox" element={<Checkbox />} />
                <Route path="/radio" element={<Radio />} />
                <Route path="/select" element={<Select />} />
                <Route path="/file" element={<File />} />
                <Route path="/telephone" element={<Telephone />} />
                <Route path="/url" element={<Url />} />
                <Route path="/search" element={<Search />} />
                <Route path="/color" element={<Color />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
