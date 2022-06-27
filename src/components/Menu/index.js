// import MailIcon from '@material-ui/icons/Mail';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import MapIcon from '@material-ui/icons/Map';
import { Link } from 'react-router-dom';

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from 'react-circular-menu';

function Menu() {
  return (
    <CircleMenu
      className="circleMenu"
      startAngle={0}
      rotationAngle={240}
      itemSize={3}
      radius={6}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        className="linkparent"
        // onClick={() => (window.location.href = '/settings')}
        tooltip="Settings"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <Link className="linkgrow" to="/settings">
          Settings
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: 'fit-content' }}
        // onClick={() => {
        //   window.location.href = '/resources';
        // }}
        tooltip="Resources"
      >
        <Link className="linkgrow" to="/resources">
          Resources
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: 'fit-content' }}
        // onClick={() => {
        //   window.location.href = '/diary';
        // }}
        tooltip="Diary"
      >
        <Link className="linkgrow" to="/diary">
          Diary
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Left}
        sx={{ width: 'fit-content' }}
        // onClick={() => {
        //   window.location.href = '/';
        // }}
        tooltip="Home"
      >
        <Link className="linkgrow" to="/">
          Home
        </Link>
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default Menu;
