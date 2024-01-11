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
  <div class="grid-item"><span @click="add()" class="btnplus"> + </span> </div>
  <div class="grid-item"><span @click="subs()" class="btnminus"> - </span></div>
  <div class="grid-item"><span @click="add()" >3</span></div>
  <div class="grid-item"><span @click="subs()" >4</span></div>
  <div class="grid-item"><span @click="add()" >5</span></div>
  <div class="grid-item"><span @click="subs()">6</span></div>
  <div class="grid-item">7</div>
  <div class="grid-item"> <span ref="myParagraph" class="score"> {{datum.probability_total}} </span></div>
</div>
  `,
  props: ['datum'],
  name: "Acard"
}


