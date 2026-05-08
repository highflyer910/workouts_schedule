import WorkoutMain from './components/WorkoutMain';
import ThemeSwitcher from './components/ThemeSwitcher';
import logoImage from '/yoga.svg';
import './App.css';

const App = () => (
  <div className="app-container">
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <img src={logoImage} alt="Logo" className="app-logo"/>
          <div className="title-section">
            <h1>Workout Journey</h1>
            <p>Your Road to Wellness</p>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </header>

    <main className="app-main">
      <WorkoutMain />
    </main>

    <footer className="app-footer">
      <div className="footer-content">
        <p>© Made with ❤ by <a href="https://github.com/highflyer910/workouts_schedule" target="_blank" rel="noreferrer">Thea</a></p>
      </div>
    </footer>
    <div className="bg-decoration">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </div>
  </div>
);

export default App;
