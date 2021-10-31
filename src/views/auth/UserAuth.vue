<template>
  <div class="login">
    <the-toast v-if="message.show" :class="toastCssType">
      <span>{{ message.text }}</span>
    </the-toast>
    <div class="login__brand">
      <img src="../../assets/logo-1.png" alt="" />
    </div>
    <validate-form @form-submit="onSubmitForm">
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        type="text"
        placeholder="请输入邮箱地址"
        ref="inputRef"
      ></validate-input>
      <validate-input
        :rules="passwordRules"
        v-model="passwordVal"
        type="password"
        ref="inputRef"
        placeholder="请输入密码"
      ></validate-input>
    </validate-form>
  </div>
  <spinner v-if="isLoading"></spinner>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ValidateForm from "../../components/form/ValidateForm.vue";
import ValidateInput, {
  RulesProp
} from "../../components/form/ValidateInput.vue";
import TheToast from "@/components/ui/TheToast.vue";
import Spinner from "@/components/ui/Spinner.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput,
    TheToast,
    Spinner
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputRef = ref<any>("");

    const emailVal = ref("");
    const passwordVal = ref("");
    const isLoading = ref(false);
    const message = ref({ type: "", show: false, text: "" });
    const toastType = ref("");

    const store = useStore();
    const router = useRouter();

    const emailRules: RulesProp = [
      { type: "required", message: "邮箱地址不能为空" },
      { type: "email", message: "邮箱地址不正确" }
    ];

    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
      { type: "password", message: "密码不得少于6位数" }
    ];

    async function onSubmitForm() {
      isLoading.value = true;
      const globalMessage = store.getters["messages/getMessage"];
      if (inputRef.value.validateInput()) {
        try {
          await store.dispatch("auth/login", {
            email: emailVal.value,
            password: passwordVal.value
          });
          router.replace("/");
        } catch (err) {}
        message.value = { ...globalMessage };
        toastType.value = message.value.type;
        isLoading.value = false;
        setTimeout(() => {
          message.value.type = "";
          message.value.show = false;
          message.value.text = "";
        }, 2000);
        // router.push("/");
      }
    }

    const toastCssType = computed(() => {
      return toastType.value === "success" ? "toast__success" : "toast__error";
    });

    return {
      inputRef,
      emailVal,
      passwordVal,
      emailRules,
      passwordRules,
      onSubmitForm,
      isLoading,
      message,
      toastCssType
    };
  }
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
      to left bottom,
      rgba(2, 42, 121, 0.8),
      rgba(1, 30, 88, 0.8)
    ),
    url("../../assets/login-background.jpg") no-repeat 50%;
  background-size: 100%;
}
.login__brand {
  position: fixed;
  top: 50%;
  margin-top: -75px;
  margin-left: 100px;
  @media (max-width: 750px) {
    display: none;
  }
}
</style>
