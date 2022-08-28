import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import { Navbar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Exchanges } from "./components/Exchanges";
import { Cryptocurrencies } from "./components/Cryptocurrencies";
import { CryptoDetails } from "./components/CryptoDetails";
import { News } from "./components/News";
import { Footer } from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
