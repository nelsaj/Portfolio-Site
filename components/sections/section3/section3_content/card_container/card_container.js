import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

export const cardAnimationTime = 1.2;
export const cardDelayTime = .2;

document.body.style.setProperty('--cardAnimationTime', "1.2s");
document.body.style.setProperty('--cardDelayTime', .2);

const component = 
{
    parent_id: "section3",
    self_id: "card_container",

    css: "sections/section3/section3_content/card_container/card_container.css",
    render: render
}

function render (instance_DOM) {

    scrollTrigger("#" + component.self_id);
    PubSub.publish({event: "render::app", detail: {initer: "card_container"}});
}

// PubSub.subscribe({event: "ele::active", listener: (detail) => {if(detail.initer !== "card2") return; document.getElementById(component.self_id).classList.add("appear") }});
PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section3") return; render_component(component)}});