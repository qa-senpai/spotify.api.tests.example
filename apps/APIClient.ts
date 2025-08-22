import { APIRequestContext } from "playwright";
import { Playlists } from "./controllers/Playlists/Playlists.controller";
import { Users } from "./controllers/Users/Users.controller";
import { Auth } from "./controllers/Auth/Auth";

export class APIClient {
  playlist: Playlists;
  users: Users;
  auth: Auth;
  constructor(request: APIRequestContext) {
    this.playlist = new Playlists(request);
    this.users = new Users(request);
    this.auth = new Auth(request);
  }
}
