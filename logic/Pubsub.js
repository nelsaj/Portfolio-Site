const listeners = {};

export const PubSub = {
    subscribe: function (data) {
        let {event, listener} = data;

        if(listeners[event] == undefined){
            listeners[event] = [listener];
        } else {
            listeners[event].push(listener);
        }
    }, 

    unsubscribe: function (data) {
        let {event, listener} = data;

        for (let i = 0; i < listeners[event].length; i++) {
            if(listeners[event][i] == listener) listeners[event].splice(i, 1); break;
        }
    },

    publish: function (data) {
        let {event, detail} = data; 

        if(listeners[event] == undefined){
            // console.log(`There is no ${event} event`);
            return;
        }

        listeners[event].forEach(listener => {
            listener(detail);
        });
        if(event.includes("render::") || event.includes("scroll::")) return;
        // console.log(`Published event: ${event}`);
        // console.log(listeners);
    }
}