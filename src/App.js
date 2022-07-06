import Nav from "./app/components/Nav";
import Hero from "./app/components/Hero";
import MovieList from "./app/components/MovieList";

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
          carousel={true}
        />
        <MovieList 
          title="Action"
          filter="genre=action"
          carousel={true}
          speed={1500}
          duration={1000}
        />
        <MovieList 
          title="Sci-Fi"
          filter="genre=sci-fi"
          carousel={true}
          speed={1500}
          duration={1000}
        />
        <MovieList 
          title="Adventure"
          filter="genre=adventure"
          carousel={true}
          speed={1500}
          duration={1000}
        />
        <MovieList 
          title="History"
          filter="genre=history"
          carousel={true}
          speed={1500}
          duration={1000}
        />
        <MovieList 
          title="Drama"
          filter="genre=drama"
          carousel={true}
          speed={1500}
          duration={1000}
        />
        
      </div>
      <div className="text-white text-center py-4 text-lg">Build With ❤ By <a className="font-semibold" href="#">Mahfuz</a></div>
    </div>
  );
}

export default App;
