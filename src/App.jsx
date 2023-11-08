import WorkoutMain from './components/WorkoutMain';
import logoImage from '/yoga.svg';
import './App.css';

const App = () => (
  <div>
  <main>
    <div className="title">
      <h1>6-day workout journey</h1>
      <h3>My Road to Wellness</h3>
    </div>
    <img src={logoImage} alt="My SVG" className="svgs"/>
    <WorkoutMain />
  </main>
  <footer>
    <div className="footer">
      <p>© Made with ❤ by<a href="https://github.com/highflyer910/workouts_schedule" target="_blank" rel="noreferrer">Thea</a></p>
    </div>
    </footer>
</div>
);

export default App;
