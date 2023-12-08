var app = new Vue({
    el: '#app',
    data :{
        noofplrs :2
    },
    methods :{
        noplrs(){
        app.noofplrs=app.noofplrs+1;
        }
    }
})