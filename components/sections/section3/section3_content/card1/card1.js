import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "card_container",
    self_id: "card1",
    klass: ["card"],
    css: "sections/section3/section3_content/card1/card1.css",
    render: render
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>TIPSY</h1>
        <h3 data-text="( DESIGN )">( DESIGN )</h3>
        <div class="tagline">
            <p class="tagline_text">A betting party game.</p>
            <div class="tagline_symbol">✸</div>
        </div>

        <div class="line"></div>
        
        <div class="pictureContainer">
            <div class="circle"></div>
            <div class="picture"></div>
        </div>

        <div class="textContent">
            <p>The final project in a design course. It was a group project where we were divided into designers and programmers, I acted as one of the designers.</p>

            <ul>
                <li><a href="https://www.figma.com/file/yXpbckUFBNYuPD9N8d82Jf/Tipsy-Design?type=design&node-id=0%3A1&mode=design&t=QQs1UgsdOLmQvmSl-1" target="_blank">🔗 figma file</a></li>
                <li><a href="https://thardemo.com/app/tipsy/" target="_blank">🔗 website (intended for mobile view)</a></li>
            </ul>
        </div>
        
        <div class="line"></div>
    `;
    scrollTrigger("#" + component.self_id);

    // scrapped idea for making the card move dynamically when hovered.
    // had too many bugs and didnt feel like a priority, might come back to.
    // not cleaned at all, would have to write the whole thing over.

    // let lastX = 0;
    // let lastY = 0;
    
    // let xCounter = 0;
    // let yCounter = 0;
    // // document.body.style.setProperty('--test', `${instance_DOM.getBoundingClientRect().left}px`); 
    // instance_DOM.addEventListener("mousemove", e => {
    //     let X = e.clientX;
    //     let Y = e.clientY;
    //     // document.body.style.setProperty('--clientX', `${X}px`);
    //     // document.body.style.setProperty('--clientY', `${Y}px`);

    //     let ammount = .2;
    //     let ammountMax = 2;
    //     let ammountMin = ammountMax * -1;

    //     X > lastX ? xCounter -= ammount : xCounter += ammount;
    //     Y > lastY ? yCounter -= ammount : yCounter += ammount;

    //     xCounter > ammountMax ? xCounter = ammountMax : "";
    //     yCounter > ammountMax ? yCounter = ammountMax : "";

    //     xCounter < ammountMin ? xCounter = ammountMin : "";
    //     yCounter < ammountMin ? yCounter = ammountMin : "";

    //     lastX = X;
    //     lastY = Y;

    //     instance_DOM.setAttribute('transform', `translateX(${xCounter}px)`);

    //     document.body.style.setProperty('--counterX', `${xCounter}px`);
    //     document.body.style.setProperty('--counterY', `${yCounter}px`);
    //     console.log(xCounter);

    // })
    // document.getElementById(component.self_id).addEventListener("mouseleave", e => {
    //     document.body.style.setProperty('--counterX', `0px`);
    //     document.body.style.setProperty('--counterY', `0px`);
    // })
    
    PubSub.publish({event: "render::app", detail: {initer: "card1"}});
}

let scrollIniter;
window.innerWidth <= 760 ? scrollIniter = component.self_id : scrollIniter = component.parent_id;
PubSub.subscribe({event: "change::mobile", listener: (detail) => {detail.matches ? scrollIniter = component.self_id : scrollIniter = component.parent_id} });

// window.innerWidth <= 760 ? scrollIniter = component.self_id : scrollIniter = component.parent_id;
PubSub.subscribe({event: "ele::active", listener: (detail) => {if(detail.initer !== scrollIniter) return; document.getElementById(component.self_id).classList.add("appear") }});
PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== component.parent_id) return; render_component(component)}});