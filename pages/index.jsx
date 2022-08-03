//import Navbar from "../components/Navbar";
//import NavbarAdmin from "../components/NavbarAdmin";
import NavbarUser from "../components/NavbarUser";
//import Productdetail from "./ProductDetail";
//import Historyorder from "./Historyorder";
//import Cart from "./Cart";
//import Profileuser from "./Profileuser";
import Dashboard from "./Dashboard";

//export async function getServerSideProps() {}

export default function Home() {
  return (
    <div>
      <NavbarUser />
      {/* <Cart /> */}
      <Dashboard />
      {/* <Productdetail /> */}
      {/* <Profileuser /> */}
      {/* <Historyorder /> */}
    </div>
  );
}
