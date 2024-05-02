import "./components/sections/section1/section1.js";
import "./components/sections/section2/section2.js";
import "./components/sections/section3/section3.js";
import "./components/sections/section4/section4.js";

import "./components/sections/section1/section1_content/circle/circle.js"
import "./components/sections/section1/section1_content/intro/intro.js"

import "./components/scrolling_text/scrolling_text.js"
import "./components/sections/section2/section2_content/programming_part/programming_part.js"
import "./components/sections/section2/section2_content/design_part/design_part.js"
import "./components/sections/section2/section2_content/circles/circles.js"

import "./components/sections/section3/section3_content/card_container/card_container.js"
import "./components/sections/section3/section3_content/card1/card1.js"
import "./components/sections/section3/section3_content/card2/card2.js"
import "./components/sections/section3/section3_content/card3/card3.js"

import "./components/nav/nav.js"

import { PubSub } from "./logic/Pubsub.js";

PubSub.publish({event: "render::app", detail: {initer: "start"}});
