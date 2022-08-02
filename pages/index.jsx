//import Navbar from "../components/Navbar";
import NavbarUser from "../components/NavbarUser";
import Productdetail from "./ProductDetail";

//import Dashboard from "./Dashboard";

//export async function getServerSideProps() {}

export default function Home() {
  return (
    <div>
      <NavbarUser />
      {/* <Dashboard /> */}
      <Productdetail />
    </div>
  );
}
