import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Homepage, Error, Launchpads, SingleLaunchpad, SingleLaunch, Launches} from "./pages"
import {Header} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/launchpads" element={<Launchpads />}></Route>
        <Route path="/launchpads/:id" element={<SingleLaunchpad />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/launches/:id" element={<SingleLaunch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
