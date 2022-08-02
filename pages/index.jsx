//import Navbar from "../components/Navbar";
//import Productdetail from "./ProductDetail";
import NavbarUser from "../components/NavbarUser";
import Cart from "./Cart";

//import Dashboard from "./Dashboard";

//export async function getServerSideProps() {}

export default function Home() {
  return (
    <div>
      <NavbarUser />
      <Cart />
      {/* <Dashboard /> */}
      {/* <Productdetail /> */}
    </div>
  );
}
