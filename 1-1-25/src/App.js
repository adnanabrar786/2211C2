import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Notfoun from './pages/Notfoun';
import Singleproducts from './pages/Singleproducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfoun />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singleproducts />} />
        {/* <Route path="/products/:id/:user" element={ <Singleproducts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router';

// function SearchResults() {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q");

//   return (
//     <div>
//       <p>
//         You searched for <i>{query}</i>
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/search" element={<SearchResults />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// function Profile() {
//   return (
//     <div>
//       <h2>Profile Components</h2>
//     </div>
//   );
// }

// function Setting() {
//   return (
//     <div>
//       <h2>Setting Component</h2>
//     </div>
//   );
// }


// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard Component</h2>
//       <Outlet /> 
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="setting" element={<Setting />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App


// import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// function Parent() {
//   return (
//     <div>
//       <h2>Parent</h2>
//       <Outlet /> {/* Nested routes will be rendered here */}
//     </div>
//   );
// }

// function Child() {
//   return <div>Child Component</div>;
// }

//  function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/parent" element={<Parent />}>
//           <Route path="child" element={<Child />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App