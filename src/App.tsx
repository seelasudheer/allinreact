import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LogIn from "./pages/LogIn/LogIn";
import HomePage from "./pages/Home/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserManagement from "./pages/UserManagement/UserManagement";
import Shopping from "./pages/Shopping/Shopping";
import Profile from "./pages/Profile/Profile";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import DashboardContent from "./pages/Dashboard/DashboardContent";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoutes from "./router/PrivateRoutes";
import { useSelector } from "react-redux";
import MainRef from "./components/RefsExamples/MainRef";
import { UseReducerExample } from "./components/UseReducer/UseReducer";
import ContextExample from "./pages/ContextExample/ContextExample";

function App() {
  const isRehydrated = useSelector((state: any) => state._persist.rehydrated);

  // useEffect(() => {
  //   if (isRehydrated) {
  //     console.log("Rehydration finished");
  //     // You can add any code here that you want to run after rehydration
  //   } else {
  //     console.log("Rehydration in progress...");
  //   }
  // }, [isRehydrated]); // This effect runs when `isRehydrated` changes

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="refs" element={<MainRef />} />
            <Route path="reducer" element={<UseReducerExample />} />
            <Route path="contextApi" element={<ContextExample />} />
          </Route>
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
