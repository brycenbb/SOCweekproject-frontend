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
      style={{ borderColor: '#181e50' }}
      className="circleMenu"
      startAngle={-10}
      rotationAngle={150}
      itemSize={3.2}
      radius={7.2}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        style={{ borderColor: '#181e50' }}
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
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Right}
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
        style={{ borderColor: '#181e50' }}
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
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Bottom}
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
