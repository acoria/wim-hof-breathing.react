import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { HappyMoodPage } from "./pages/HappyMoodPage";
import { InteroceptionBreathingPage } from "./pages/InteroceptionBreathingPage";
import { InteroceptionHeartBeatPage } from "./pages/InteroceptionHeartBeatPage";
import { PainSoothingPage } from "./pages/PainSoothingPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WarmingUpPage } from "./pages/WarmingUpPage";
import { WimHofBreathingPage } from "./pages/WimHofBreathingPage";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/wimHofBreathing", element: <WimHofBreathingPage /> },
  { path: "/painSoothing", element: <PainSoothingPage /> },
  { path: "/happyMood", element: <HappyMoodPage /> },
  { path: "/warmingUp", element: <WarmingUpPage /> },
  { path: "/interoceptionBreathing", element: <InteroceptionBreathingPage /> },
  { path: "/interoceptionHeartBeat", element: <InteroceptionHeartBeatPage /> },
  { path: "/settings", element: <SettingsPage /> },
]);
