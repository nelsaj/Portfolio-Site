import { scrollTrigger } from "../../../identities/active.js";
import { PubSub } from "../../../logic/Pubsub.js";
import { render_component } from "../../component_manager.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "section2",
    css: "sections/section2/section2.css",
    render: render,

    dom_type: "section"
}

function render (instance_DOM) {
    let wrapper = document.createElement("div");
    wrapper.id = "section2_wrapper";
    instance_DOM.append(wrapper);

    scrollTrigger("#" + component.self_id);

    PubSub.publish({event: "render::app", detail: {initer: "section2"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section1") return; render_component(component)}});