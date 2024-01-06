import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newslist from "./Components/Newslist";
import axios from 'axios'
import SingleNews from "./Components/SingleNews";

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get(
          "https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in"
          
        );
        setNewsList(res.data.article);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Newslist newsList={newsList} />}/>
        <Route path="/news/:id" element={<SingleNews newsList={newsList}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;



//https://newsapi.org/v2/top-headlines?country=in&apiKey=b97521344f9440909393e4e3e947bffd