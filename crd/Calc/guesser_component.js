export default {
  data() {
    return {
      plr:{
        name:"hi"
      }
    };
  },
  template: ` <div>
  <span > {{datum.color}} {{datum.value}} {{datum.probability_total}} </span>
  </div>`,
  props :['datum'],
  name: "Acard"
}


