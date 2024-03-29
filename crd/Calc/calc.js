import AScore from './ascore.js'

var app = new Vue({
    el: '#app',
    components:
    {
        Ascore: AScore
    },
    data: {
        plrsadd:true,
        debugmessage:"Debug Info will come here",
        collect:[{
            name:"p1"
        },{
            name :"p2"
        }],
        totalMal:0,
        winner:"Select winner",
        winnerIndex:-1,
        totalwinpoint:0,
        rate:1,
        self:{
            totalmal:0,
            selfmal:0
        }
    },
    updated(){
        //app.docalculation()
    },
    methods: {
        toggle_plrs() {                        
            if (app.plrsadd){
                app.collect.push ({
                    name:"p"+(app.collect.length+1)
                })
            }
            else{
                app.collect.pop()
            }

            if (app.collect.length==2)
            {
                app.plrsadd=true
            }
            if (app.collect.length==6)
            {
                app.plrsadd=false
            }
        },
        event_clear(param)
        {
            app.totalwinpoint=0
            app.totalMal=0                  
        },
        winnerchangecalled(param)
        {
            app.totalwinpoint=0
            //find individual
            for (let s in app.collect){
                this.$refs.onescore[s].plr.win=false
                this.$refs.onescore[s].winnerurl= "images/nowin.png"
                if (this.$refs.onescore[s].plr.name==param.name)
                {
                    this.$refs.onescore[s].plr.win=true
                    this.$refs.onescore[s].makeseen()
                    this.$refs.onescore[s].winnerurl= "images/crown.png"
                }               
            }
            app.docalculation()
        },
        docalculation()
        {
            //alert(1)
            app.totalMal=0
            app.totalwinpoint=0

            //group out metric find totals
            for (let s in app.collect){                    
                    app.totalMal += this.$refs.onescore[s].plr.seen? this.$refs.onescore[s].plr.mal:0
                    if (!this.$refs.onescore[s].plr.win ){
                        if(!this.$refs.onescore[s].plr.duply){
                            app.totalwinpoint+= this.$refs.onescore[s].plr.seen?3:10                 
                        }
                    }
            }

            let noplrs = app.collect.length
            // individual out mertic
            for (let s in app.collect){     
                let win = this.$refs.onescore[s].plr.win 
                let seen = this.$refs.onescore[s].plr.seen
                let mal = this.$refs.onescore[s].plr.seen? this.$refs.onescore[s].plr.mal:0
                let winpoint =0
                
                    if (win){ 
                        winpoint=app.totalwinpoint                                        
                        app.winner = this.$refs.onescore[s].plr.name
                        app.winnerIndex = s
                    }else{
                        if(!this.$refs.onescore[s].plr.duply){
                        winpoint= seen?-3:-10
                        }
                    }
                    this.$refs.onescore[s].plr.winpoint=winpoint
                    this.$refs.onescore[s].plr.points=mal*noplrs- app.totalMal + winpoint
                    this.$refs.onescore[s].plr.money=this.$refs.onescore[s].plr.points*app.rate
            }
            if(app.winnerIndex==-1)
            {
                alert("Please select W")
            }
        }
    },
    computed: {
       selfscore()
       {     
            return this.collect.length * this.self.selfmal - this.self.totalmal
       },
       selfscorers()
       {     
            return (this.collect.length * this.self.selfmal - this.self.totalmal)*this.rate
       }
    }
});
Vue.config.devtools = true;

 
