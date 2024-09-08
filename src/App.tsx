import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto px-4 flex w-full min-h-screen border border-black">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
