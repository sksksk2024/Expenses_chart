import Balance from "./components/Balance";
import Spending from "./components/Spending";

function App() {
  return (
    <main className="flex flex-col gap-8 3xs:max-w-600MW md:w-600W lg:w-800W xs:max-w-800MW">

      <Balance />
      <Spending />

    </main>
  );
}

export default App;
