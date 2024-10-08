import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="mx-auto md:flex-row flex-col flex w-full min-h-screen">
          <Navbar />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
