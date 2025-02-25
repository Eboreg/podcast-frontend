import EmberRouter from "@ember/routing/router";
import config from "podcast-frontend/config/environment";

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route("home", { path: "" });
    this.route("podcast", { path: ":podcast_id" }, function () {
        this.route("episode", { path: ":episode_id" });
    });
});
