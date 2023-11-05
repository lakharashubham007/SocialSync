import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./pages";
import { useSelector } from "react-redux";
// import theme from "./redux/theme";

/**
 * Layout Component
 *
 * This component controls access to certain parts of the application based on user authentication.
 * If the user is authenticated, it renders the content using <Outlet />, otherwise, it redirects to the login page.
 *
 * @component
 */
function Layout() {
  // Mock user object; replace with actual user data once authenticated.
  const user = useSelector((state) => state.user);
  console.log(user);

  // Get the current location using the useLocation hook.
  const location = useLocation();

  return user?.token ? (
    // If the user is authenticated, render the content.
    <Outlet />
  ) : (
    // If the user is not authenticated, redirect to the login page with the current location information.
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
