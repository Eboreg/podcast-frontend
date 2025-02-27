import type Store from "@ember-data/store";
import Route from "@ember/routing/route";
import { service } from "@ember/service";
import EpisodeModel from "podcast-frontend/models/episode";
import type AudioService from "podcast-frontend/services/audio";
import type HeadDataService from "podcast-frontend/services/head-data";

export default class PodcastEpisodeRoute extends Route<EpisodeModel> {
    @service declare store: Store;
    @service declare headData: HeadDataService;
    @service declare audio: AudioService;

    model(params: { episode_id: string }) {
        return this.store.findRecord<EpisodeModel>("episode", params.episode_id, {
            include: ["podcast.categories", "podcast.links", "podcast.owners"],
        });
    }

    afterModel(model: EpisodeModel) {
        this.headData.favicon = model.podcast.faviconData;
        this.headData.ogTitle = `${model.name} | ${model.podcast.name}`;
        this.headData.ogDescription = model.description || model.podcast.tagline;
        this.headData.ogImage = model.podcast.bannerData;
        this.headData.rss = model.podcast.rssData;
        if (model["dbfs-array"] && !this.audio.episode) this.audio.setEpisode(model);
    }
}
