import { Route, Routes } from "react-router";
import { HOME_ROUTE } from "./utils/consts";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-w-[300px]">
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
