import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index.js";
import Dashboard from "@/views/Dashboard.vue";
import { mockedShowData } from "../mocked-data/mocked-data.js";
import { getAllShows } from "@/services/api";

jest.mock("@/services/api");

describe("Dashboard.vue", () => {
  let dashboardWrapper;
 
  beforeEach(() => { 
    const router = new VueRouter({ routes });
    Vue.use(VueRouter);
    dashboardWrapper = shallowMount(Dashboard, {
      Vue,
      router,
      data() {
        return {
          allShows: [],
          genre: [],
          currentGenre: "Select a genre..."
        };
      } 
    });
  });

  afterEach(() => {
    dashboardWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(dashboardWrapper.isVueInstance).toBeTruthy();
  });
  it("fetch some shows to display", async () => {
    const items = [mockedShowData];

    getAllShows.mockResolvedValue(items); 

    await dashboardWrapper.vm.loadAllShows(); 

    expect(dashboardWrapper.vm.allShows).toBe(items);
  }); 
  it("It would return error if any error occured", async () => {
    const error = new Error("Async error");
    getAllShows.mockRejectedValue(error);

    await dashboardWrapper.vm.loadAllShows();

    expect(dashboardWrapper.vm.error).toBe(error);
  });

  it("fetch some shows to display", async () => {
    mockedShowData.genres = "";
    const items = [mockedShowData];

    getAllShows.mockResolvedValue(items); 

    await dashboardWrapper.vm.loadAllShows(); 

    expect(dashboardWrapper.vm.allShows).toBe(items);
  });
  it("fetch some shows to display", async () => {
    dashboardWrapper.setData({ genre: ["Drama"] });
    const items = [mockedShowData];

    getAllShows.mockResolvedValue(items); 

    await dashboardWrapper.vm.loadAllShows(); 

    expect(dashboardWrapper.vm.allShows).toBe(items);
  });
});
