import Nav from "./app/components/Nav";
import Hero from "./app/components/Hero";
import MovieList from "./app/components/MovieList";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";


function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        <Nav 
        />
        <Hero 
        />
        <MovieList 
          title="Recomamded"
          filter="sort_by=rating"
        />
        <MovieList 
          title="Action"
          filter="genre=action"
        />
        <MovieList 
          title="Drama"
          filter="genre=drama"
        />
        <MovieList 
          title="Thriller"
          filter="genre=thriller"
        />
      </div>
    </div>
  );
}

export default App;
