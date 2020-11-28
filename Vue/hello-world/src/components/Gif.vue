<template>
  <section id="app">
    <h4>Github Name: {{ data.login }}</h4>
    <h4>Location: {{ data.location }}</h4>
    <img :src="data.avatar_url" class="git-pic" />
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "Cody",
  props: {
    msg: String
  },
  data() {
    return {
      apiUrl: "https://api.github.com/users/codemannnnnn",
      data: null
    };
  },

  methods: {
    fetchData: function() {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => (this.data = data));
    }
  },
  created: function() {
    this.fetchData();
  }
};
</script>
<style>
.git-pic {
  border-radius: 300px;
}
</style>
