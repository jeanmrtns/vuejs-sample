const app = Vue.createApp({
  data() {
    return {
      myName: "Jean Martins",
      myAge: 23,
      myPicture: "https://github.com/jeanmrtns.png",
    };
  },
  methods: {
    myAgeIn5Years() {
      return this.myAge + 5;
    },
    getFavoriteNumber() {
      const randomNumber = Math.random();

      return randomNumber;
    },
  },
});

app.mount("#assignment");
