import StoreCard from "./StoreCard";

function StoreList({ stores, sale, loadData }) {
  const testFunction = () => {
    console.log("Hello world");
    loadData();
  };

  return (
    <div className={sale ? "sale" : ""}>
      <h2>Store List</h2>

      {stores.map((item) => (
        <StoreCard key={item.id} address={item.address} />
      ))}

      <button onClick={testFunction}>load more stores</button>
    </div>
  );
}

export default StoreList;
