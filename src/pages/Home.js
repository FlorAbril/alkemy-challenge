import Heroes from "../components/Heroes";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <>
      <Navbar/>
      <div
        style={{
          margin: "1.5rem",
        }}
      >
        <h1>Your Team</h1>
        <Heroes />
        <h1>Statistics</h1>
        <Statistics />
      </div>
    </>
  );
}
