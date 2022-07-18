import { Link } from "react-router-dom";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import "./Menu.css";

function Menu() {
  return (
    <CircleMenu
      style={{ borderColor: "#181e50" }}
      className="circle-menu"
      startAngle={-10}
      rotationAngle={150}
      itemSize={3.2}
      radius={7.2}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        style={{ borderColor: "#181e50" }}
        className="link-parent"
        tooltip="Settings"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <Link className="link-grow" to="/settings">
          Settings
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: "#181e50" }}
        className="link-parent"
        tooltipPlacement={TooltipPlacement.Right}
        sx={{ width: "fit-content" }}
        tooltip="Resources"
      >
        <Link className="link-grow" to="/resources">
          Resources
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: "#181e50" }}
        className="link-parent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: "fit-content" }}
        tooltip="Diary"
      >
        <Link className="link-grow" to="/diary">
          Diary
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: "#181e50" }}
        className="link-parent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: "fit-content" }}
        tooltip="Home"
      >
        <Link className="link-grow" to="/">
          Home
        </Link>
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default Menu;
