import React from "react";

function Home() {
  const githiubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  return (
    <div>
      <h2>Welcome to O Auth Demo</h2>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={githiubLogin}>Login with Github</button>
    </div>
  );
}

export default Home;
