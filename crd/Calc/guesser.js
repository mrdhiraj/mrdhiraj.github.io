import Acard from './guesser_component.js'

class Crd {
    color = "S"
    value = 1

    probability_j = 0
    probability_tip = 0
    probability_alt = 0
    probability_jhip = 0
    probability_pop = 0
    probability_total = 0
    probability_final = 0

    actions = {
        picked: 0,
        discarded: 0,
    }

    constructor(color, value) {
        this.color = color
        this.value = value
    }
    logitem(params) {
        console.log(JSON.stringify(this, null) + params);
    }

    gettotal() {
        this.probability_total = this.probability_j + this.probability_tip + this.probability_alt + this.probability_jhip + this.probability_pop
    }
}

class Deck {
    decks = ['S', 'H', 'C', 'D']
    cards = []
    constructor() {
        for (let i = 1; i <= 13; i++) {
            let card = { 'S': new Crd('S', i), 'H': new Crd('H', i), 'C': new Crd('C', i), 'D': new Crd('D', i) }
            this.cards.push(card)
        }
    }

    picked(value, color) {
        this.cards[value - 1][color].actions.picked += 1;
        this.doaction(value, color, 1)
    }

    discarded(value, color) {
        this.cards[value - 1][color].actions.discarded += 1
        this.doaction(value, color, -1)
    }

    doaction(value, color, increament) {
        //sure alogrithm
        let altcolor = this.getaltcolors(color)
        let downvalue = this.getIncreamental(value, -1)
        let downvalue2 = this.getIncreamental(value, -2)
        let upvalue = this.getIncreamental(value)
        let upvalue2 = this.getIncreamental(value, 2)
        let samevalue = value - 1

        //final , j , jhip ,alt , tip , pop 
        //same value
        let curvalue = samevalue
        if (increament == -1) {
            curvalue = samevalue
            this.cards[curvalue][color].probability_final = -1;

            for (const key in this.cards[curvalue]) {
                this.cards[curvalue][key].probability_j = -1;
            }
            this.cards[curvalue][color].probability_jhip = -1;
            this.cards[curvalue][altcolor].probability_alt = -1;
            this.cards[curvalue][color].probability_tip = -1;
            this.cards[curvalue][color].probability_pop = -1;


            //up value
            curvalue = upvalue

            this.cards[curvalue][color].probability_j = -1;
            this.cards[curvalue][color].probability_jhip = -1;
            this.cards[curvalue][altcolor].probability_alt = -1;

            //down value
            curvalue = downvalue

            this.cards[curvalue][color].probability_j = -1;
            this.cards[curvalue][color].probability_jhip = -1;
            this.cards[curvalue][altcolor].probability_alt = -1;
        } else {
            curvalue = samevalue
            this.cards[curvalue][color].probability_final = this.cards[curvalue][color].probability_final != -1 ? 1 : -1

            for (const key in this.cards[curvalue]) {
                this.cards[curvalue][key].probability_j = this.cards[curvalue][key].probability_j != -1 ? 1 : -1;
            }
            this.cards[curvalue][color].probability_jhip = this.cards[curvalue][color].probability_jhip != -1 ? 1 : -1;
            this.cards[curvalue][altcolor].probability_alt = this.cards[curvalue][altcolor].probability_alt != -1 ? 1 : -1;
            this.cards[curvalue][color].probability_tip = this.cards[curvalue][color].probability_tip != -1 ? 1 : -1;
            this.cards[curvalue][color].probability_pop = this.cards[curvalue][color].probability_pop != -1 ? 1 : -1;


            //up value
            curvalue = upvalue

            this.cards[curvalue][color].probability_j = this.cards[curvalue][color].probability_j != -1 ? 1 : -1;
            this.cards[curvalue][color].probability_jhip = this.cards[curvalue][color].probability_jhip != -1 ? 1 : -1;
            this.cards[curvalue][altcolor].probability_alt = this.cards[curvalue][altcolor].probability_alt != -1 ? 1 : - 1;

            //down value
            curvalue = downvalue

            this.cards[curvalue][color].probability_j = this.cards[curvalue][color].probability_j != -1 ? 1 : -1;
            this.cards[curvalue][color].probability_jhip = this.cards[curvalue][color].probability_jhip != -1 ? 1 : -1;
            this.cards[curvalue][altcolor].probability_alt = this.cards[curvalue][altcolor].probability_alt != -1 ? 1 : -1;
        }

        //totals 
        this.cards[samevalue][color].gettotal()
        this.cards[samevalue][altcolor].gettotal()
        this.cards[upvalue][color].gettotal()
        this.cards[downvalue][color].gettotal()
        for (const key in this.cards[value - 1]) {
            this.cards[samevalue][key].gettotal()
        }
    }

