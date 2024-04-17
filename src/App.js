import React from 'react';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";

const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <main className={"main-content"}>
                <AppRouter/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
//
// import ComponentSearch from "./pages/ComponentSearch";
// import Comparison from "./pages/Comparison";
//
// const App = () => {
//   return (
//       <Router>
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<ComponentSearch />} />
//             <Route path="/news" element={<Comparison />} />
//             {/* Define other routes that you need*/}
//           </Routes>
//         </main>
//       </Router>
//   );
// };
//
// export default App;