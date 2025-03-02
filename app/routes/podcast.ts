import { action } from "@ember/object";
import Route from "@ember/routing/route";
import type RouterService from "@ember/routing/router-service";
import { service } from "@ember/service";

export default class PodcastRoute extends Route {
    @service declare router: RouterService;

    @action error(error: any) {
        if (error.isAdapterError && error.errors && error.errors[0].status == "404") {
            this.router.replaceWith("home");
            return false;
        }
        return true;
    }
}
