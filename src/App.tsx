import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
