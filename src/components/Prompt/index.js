/**
 *
 * @param {*} props: email -> current user email given by Home
 * @returns A form that requires the user to give a slackusername because their email is not currently associated with one in the database
 */
function Prompt(props) {
  return (
    <div className="modalcontainer">
      {/* The div below needs to be deleted at some point when styling is complete */}
      <div
        onClick={() => {
          document.querySelector('.modalcontainer').classList.add('hidden');
        }}
      >
        Working
      </div>
      <p id="welcomeText">
        Welcome to our site. The big red button in the bottom right is the Panic
        Button - press it if you want to ask for help!
      </p>
      <p style={{ height: '1rem' }}></p>
      <label htmlFor="name_input"> Please enter your slack username:</label>
      <input
        name="name_input"
        id="username"
        type="text"
        placeholder="Slack username"
      ></input>

      <button
        onClick={async () => {
          //post to server/db with email and username and then hide the prompt form
          let username = document.getElementById('username').value;
          document.getElementById('username').value = '';
          document.querySelector('.modalcontainer').classList.add('hidden');
          await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: props.email,
              slackUsername: username,
            }),
          });
          window.location.reload();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Prompt;
