<script setup></script>

<template>
  <div>
    <ul>
      <li>
        <RouterLink to="/css">主文章</RouterLink>
      </li>
      <li>
        <RouterLink to="/css/pagetwo">練習題</RouterLink>
      </li>
      <!-- <li>
        <RouterLink to="/">上課筆記</RouterLink>
      </li> -->
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
ul {
  position: fixed;
  top: 70px;
  z-index: 10;
  display: flex;
  padding: 0 0 0 15px;
  /* background-color: #c4c4c4; */
  background-color: #000;
}

li {
  padding: 0 15px;
}

a {
  font-size: 20px;
  color: #a1b6cb;
}

a.router-link-exact-active {
  color: #36c1cb;
}

section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #000;
  overflow: hidden;
}

.leftNav {
  font-size: 20px;
  position: fixed;
  width: 19vw;
  height: 100%;
  background-color: #040404;
  /* color: #36c1cb; */
  color: #a1b6cb;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNavContainer {
  padding: 25px 5px 0 5px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  position: relative;
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  width: 80vw;
  left: 20vw;
  font-size: 30px;
}

.mainContainer {
  padding: 0 50px;
}

p {
  font-size: 30px;
}

.articleCardTitle {
  font-size: 1.75rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
}
</style>
