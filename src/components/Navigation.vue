<template>
  <div>
    <nav class="navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><span class="h2 pr-1">Video Chat</span>
          <span class="navbar-text small" v-if="user">
            : Hi <span class="font-weight-bold text-white">{{ user.displayName }}</span></span
          >
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" v-if="!user" to="/login">Login</router-link>
          <router-link class="nav-item nav-link" v-if="!user" to="/register">Register</router-link>
          <button class="nav-item nav-link btn btn-link" v-if="user" @click="$emit('logout')">
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['user']
};
</script>

<style></style>
