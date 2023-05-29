import { createGlobalStyle } from "styled-components";
import ScrollToTop from "./components/common/ScrollToTop";
import MainPage from "./pages/MainPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import CommonQuestionsPage from "./pages/CommonQuestionsPage";
import PresearchPage from "./pages/PresearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
body {
font-family:  'Montserrat', sans-serif;}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={'/'}
            element={<MainPage />}
          />
          <Route
            path={'/privacy-policy'}
            element={<PrivacyPolicyPage />}
          />
          <Route
            path={'/terms-of-use'}
            element={<TermsOfUsePage />}
          />
          <Route
            path={'/common-questions'}
            element={<CommonQuestionsPage />}
          />
          <Route
            path={'/pre-search'}
            element={<PresearchPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;