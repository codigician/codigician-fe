<template>
  <div id="editor">
    <form action="" id="editor-form">
      <textarea v-model="code" @keydown="onType" name="textarea-editor" form="editor-form"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data () {
    return {
      code: "",
      shiftPressed: false
    }
  },
  methods: {
    onType (event) {
      if (event.keyCode === 9) {
        this.shiftPressed ? this.handleUnindentation() : this.handleIndentation()
      }
      this.checkShift(event)
    },
    checkShift (event) {
      event.keyCode === 16 ? this.shiftPressed = true : this.shiftPressed = false
    },
    handleIndentation (event) {
      event.preventDefault()
      const code = this.code
      const initialSelectionStart = event.target.selectionStart
      const codeStart = code.slice(0, initialSelectionStart)
      const codeEnd = code.slice(initialSelectionStart)

      this.code = codeStart + "    " + codeEnd
      event.target.value = this.code
      event.target.selectionEnd = event.target.selectionStart = initialSelectionStart + 4
    },
    handleUnindentation(event) {
      const code = this.code
      const initialSelectionStart = event.target.selectionStart
      const codeStart = code.slice(0, initialSelectionStart)
      const codeEnd = code.slice(initialSelectionStart)

      this.code = codeStart + "    " + codeEnd
      event.target.value = this.code
      event.target.selectionEnd = event.target.selectionStart = initialSelectionStart + 4
    }
  }
}
</script>

<style scoped>
#editor {
  width: 50%;
}

#editor-form {
  height: 100%;
}

[name="textarea-editor"] {
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 10px;
}
</style>