

let id =1


const app = {
    data() {
        return {
            count: 0,
            color: "red",
            view: true,
            view: false,
            showText: true,
            topic: '',
            name: '',
            word: '',

            title: 'Aylanmalar',

            list: [
                {id: id++, name: 'Html'},
                {id: id++, name: 'Javascript'},
                {id: id++, name: 'CSS'}
            ]
        }
    },

    methods: {
        addCount() {
            this.count++
        },

        minusCount() {
            this.count--
            this.color = 'green'
        }
    }
}

Vue.createApp(app).mount("#app")

// let titleMain =document.querySelector(".title")

// titleMain.textContent = count

// titleMain.innerHTML = text