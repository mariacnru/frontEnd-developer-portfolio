import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./router";
import { ThemeProvider } from "./context/Theme";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <ScrollRestoration />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
