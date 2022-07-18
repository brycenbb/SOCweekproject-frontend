import "./Prompt.css";
/**
 *
 * @param {*} props: email -> current user email given by Home
 * @returns A form that requires the user to give a slackusername because their email is not currently associated with one in the database
 */
function Prompt(props) {
  return (
    <div className="prompt-container">
      <div
        onClick={() => {
          document.querySelector(".prompt-container").classList.add("hidden");
        }}
      >
        Working
      </div>
      <p id="welcome-text">
        Welcome to our site. The big red button in the bottom right is the Panic
        Button - press it if you want to ask for help!
      </p>
      <p style={{ height: "1rem" }}></p>
      <label htmlFor="name-input"> Please enter your slack username:</label>
      <input
        name="name-input"
        id="username"
        type="text"
        placeholder="Slack username"
      ></input>

      <button
        onClick={async () => {
          let username = document.getElementById("username").value;
          document.getElementById("username").value = "";
          document.querySelector(".prompt-container").classList.add("hidden");
          await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
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
