import { Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useTheme from "./hooks/useTheme";

import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { HousesProvider } from "./contexts/HousesContext";
import { DialogProvider } from "./contexts/DialogContext";
import { SoundProvider } from "./contexts/SoundContext";

function App() {
  const theme = useTheme();

  return (
    <SoundProvider>
      <ThemeProvider theme={theme}>
        <HousesProvider>
          <DialogProvider>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </DialogProvider>
        </HousesProvider>
      </ThemeProvider>
    </SoundProvider>
  );
}

export default App;
