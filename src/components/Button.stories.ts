import Button from "@/components/Button.vue";

export default {
  title: "components/Button",
};

export const Demo = () => ({
  components: { Button },
  template: `<Button text="Click me!"></Button>`,
});
