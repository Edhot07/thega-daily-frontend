import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { PageNotFound } from "./components/PageNotFound";
import { AdminDashboard } from "./admin/AdminDashboard";
import { AdminRoute } from "./components/AdminRoute";
import { AdminLogIn } from "./admin/AdminLogIn";

function App() {
  return (
    <section className="h-screen flex items-center justify-center bg-slate-700">
      <Routes>
        {/* Layout Route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogIn />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
