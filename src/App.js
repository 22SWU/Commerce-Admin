import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const Layout = () => (
  <div>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </div>
);

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <>
          {admin && (
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Route>
          )}
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
