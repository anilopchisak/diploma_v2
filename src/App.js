import React, {useContext, useEffect} from 'react';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const App = observer (() => {

    const {user} = useContext(Context);
    const {ingr} = useContext(Context);

    useEffect( () => {
        if (localStorage.getItem('access')) {
            user.isAuth = true;
        }
        // const fetchIngredients = async () => {
        //     try {
        //         await ingr.fetchIngrNames();
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // fetchIngredients();
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <main className={"main-content"}>
                <AppRouter/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
});

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