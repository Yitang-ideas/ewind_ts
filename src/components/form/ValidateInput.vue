<template>
  <div>
    <input
      :value="inputRef.val"
      @input="updateValue"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { RuleProp, EmailReg } from "../../utils/types";

export type RulesProp = RuleProp[];

export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      val: "",
      error: false,
      message: ""
    });

    function updateValue(e: KeyboardEvent) {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit("update:modelValue", targetValue);
    }

    function validateInput() {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = EmailReg.test(inputRef.val);
              break;
            case "password":
              passed = inputRef.val.trim().length >= 6;
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    }

    return {
      inputRef,
      validateInput,
      updateValue
    };
  }
});
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin: 20px auto;
  width: 300px;
  height: 30px;
  line-height: 30px;
  border-style: none;
  border-bottom: 0.5px solid rgba(50, 82, 146, 0.8);
  outline: none;
  background: transparent;
  color: #fff;
  &::placeholder {
    color: #8d8d8d;
  }
}
.invalid-feedback {
  color: rgb(240, 109, 22);
}
</style>
