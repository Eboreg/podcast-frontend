import { action } from "@ember/object";
import { service } from "@ember/service";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import type EpisodeModel from "podcast-frontend/models/episode";
import type AudioService from "podcast-frontend/services/audio";

export interface PlayerBarSignature {
    Args: {
        episode: EpisodeModel;
    };
    Element: HTMLDivElement;
}

export default class PlayerBar extends Component<PlayerBarSignature> {
    @service declare audio: AudioService;
    @tracked isExpanded: boolean = false;

    @action collapse() {
        this.isExpanded = false;
    }

    @action expand() {
        this.isExpanded = true;
    }
}
