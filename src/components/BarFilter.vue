<template>
  <div id="bar-filter">
    <h4>Difficulty</h4>
    <ul>
      <li><input type="checkbox">Easy</li>
      <li><input type="checkbox">Medium</li>
      <li><input type="checkbox">Hard</li>
      <li><input type="checkbox">Expert</li>
    </ul>
    <h4>Data Structures</h4>
    <ul>
      <li><input type="checkbox">Array</li>
      <li><input type="checkbox">String</li>
      <li><input type="checkbox">Linked List</li>
      <li><input type="checkbox">Binary Tree</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarFilter"
}
</script>

<style scoped>
#bar-filter {
  width: 200px;
  border: 2px solid darkgrey;
  padding: 10px;
}
</style>