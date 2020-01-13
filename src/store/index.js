import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./users.js";
import bookingsModule from "./bookings.js";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  modules: {
    users: usersModule,
    bookings: bookingsModule
  }
});
