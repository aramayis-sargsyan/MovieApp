import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2IyMTFiNGE4NGQxYWYwMDk2OWQ4OTRiMjE0NzI2YyIsInN1YiI6IjYxMDgxMmVmMmY4ZDA5MDA1ZTE4M2U5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGH_vJlPfnqap787igVFxLdwJxm8W6tqdcDq5Ha5oCk",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default API;
