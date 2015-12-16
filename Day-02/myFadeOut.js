function myFadeOut($element, duration){
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
             if (currentStep >= totalSteps) clearInterval(timer);
        },intervalStep);
}
