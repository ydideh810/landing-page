import Home from "@/pages/home";
import { Route, Routes, Navigate } from "react-router-dom";

import NavbarAndFooter from "./components/layouts/NavbarAndFooter";
import PillButton, HoverPillButton from "./components/ui/WaitlistInput";

function App() {
  return (
    <NavbarAndFooter>
      <Routes>
        {/* Single catch-all route because we only have one page now */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
       <PillButton />
      <HoverPillButton/>
    </NavbarAndFooter>
  );
}

export default App;
