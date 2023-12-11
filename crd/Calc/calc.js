var app = new Vue({
    el: '#app',
    data :{
        noofplrs :2,
        url: "openeye.png",
        seen:false
    },
    methods :{
        noplrs(){
            app.noofplrs ===6 ?(app.noofplrs=2) :  (app.noofplrs=app.noofplrs+1)        
        },
        seenclicked(){           
            app.url=app.url== "openeye.png"?"closedeye.png" :  "openeye.png"    
        }
    }
})