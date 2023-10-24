import { useNavigate } from "react-router-dom";
import { texts } from "../../i18n/texts";
import { IMenuItem } from "../core/menu/IMenuItem";
import { Menu } from "../core/menu/Menu";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems: IMenuItem[] = [
    { title: texts.wimHofBreathing.title, path: "/wimHofBreathing" },
    {
      title: texts.interoceptionBreathing.title,
      path: "/interoceptionBreathing",
    },
    {
      title: texts.interoceptionHeartBeat.title,
      path: "/interoceptionHeartBeat",
    },
    { title: texts.warmingUp.title, path: "/warmingUp" },
    { title: texts.happyMood.title, path: "/happyMood" },
    { title: texts.painSoothing.title, path: "/painSoothing" },
    { title: texts.powerBreathing.title, path: "/powerBreathing" },
    { title: texts.settings.title, path: "/settings" },
  ];

  return (
    <Menu menuItems={menuItems} onMenuItemSelected={(path) => navigate(path)} />
  );
};
