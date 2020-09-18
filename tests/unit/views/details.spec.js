import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import router from "@/router";
import VueRouter from "vue-router";
import Details from "@/views/Details.vue";
import { mockedShowData } from "../mocked-data/mocked-data.js";
import { getShowDetailsById } from "@/services/api";

jest.mock("@/services/api"); 

describe("Details.vue", () => {
  let detailsWrapper;

  beforeEach(() => {
    Vue.use(VueRouter);
    detailsWrapper = shallowMount(Details, {
      Vue,
      router,
      data() {
        return {
          currentId: this.$route.params.id,
          showDetails: []
        };
      }
    });
  });

  afterEach(() => {
    detailsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(detailsWrapper.isVueInstance).toBeTruthy();
  });

  it("fetch details from show id to display", async () => {
    const items = mockedShowData;

    getShowDetailsById.mockResolvedValue(items); 

    await detailsWrapper.vm.loadShowDetails(); 

    expect(detailsWrapper.vm.showDetails).toBe(items);
  });

  it("It would return error if any error encountered for getShowDetailsById()", async () => {
    const error = new Error("Async error"); 

    getShowDetailsById.mockRejectedValue(error);

    await detailsWrapper.vm.loadShowDetails();

    expect(detailsWrapper.vm.error).toBe(error);
  });
});
 