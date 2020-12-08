<template>
  <div>
    <h1>Home</h1>
    <p>Welcome {{ user }}</p>
  </div>
</template>

<script>
import db from '../db.js';

export default {
  name: 'Home',
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    db.collection('users')
      .doc('5USMDyABPUdiYRi5nTv4')
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name;
      });
  }
};
</script>
