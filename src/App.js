// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import UserDetails from "./pages/UserDetails";
// import UserForm from "./components/UserForm";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/create-new-user" element={<UserForm />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/user/:id" element={<UserDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;