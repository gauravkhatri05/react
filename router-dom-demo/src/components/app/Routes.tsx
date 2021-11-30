import AboutPage from "components/pages/AboutPage";
import ContactPage from "components/pages/ContactPage";
import HomePage from "components/pages/HomePage";
import { Route, Routes as Switch } from "react-router";

export const Routes = () => (
  <Switch>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Switch>
);
