import Heroes from "../components/Heroes";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <>
      <Navbar/>
      <div
        style={{
          margin: "1em",
        }}
      >
        <h1>Tu equipo</h1>
        <Heroes />
        <h1>Estadísticas</h1>
        <Statistics />
      </div>
    </>
  );
}
