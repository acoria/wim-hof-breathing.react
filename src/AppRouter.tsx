import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { HappyMoodPage } from "./pages/HappyMoodPage";
import { InteroceptionBreathingPage } from "./pages/InteroceptionBreathingPage";
import { InteroceptionHeartBeatPage } from "./pages/InteroceptionHeartBeatPage";
import { PainSoothingPage } from "./pages/PainSoothingPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WarmingUpPage } from "./pages/WarmingUpPage";
import { WimHofBreathingPage } from "./pages/WimHofBreathingPage";
import { PowerBreathingPage } from "./pages/PowerBreathingPage";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/happyMood", element: <HappyMoodPage /> },
  { path: "/interoceptionBreathing", element: <InteroceptionBreathingPage /> },
  { path: "/interoceptionHeartBeat", element: <InteroceptionHeartBeatPage /> },
  { path: "/painSoothing", element: <PainSoothingPage /> },
  { path: "/powerBreathing", element: <PowerBreathingPage /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/warmingUp", element: <WarmingUpPage /> },
  { path: "/wimHofBreathing", element: <WimHofBreathingPage /> },
]);
