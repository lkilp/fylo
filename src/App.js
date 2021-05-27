import './App.scss';
import Attribution from './components/Attribution';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import StayProductive from './components/StayProductive';
import TestimonialsContainer from './components/TestimonialsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <StayProductive />
      <TestimonialsContainer />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
