import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Estante from "./pages/Estante/Estante";
import Detalhes from "./pages/Detalhes/Detalhes";

// function AppWrapper() {
//   // const location = useLocation();
//   // const isPageLogged = location.pathname === "/login";

//   return (
//     <>
//       {/* {!isPageLogged && <Header />} */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/estante" element={<Estante />} />
//         <Route path="/livro/:id" element={<Detalhes />} />
//         {/* <Route path="/login" element={<Login />} /> */}
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppWrapper />
//     </Router>
//   );
// }

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estante" element={<Estante />} />
        <Route path="/livro/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}
