<template>
  <div id="card-question">
    <i id="icon-status" class="bi bi-circle-fill"></i>
    <div class="title">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, sapiente
    </div>
    <div class="difficulty">
      Lorem
    </div>
    <div class="acceptance">
      Lorem
    </div>
  </div>
</template>

<script>
export default {
  name: "CardQuestion"
}
</script>

<style scoped>
#card-question {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 30px;
  border-style: solid;
  border-width: 2px;
  border-color: darkgrey;
}

#icon-status {
  color: limegreen;
}
</style>