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
      itemSize={4}
      radius={9}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        sx={{ width: 'fit-content' }}
        onClick={() => (window.location.href = '/settings')}
        tooltip="Email"
        tooltipPlacement={TooltipPlacement.Right}
      >
        Settings
      </CircleMenuItem>
      <CircleMenuItem
        sx={{ width: 'fit-content' }}
        onClick={() => {
          window.location.href = '/resources';
        }}
        tooltip="Help"
      >
        Resources
      </CircleMenuItem>
      <CircleMenuItem
        sx={{ width: 'fit-content' }}
        onClick={() => {
          window.location.href = '/diary';
        }}
        tooltip="Location"
      >
        Diary
      </CircleMenuItem>
      <CircleMenuItem
        sx={{ width: 'fit-content' }}
        onClick={() => {
          window.location.href = '/';
        }}
        tooltip="Info"
      >
        Home
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default Menu;
