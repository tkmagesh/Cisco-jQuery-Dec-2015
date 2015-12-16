function myFadeOut($element, duration, callback){
    var totalDuration = duration,
        totalSteps = 100,
        currentStep = 0,
        opacityStep = (1 / totalSteps),
        intervalStep = (totalDuration / totalSteps),
        currentOpacity = 1,
        timer = setInterval(function(){
             currentOpacity -= opacityStep;
             $element.css("opacity", currentOpacity);
             ++currentStep;
             console.log("executing step - ", currentStep);
             if (currentStep >= totalSteps) {
                 clearInterval(timer);
                 if (typeof callback === 'function')
                     callback();
             }
        },intervalStep);
        console.log("fadeOut Completed");
}
function myFadeOutAndHide($element){
     myFadeOut($element, 3000, function(){
        console.log("hiding the element");
        $element.hide();
     });


}
