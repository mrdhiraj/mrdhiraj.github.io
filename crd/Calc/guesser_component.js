export default {
  data() {
    return {
      plr: 1
    };
  },
  methods: {
    add() {
      this.$emit('my-event', this.datum.color,this.datum.value,"a")    
    },
    subs() {
      this.$emit('my-event', this.datum.color,this.datum.value,"s")
    }
  },
  template: `<div>
  <div class="grid-container">
  <div title="-" class="grid-item"><span @click="subs()" class="btnminus"> - </span></div>
  <div title="+" class="grid-item"><span @click="add()" class="btnplus"> + </span> </div>
  <div title="Tip" class="grid-item"><span @click="subs()" >{{datum.probability_tip}} </span></div>
  <div title="Pop" class="grid-item"><span @click="add()" >{{datum.probability_pop}} </span></div>
  <div title="Jhip" class="grid-item" @click="subs()">{{datum.probability_jhip}} </div>
  <div title="Alt" class="grid-item"><span @click="add()">{{datum.probability_alt}} </span></div>
  <div title="J" class="grid-item"><span @click="add()">{{datum.probability_j}} </span></div>
  <div title="Total" class="grid-item" span @click="add()"> <span ref="myParagraph" class="score"> {{datum.probability_total}} </span></div>
</div>
  `,
  props: ['datum'],
  name: "Acard"
}


