import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

//export async function getServerSideProps() {}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}
