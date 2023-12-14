export default {
  data() {
    return {
      seenurl: "images/closedeye.png",
      winnerurl: "images/nowin.png",
      plr:{
        mal:10,
        win:false,
        seen:false
      }
    };
  },
  template: ` <div>
  <img @click="winnertoggle" :src=winnerurl></img>
<input type="range" min="0" max="50" value="0" class="slider" v-model.number="plr.mal"></input>
{{plr.mal}} 
<img @click="seenclicked" :src=seenurl></img>
<label>{{point}}</label> 
</div>`,
  name: "Ascore",
  props: ['url'],
  methods: {
    seenclicked() {  
      this.plr.seen = !this.plr.seen
      this.seenurl = this.plr.seen ?  "images/openeye.png":"images/closedeye.png" 
      this.calculate()
    },
    winnertoggle() {        
        this.plr.win = !this.plr.win
        this.winnerurl = this.plr.win ?  "images/crown.png":"images/nowin.png"
        this.calculate()
    },
    calculate(){
       this.$emit('my-event',this.plr);// we need to emit events to share data to outside world
    }
  },
  computed: {
    point() {
      this.calculate()
      return this.plr.mal + 4
    }
  }
}


