import AScore from './Ascore.js'

var app = new Vue({
    el: '#app',
        components:
    {
        Ascore:AScore
    },
    data :{
        noofplrs :2,
        seenurl: "images/openeye.png",
        winnerurl: "images/crown.png",
        seen:false,
        mal:0
    },
    methods :{
        noplrs(){
            app.noofplrs ===6 ?(app.noofplrs=2) :  (app.noofplrs=app.noofplrs+1)        
        },
        seenclicked(){           
            app.seenurl=app.seenurl== "images/openeye.png"?"images/closedeye.png" :  "images/openeye.png"    
        },
        winnertoggle()
        {
            app.winnerurl=app.winnerurl== "images/crown.png"?"images/nowin.png" :  "images/crown.png"    
        }
    },
    computed :{
        point()
        {
            return  this.mal+4 
        }
    
    }

})