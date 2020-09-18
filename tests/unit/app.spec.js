import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/app.vue";
import Vue from "vue";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

describe("App.vue", () => {
  let appWrapper;
  const router = new VueRouter({
    path: "/",
    name: "Dashboard"
  });

  beforeEach(() => {
    Vue.use(VueRouter);
    appWrapper = shallowMount(App, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("it should load the Header", () => {
    expect(Header).toBeTruthy();
  });
  it("it should load the Footer", () => {
    expect(Footer).toBeTruthy();
  });
  it("it should have a <router-view> element", () => {
    expect(appWrapper.contains("router-view-stub")).toBe(true);
  });
});
