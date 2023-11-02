import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/EstatusOperacion";
import Products from "./components/Products";
import EstatusSistema from "./components/EstatusSistema";
import EstatusOperacion from "./components/EstatusOperacion";
import EstatusMensual1 from "./components/EstatusMensual1";
import EstatusMensual2 from "./components/EstatusMensual2";
import LoginView from "./components/Login";
import { useEffect, useState } from "react";
import { getHostPath, setHost } from "./utils/host";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const base = window.location.hostname.split("http://");
    setHost(base[base.length - 1].split(":")[0], 4000);
    setLoaded(true);
  }, []);

  return loaded ? (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EstatusSistema />} />
          <Route path="mensual1" element={<EstatusMensual1 />} />
          <Route path="mensual2" element={<EstatusMensual2 />} />
          <Route path="operation" element={<EstatusOperacion />} />
        </Route>

        <Route path="login" element={<LoginView />} />
      </Routes>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
