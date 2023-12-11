var app = new Vue({
    el: '#app',
    data :{
        noofplrs :2,
        seenurl: "openeye.png",
        winnerurl: "crown.png",
        seen:false,
        mal:0,
        
    },
    methods :{
        noplrs(){
            app.noofplrs ===6 ?(app.noofplrs=2) :  (app.noofplrs=app.noofplrs+1)        
        },
        seenclicked(){           
            app.seenurl=app.seenurl== "openeye.png"?"closedeye.png" :  "openeye.png"    
        },
        winnertoggle()
        {
            app.winnerurl=app.winnerurl== "crown.png"?"nowin.png" :  "crown.png"    
        }
    },
    computed :{
        point()
        {
            return  this.mal+4 
        }
    }

})