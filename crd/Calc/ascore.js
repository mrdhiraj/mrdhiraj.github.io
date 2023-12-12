export default {
  data() {
    return {
    jojo:30,
    seenurl: "images/openeye.png"
    };
  },
  template: ` <div>
  <img @click="seenclicked" src="images/crown.png"></img>
<input type="range" min="0" max="50" value="0" class="slider"></input>
{{mal}}  {{seenurl}}
<img :src=seenurl></img>
</div>`,
name:"Ascore",
props:['url','mal'],
methods:{
  seenclicked(){          
    this.seenurl=this.seenurl== "images/openeye.png"?"images/closedeye.png" :  "images/openeye.png"    
},

}
} 


