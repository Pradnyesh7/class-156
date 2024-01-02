AFRAME.registerComponent("game-play",{
    
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init: function(){
        var dur = 120;
        var timerEl = document.querySelector("#timer")
        this.startTimer(dur,timerEl)

    },
    startTimer: function(dur,timerEl){
        var minutes,seconds;
        setInterval(() => {
            if(dur>=0){
                minutes= parseInt(dur/60)
                seconds= parseInt(dur%60)
                timerEl.setAttribute("text",{value:minutes+":"+seconds})
                dur-=1

            }
            else{
                this.gameOver()
            }
        }, 1000);
    },
    gameOver: function(){
        var planeEl = document.querySelector("#plane_model")
        var gameOverEl = document.querySelector("#gameOverText")
        gameOverEl.setAttribute("visible",true)
        planeEl.setAttribute("dynamic-body",{mass:1})

    },
    update: function(){
        this.isCollided(this.data.elementId)
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                console.log(elementId+"collision")
            }
            else if(elementId.includes("#hurdle")){
                console.log("bird collided!")
            }
        })
    }

    })
