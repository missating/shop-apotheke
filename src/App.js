import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import RepositoryList from 'containers/RepositoryList'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<RepositoryList />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
