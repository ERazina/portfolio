import React from 'react';
// import About from './components/About/about';
// import Layout from './components/Layout/Layout';
import Resume from './components/Resume/Resume';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
// import OpenAi from './components/OpenAI/OpenAi';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
              {/* <Route path="about" element={<About />} /> */}
              <Route path="/" element={<Resume />} />
              {/* <Route path="open-ai" element={<OpenAi />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