    algo1 = function () {
        //j
        for (const key in this.cards[value - 1]) {
            this.cards[value - 1][key].probability_j += increament;
        }

        for (const key in this.cards[upvalue]) {
            this.cards[upvalue][key].probability_j += increament / 2;
        }

        for (const key in this.cards[downvalue]) {
            this.cards[downvalue][key].probability_j += increament / 2;
        }


        //tip
        this.cards[value - 1][color].probability_tip += increament;

        this.cards[upvalue][color].probability_tip += increament;

        this.cards[downvalue][color].probability_tip += increament;


        //alt        
        this.cards[value - 1][altcolor].probability_alt += increament;

        this.cards[upvalue][altcolor].probability_tip += increament;

        this.cards[downvalue][altcolor].probability_tip += increament;


        //jhip below        
        this.cards[downvalue][color].probability_jhip += increament;

        //pop up
        this.cards[upvalue][color].probability_pop += increament;

        this.cards[value - 1][color].gettotal()
        this.cards[value - 1][altcolor].gettotal()
        this.cards[upvalue][color].gettotal()
        this.cards[downvalue][color].gettotal()
    }

    getparallels = function (value, color) {
        return this.cards[value - 1]
    }

    getaltcolors(color) {
        let altcolor = color == 'S' ? 'C' : color == 'C' ? 'S' : color == 'D' ? 'H' : color == 'H' ? 'D' : ''
        return altcolor
    }

    //-1 
    getIncreamental(value, inc = 1) {
        let v = value + inc
        let upvalue = 0

        upvalue = v > 13 ? v - 13 : v < 1 ? v + 13 : v
        return upvalue
    }

}

var app = new Vue({
    el: '#app',
    components:
    {
        Acard: Acard
    },
    data: {
        debugmessage: "Debug Info will come here",
        deck: new Deck(),
        testresult: "Test result is displayed here",
        debug: false
    },
    methods: {
        addsubs(color, value, action) {
            let s = action == "a" ? this.deck.picked(value, color) : this.deck.discarded(value, color)
            this.$forceUpdate();
        },
        dotest() {
            let d = new Deck();
            let i = 0
            let o = 0
            let t = ''
            let ft = ''

            ft = ft + '1 <br/>'
            i = 1; o = d.getIncreamental(i, 1); t = `input ${i} output ${o}`; ft = ft + '<br/>' + t;

            i = 2; o = d.getIncreamental(i, 1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 3; o = d.getIncreamental(i, 1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 12; o = d.getIncreamental(i, 1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 13; o = d.getIncreamental(i, 1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;
            ft = ft + '-1 <br/>'

            i = 1; o = d.getIncreamental(i, -1); t = `input ${i} output ${o}`; ft = ft + '<br/>' + t;

            i = 2; o = d.getIncreamental(i, -1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 3; o = d.getIncreamental(i, -1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 12; o = d.getIncreamental(i, -1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 13; o = d.getIncreamental(i, -1); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            ft = ft + '2 <br/>'

            i = 1; o = d.getIncreamental(i, 2); t = `input ${i} output ${o}`; ft = ft + '<br/>' + t;

            i = 2; o = d.getIncreamental(i, 2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 3; o = d.getIncreamental(i, 2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 12; o = d.getIncreamental(i, 2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 13; o = d.getIncreamental(i, 2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            ft = ft + '-2 <br/>'

            i = 1; o = d.getIncreamental(i, -2); t = `input ${i} output ${o}`; ft = ft + '<br/>' + t;

            i = 2; o = d.getIncreamental(i, -2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 3; o = d.getIncreamental(i, -2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 12; o = d.getIncreamental(i, -2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            i = 13; o = d.getIncreamental(i, -2); t = `input ${i} output ${o}\n`; ft = ft + '<br/>' + t;

            this.testresult = ft
        }
    },
    computed: {
        showme() {
            let a = window.navigator.userAgent.match(/windows/i)
            return a == null;
        }
    }
});
Vue.config.devtools = true;


