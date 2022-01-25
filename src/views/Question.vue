<template>
  <div id="question">
    <app-header></app-header>
    <main>
      <prompt-question></prompt-question>
      <editor></editor>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader"
import Editor from "../components/Editor"
import PromptQuestion from "../components/PromptQuestion"

export default {
  name: "Question",
  components: {
    AppHeader,
    Editor,
    PromptQuestion
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}

main {
  display: flex;
  justify-content: space-between;
  height: 690px;
}
</style>