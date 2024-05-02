import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";
import { cardAnimationTime, cardDelayTime } from "../card_container/card_container.js";

const component = 
{
    parent_id: "card_container",
    self_id: "card3",
    klass: ["card"],
    css: "sections/section3/section3_content/card3/card3.css",
    render: render
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>Egg Timer</h1>
        <h3 data-text="( DESIGN & CODE )">( DESIGN & CODE )</h3>
        <div class="tagline">
            <p class="tagline_text">Simple application.</p>
            <div class="tagline_symbol">✳</div>
        </div>

        <div class="line"></div>

        <div class="pictureContainer">
            <div class="circle"></div>
            <div class="picture"></div>
        </div>

        <div class="textContent">
            <p>A pair project in a design course. The project had us do both designing and coding, with a focus on the design.</p>

            <ul>
                <li><a href="https://www.maumt.se/wdu/ht22/students/nelly/eggTimer/" target="_blank">🔗 website</a></li>
            </ul>
        </div>
        
        <div class="line"></div>
    `;
    scrollTrigger("#" + component.self_id);

    
}

let scrollIniter;
window.innerWidth <= 760 ? scrollIniter = component.self_id : scrollIniter = component.parent_id;
PubSub.subscribe({event: "change::mobile", listener: (detail) => {detail.matches ? scrollIniter = component.self_id : scrollIniter = component.parent_id} })

PubSub.subscribe({event: "ele::active", listener: (detail) => {if(detail.initer !== scrollIniter) return; document.getElementById(component.self_id).classList.add("appear") }});
PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "card2") return; render_component(component)}});