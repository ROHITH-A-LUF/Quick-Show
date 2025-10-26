import fetch from "node-fetch";

const TMDB_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTk2ZDAyYTVhNzUzYzEwZjk5OTM0YmEzNGFjZGU1MyIsIm5iZiI6MTc2MTQ1NTg1My42NDksInN1YiI6IjY4ZmRhZWVkOTQ3YzJlOTg0NGVhYWI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3u2WbpCnI4bFLfI3k8S4iHWOMNQqxJyJUne2EoVuIY";

const url = "https://api.themoviedb.org/3/movie/popular";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

const testAPI = async () => {
  const res = await fetch(url, { headers });
  console.log("Status:", res.status);
  if (res.ok) {
    const data = await res.json();
    console.log("✅ API key is working!");
    console.log("Top 3 movies:");
    data.results.slice(0, 3).forEach((m) => console.log("-", m.title));
  } else {
    console.error("❌ Error:", await res.text());
  }
};

testAPI();
