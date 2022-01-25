<template>
  <nav>
    <div class="nav-left">
      <div><span><strong>CODIGICIAN</strong></span><i id="app-logo" class="bi bi-app-indicator"></i></div>
      <ul>
        <li>Lorem.</li>
        <li>Et.</li>
        <li>Veritatis!</li>
        <li>Est!</li>
      </ul>
    </div>
    <div class="nav-right">
      <ul>
        <li><i id="icon-notif" class="bi bi-bell-fill"></i></li>
        <li><i id="icon-profile" class="bi bi-person-fill"></i></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
nav {
  font-size: 18px;
  height: 70px;
  min-width: fit-content;
  background-color: darkslategrey;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#app-logo {
  color: white;
}

ul > li {
  display: inline;
  margin-right: 30px;
}

.nav-left {
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-left: 10%;
  min-width: fit-content;
}

.nav-right {
  width: 10%;
  margin-right: 8%;
  min-width: fit-content;
}

#icon-notif {
  color: white;
  cursor: pointer;
}

#icon-profile {
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>