export default {
  data() {
    return {
      seenurl: "images/closedeye.png",
      winnerurl: "images/nowin.png",
      plr:{
        name:"",
        mal:0,
        points:0,
        win:false,
        seen:false,
        winpoint:0
      }
    };
  },
  template: ` <div>
  {{plr.name}}
  <img @click="winnertoggle" :src=winnerurl></img>
<input type="range" min="0" max="50" value="0" class="slider" v-model.number="plr.mal"></input>
{{plr.mal}} 
<img @click="seenclicked" :src=seenurl></img>
<label>{{plr.points}} {{point}} {{plr.winpoint}}</label> 
</div>`,
  name: "Ascore",
  props: ['url'],// to get data from the main page
  methods: {
    seenclicked() {  
      this.plr.seen = !this.plr.seen
      this.seenurl = this.plr.seen ?  "images/openeye.png":"images/closedeye.png" 
      this.clear_data()
    },
    makeseen() {  
      this.plr.seen = true
      this.seenurl = this.plr.seen ?  "images/openeye.png":"images/closedeye.png" 
      this.clear_data()
    },
    winnertoggle() {      
     
        //this.plr.win = !this.plr.win this is to be controlled from parent so removing here 
        //this.winnerurl = this.plr.win ?  "images/crown.png":"images/nowin.png"
        this.clear_data()
        this.$emit('winner-changed',this.plr)
    },
    clear_data(){
       this.$emit('my-event',this.plr);// we need to emit events to share data to outside world
    }
  },
  computed: {
    point() {
      //this.clear_data()
      this.plr.name= this.url.name
      //return this.plr.mal + 4
      
    }
  }
}


