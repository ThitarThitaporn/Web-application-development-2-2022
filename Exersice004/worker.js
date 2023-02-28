let inter

self.onmessage = function (event) {
    self.postMessage("changeColor");
    if (event.data === "start") {
        
        inter = setInterval(function () {
            const currentTime = new Date();
            self.postMessage(currentTime);
            self.postMessage("changeColor");
        }, 1000);
    }
    else if (event.data === "stop") {
        clearInterval(inter);
        const currentTime = new Date();
        self.postMessage(currentTime);
    };
    ; 
}