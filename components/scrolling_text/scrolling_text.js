import { PubSub } from "../../logic/Pubsub.js";
import { render_component } from "../component_manager.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "scrolling_text",
    css: "scrolling_text/scrolling_text.css",
    render: render
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <div id="top_marquee" class="marquee">
            <div class="track">
                <div class="content">
                    MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS
                </div>
            </div>
        </div>

        <div id="mainContent">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  viewBox="0 0 48 48">
            <path fill="#ffbf00" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  viewBox="0 0 48 48">
            <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  viewBox="0 0 48 48">
            <path fill="#3e0300" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#ffab00" d="M24.036,27.332h-5.389l-1.101,3.404c-0.029,0.13-0.145,0.217-0.275,0.203h-2.724 c-0.159,0-0.203-0.087-0.159-0.261l4.665-13.43c0.043-0.145,0.087-0.304,0.145-0.478c0.058-0.304,0.087-0.623,0.087-0.942 c-0.014-0.072,0.043-0.145,0.116-0.159h0.043h3.709c0.116,0,0.174,0.043,0.188,0.116l5.288,14.922 c0.043,0.159,0,0.232-0.145,0.232h-3.028c-0.101,0.014-0.203-0.058-0.232-0.159L24.036,27.332L24.036,27.332z M19.487,24.391 h3.68c-0.087-0.304-0.203-0.666-0.333-1.043c-0.13-0.391-0.261-0.811-0.391-1.246c-0.145-0.449-0.275-0.884-0.42-1.333 c-0.145-0.449-0.275-0.869-0.391-1.289c-0.116-0.406-0.217-0.782-0.319-1.13h-0.029c-0.13,0.623-0.29,1.246-0.493,1.869 c-0.217,0.695-0.435,1.42-0.666,2.144C19.922,23.102,19.704,23.783,19.487,24.391z"></path><path fill="#ffab00" d="M31.859,18.205c-0.478,0.014-0.942-0.174-1.289-0.507c-0.333-0.362-0.507-0.84-0.493-1.333 c-0.014-0.493,0.174-0.956,0.522-1.289c0.348-0.333,0.811-0.507,1.289-0.507c0.565,0,1,0.174,1.318,0.507 c0.319,0.348,0.493,0.811,0.478,1.289c0.014,0.493-0.159,0.971-0.507,1.333C32.844,18.046,32.352,18.234,31.859,18.205 L31.859,18.205z M30.236,30.78V19.625c0-0.145,0.058-0.203,0.188-0.203h2.868c0.13,0,0.188,0.072,0.188,0.203V30.78 c0,0.159-0.058,0.232-0.188,0.232h-2.839C30.309,31.012,30.236,30.925,30.236,30.78z"></path>
            </svg>
        </div>

        <div id="bottom_marquee" class="marquee">
            <div class="track">
                <div class="content">
                    MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS ✽ MY BEST SKILLS
                </div>
            </div>
        </div>

        <div id="blureffects">
            <div class="blureffect"></div>
            <div class="blureffect"></div>
        </div>
    `;

    PubSub.publish({event: "render::app", detail: {initer: "scrolling_text"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section2") return; render_component(component)}});

{/* <img src="./imgs/malmo_latin.png"></img>
<img src="https://idservice.mau.se/Images/header/logo_red_sv.png"></img> */}