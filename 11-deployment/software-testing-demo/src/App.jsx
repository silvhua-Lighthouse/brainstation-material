import "./App.css";
import StoreList from "./components/StoreList";

function App() {
  return (
    <div className="App">
      <StoreList
        stores={[
          { id: 1, address: "40 West Coder Lane" },
          { id: 2, address: "202 Hackerville" },
          { id: 3, address: "404 Server Brook" },
          { id: 4, address: "367 React Street" },
        ]}
        sale={true}
        loadData={() => {}}
      />
    </div>
  );
}

export default App;
