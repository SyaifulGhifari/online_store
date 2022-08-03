//import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import Addpage from "./Addpage";
//import NavbarUser from "../components/NavbarUser";
//import Productdetail from "./ProductDetail";
//import Historyorder from "./Historyorder";
//import Cart from "./Cart";
//import Profileuser from "./Profileuser";
//import Dashboard from "./Dashboard";

//export async function getServerSideProps() {}

export default function Home() {
  return (
    <div>
      <NavbarAdmin />
      {/* <Cart /> */}
      {/* <Dashboard /> */}
      {/* <Productdetail /> */}
      {/* <Profileuser /> */}
      {/* <Historyorder /> */}
      <Addpage />
    </div>
  );
}
