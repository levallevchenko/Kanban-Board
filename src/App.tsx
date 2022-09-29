import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="app">
      <Header className="app__main-header" />
			<Sidebar className="app__sidebar" />
			<Main className="app__main" />
    </div>
  );
};

export default App;
