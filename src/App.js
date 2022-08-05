//import logo from './logo.svg';
//import './App.css';

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListCommodites from "./containers/ListCommodites";
import CommodityDetailPage from "./containers/CommodityDetailPage";

function App() {
  const [commodityDataOn, setCommodityDataOn] = useState([]);

  useEffect(() => {
    const fetchDataCommodity = async () => {
      try {
        const response = await axios.get(
          "https://jibs.my.id/api/harga_komoditas"
        );
        setCommodityDataOn(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataCommodity();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
        <Route
          path="/commodites"
          element={
            <>
              <Header />
              <ListCommodites commodites={commodityDataOn} />
              <Footer />
            </>
          }
        />
        {/* child route */}

        <Route
          path="/commodites/:id"
          element={
            <>
              <Header />
              <CommodityDetailPage commodites={commodityDataOn} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
