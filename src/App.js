import React from 'react';
import Resume from './components/Resume/Resume';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
              <Route path="/" element={<Resume />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
