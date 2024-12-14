
import './App.css';
import { Mainloop } from './components/Mainloop';
import { AppProvider } from './context/appcontext';
function App() {
  return (
    <AppProvider>
      <Mainloop/>
    </AppProvider>
  );
}

export default App;
