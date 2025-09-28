import { useState } from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  // Utiliser le routage pour la navigation des pages
  // Pas de UseState dans la navigation
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const goToHome = () => setCurrentPage("home");
  const goToLogin = () => setCurrentPage("login");
  const goToDetail = (property: any) => {
    setSelectedProperty(property);
    setCurrentPage("detail");
  };

  return (
    <>
      {currentPage === "home" && (
        <HomePage
          goToDetail={goToDetail}
          goToLogin={goToLogin}
          goToHome={goToHome}
        />
      )}
      {currentPage === "detail" && (
        <DetailPage
          property={selectedProperty}
          goToHome={goToHome}
          goToLogin={goToLogin}
        />
      )}
      {currentPage === "login" && <LoginPage goToHome={goToHome} />}
    </>
  );
}

export default App;
