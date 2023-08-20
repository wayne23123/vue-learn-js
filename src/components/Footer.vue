<script setup>
import { ref } from "vue";

// const time = ref("");
// setTimeout(function () {
//   time.value = new Date().toLocaleString();
// }, 1000);

// const time = ref("");
// setInterval(function () {
//   time.value = new Date().toLocaleString();
// }, 1000);

const time = ref("");
setInterval(function () {
  // time.value = new Date(year);new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
  let date = new Date();
  time.value =
    `${date.getMonth() + 1} / ` +
    `${date.getDate()} _ ` +
    `${date.getHours()} : ` +
    `${date.getMinutes()}`;
}, 60000);

const getTime = () => {
  // time.value = new Date(year);new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
  let date = new Date();
  time.value =
    `${date.getMonth() + 1} / ` +
    `${date.getDate()} _  ` +
    `${date.getHours()} : ` +
    `${date.getMinutes()}`;
};
getTime();
</script>

<template>
  <div class="showTimeDiv">{{ time }}</div>
  <footer>Copyright © 2023 Wayne Lu</footer>
</template>

<style scoped>
.showTimeDiv {
  position: fixed;
  left: 0;
  bottom: 20px;
  background-color: #00000050;
  color: #565656;
  font-size: 20px;
}

footer {
  background-color: #000;
  color: gray;
  padding: 50px;
  display: flex;
  justify-content: center;
}
</style>
