const app = {
  data() {
    return {
      photos: [
        { no:"1", url: "images/cat.jfif", title: "Cat", done: false },
        { no:"2", url: "images/dog.jfif", title: "Dog", done: false },
        { no:"3", url: "images/rabbit.jfif", title: "Rabbit", done: false },
        { no:"4", url: "images/wolf.jfif", title: "Wolf", done: false },
        { no:"5", url: "images/monkey.jfif", title: "Monkey", done: false },
        { no:"6", url: "images/turtle.jfif", title: "Turtle", done: false },

      ],
      searchbutton :false,
      text : "",
      hasView : false,
      viewImg:'',
      
    };
  },
  methods: {
    toggleDone(photo) {
      this.photos[photo.no-1].done = !this.photos[photo.no-1].done;
    },
    searchBarToggle() {
      this.searchbutton = !this.searchbutton
    },
    search() {
      this.searchbutton = !this.searchbutton;
      this.text = '';
    },  
    toggleView(photo){
      this.viewImg = this.photos[photo.no-1].url;
      this.hasView = true;
  },
  distoggleView(){
    this.viewImg = '';
    this.hasView = false;
  },
},
  computed: {
    countUndone() {
      return this.photos.filter((t) => t.done).length;
    },  
    searching() {
      return this.photos.filter((pic) => {
        return pic.title.toLowerCase().includes(this.text.toLowerCase());
      });
    },
  },
};
Vue.createApp(app).mount("#app");
