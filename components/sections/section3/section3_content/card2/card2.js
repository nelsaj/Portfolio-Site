import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";
import { cardAnimationTime, cardDelayTime } from "../card_container/card_container.js";

const component = 
{
    parent_id: "card_container",
    self_id: "card2",
    klass: ["card"],
    css: "sections/section3/section3_content/card2/card2.css",
    render: render
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>Best Selling Games</h1>
        <h3 data-text="( CODE )">( CODE )</h3>
        <div class="tagline">
            <p class="tagline_text">Data visualization with D3.</p>
            <div class="tagline_symbol">✧</div>
        </div>

        <div class="line"></div>


        <div class="textContent">
            <p>Data visualization using a blend of different graphs. The website, and accompanying visualization, was created by myself and another team member.</p>

            <ul>
                <li><a href="https://www.maumt.se/wdu/ht22/students/NellyIsak/data-viz/" target="_blank">🔗 website</a></li>
            </ul>
        </div>

        <div id="barChartContainer">
            <div class="rect"></div>
            <div class="rect"></div>
            <div class="rect"></div>
        </div>
        <div class="circle"></div>
        
        <div class="line"></div>
    `;
    scrollTrigger("#" + component.self_id);

    PubSub.publish({event: "render::app", detail: {initer: "card2"}});
}

let scrollIniter;
window.innerWidth <= 760 ? scrollIniter = component.self_id : scrollIniter = component.parent_id;
PubSub.subscribe({event: "change::mobile", listener: (detail) => {detail.matches ? scrollIniter = component.self_id : scrollIniter = component.parent_id} })

PubSub.subscribe({event: "ele::active", listener: (detail) => {if(detail.initer !== scrollIniter) return; document.getElementById(component.self_id).classList.add("appear") }});
PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "card1") return; render_component(component)}});