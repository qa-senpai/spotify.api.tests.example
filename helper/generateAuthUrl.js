const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "https://7bb681eea42e.ngrok-free.app/callback"; // Must match your ngrok URL

// Required scopes for playlist operations
const scope = [
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-private",
  "user-read-private",
  "user-read-email",
].join(" ");

export function generateAuthUrl() {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
    state: "playlist-test", // Optional: helps prevent CSRF attacks
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  console.log(authUrl);

  return authUrl;
}

generateAuthUrl();
