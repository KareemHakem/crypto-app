import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "https://coinranking1.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "8b2420dfc9msh89bc8d40488ec83p1670a3jsn5b678c3c9adb",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});

export const axiosNews = axiosPackage.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com/",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "8b2420dfc9msh89bc8d40488ec83p1670a3jsn5b678c3c9adb",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
});
