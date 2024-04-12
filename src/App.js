import React from 'react';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <main className={"main-content"}>
                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
//
// import Home from "./pages/Home";
// import News from "./pages/News";
//
// const App = () => {
//   return (
//       <Router>
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/news" element={<News />} />
//             {/* Define other routes that you need*/}
//           </Routes>
//         </main>
//       </Router>
//   );
// };
//
// export default App;