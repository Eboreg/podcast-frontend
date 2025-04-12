import type Store from "@ember-data/store";
import { service } from "@ember/service";
import PodcastModel from "podcast-frontend/models/podcast";
import type HeadDataService from "podcast-frontend/services/head-data";
import { ping } from "podcast-frontend/utils";
import type FastBoot from "ember-cli-fastboot/services/fastboot";
import PreserveScrollRoute from "podcast-frontend/preserve-scroll-route";

export default class PodcastIndexRoute extends PreserveScrollRoute<PodcastModel> {
    @service declare fastboot: FastBoot;
    @service declare headData: HeadDataService;
    @service declare store: Store;

    afterModel(model?: PodcastModel) {
        if (model) {
            this.headData.updateFromPodcast(model);
            if (model.id && !this.fastboot.isFastBoot) {
                ping("podcasts", model.id);
            }
        }
    }

    async model() {
        const params = this.paramsFor("podcast") as { podcast_id: string };

        return this.store.findRecord<PodcastModel>("podcast", params.podcast_id, {
            include: ["contents", "categories", "links"],
            backgroundReload: false,
        });
    }
}
