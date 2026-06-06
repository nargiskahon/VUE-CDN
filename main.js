

const app = {
    data() {
        return {
            count: 0,
            color: "red",
            view: false
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