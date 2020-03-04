new Vue({
    el: '#app',
    data: {
        title: "Becoming a Vue Ninja",
        name: 'Ryu',
        coords: {
            x: 0,
            y: 0
        },
        showName: true,
        showAge: true,
        items: ['Mushrooms', 'Green Shells', 'Red Shells', 'Banana'],
        ninjas: [
            {
                name: 'Crystal',
                age: 25,
                belt: 'Black'
            },
            {
                name: 'Ryu',
                age: 30,
                belt: 'Brown'
            },
            {
                name: 'Ken',
                age: 35,
                belt: 'Orange'
            }
        ]
    },
    methods: {
        logMessage() {
            console.log('Hello World')
        },
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    }
})