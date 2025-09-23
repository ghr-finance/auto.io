import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Table from "./components/Table";
import "./styles/App.scss";

function App() {
  const [activeTab, setActiveTab] = useState("bulan");
  const [data, setData] = useState([]);

  useEffect(() => {
    let fileName = "summary.json";
    if (activeTab === "detail") fileName = "summary_detail.json";
    if (activeTab === "pic") fileName = "summary_by_pic.json";

    fetch(fileName)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error("Error load JSON:", err);
        setData([]);
      });
  }, [activeTab]);

  return (
    <div className="app-container">
      <h1>Laporan Keuangan GHR</h1>
      <Tabs active={activeTab} setActive={setActiveTab} />
      <Table data={data} />
    </div>
  );
}

export default App;
