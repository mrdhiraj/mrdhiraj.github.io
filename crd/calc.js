var app = new Vue({
    el: '#app',
    data :{
        plrs :2,
        swaya1 :false,
        swaya2 :false,
        swaya3 :false,
        swaya4 :false,
        swaya5 :false,
        swaya6 :false,
        mal1:0,
        mal2:0,
        mal3:0,
        mal4:0,
        mal5:0,
        mal6:0,
        jit1 :false,
        jit2 :false,
        jit3 :false,
        jit4 :false,
        jit5 :false,
        jit6 :false,
        final1:0,
        final2:0,
        final3:0,
        final4:0,
        final5:0,
        final6:0,
        totalm :0
    },
    methods :{
        myth(a)
        {            
            app.totalm=eval(app.mal1)+eval(app.mal2)+eval(app.mal3)+eval(app.mal4)+eval(app.mal5)+eval(app.mal6)

        }
    }
    
})