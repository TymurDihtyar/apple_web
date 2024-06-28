import { Hero } from './components/Hero.jsx';
import { Hightlights } from './components/Hightlights.jsx';
import { Navbar } from './components/Navbar.jsx';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
    </main>
  );
};

export default App;
