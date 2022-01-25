<template>
  <div>
    <app-header></app-header>
    <main>
      <div class="container-question">
        <card-question></card-question>
        <card-question></card-question>
        <card-question></card-question>
      </div>
      <bar-filter></bar-filter>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader"
import CardQuestion from "../components/CardQuestion"
import BarFilter from "../components/BarFilter";

export default {
  name: "Question",
  components: {
    AppHeader,
    CardQuestion,
    BarFilter
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
}

.container-question {
  display: flex;
  flex-direction: column;
  width: 900px;
}
</style>