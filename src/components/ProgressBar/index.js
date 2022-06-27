import { useEffect, useState } from 'react';
import LinearWithValueLabel from '../LinearProgress';
import { useAuth0 } from '@auth0/auth0-react';

/**
 *
 * @param {*} email -> the email of the current user provided by Home
 * @returns
 */
function ProgressBar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    //fetch based on most recent note (highest week) and get corresponding day
    //This needs to be changed to be what the current user note is based on their email, just place email into the fetch
    //There are 16 weeks with 5 work days so 80 total?
    async function Fetch() {
      let res = await fetch(`http://localhost:3001/recent?email=${user.email}`);
      let json = await res.json();
      let dataArr = json.data.length === 0 ? { week: 0, day: 0 } : json.data[0];
      setProgress((dataArr.week * 5 + dataArr.day) * 1.25);
    }
    Fetch();
  }, [user.email]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <figure
          className="progressBox"
          title={`Progress bar of School of Code completion percentage. You are ${progress}% done with the bootcamp`}
        >
          <LinearWithValueLabel progress={progress}></LinearWithValueLabel>
        </figure>
      </>
    )
  );
}

export default ProgressBar;
