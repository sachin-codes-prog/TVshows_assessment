import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Header from "@/components/Header.vue";
import { routes } from "@/router/index.js";
import { mockedShowData } from "../mocked-data/mocked-data.js";
import { getSearchResult } from "@/services/api";
jest.mock("@/services/api");

describe("Header.vue", () => {
    let headerWrapper;
    const router = new VueRouter({ routes });
    beforeEach(() => {
        Vue.use(VueRouter);
        headerWrapper = shallowMount(Header, {
            Vue,
            data() {
                return {
                    image_src: "/TVshow.ico",
                    queryShow: "",
                    showResult: []
                };
            },
            router
        });
    });

    afterEach(() => {
        headerWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(headerWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a <router-link> element", () => {
        expect(headerWrapper.contains("router-link-stub")).toBeTruthy();
    });
    it("renders a router-link tag with to Home url", () => {
        expect(headerWrapper.find('[href="/"]')).toBeTruthy();
    });
    it("it should have a text-field", () => {
        expect(headerWrapper.html()).toContain("<div>");
    });
    it("fetch some shows according to search keyword in url params to display", async () => {
        headerWrapper.setData({ queryShow: "bad" });

        const items = [{ show: mockedShowData }];

        getSearchResult.mockResolvedValue(items);

        await headerWrapper.vm.fetchSearchResult();

        expect(headerWrapper.vm.showResult).toBe(items);
    });
    it("It would return error if any error encountered", async () => {
        const error = new Error("Async error");

        getSearchResult.mockRejectedValue(error);

        await headerWrapper.vm.fetchSearchResult();

        expect(headerWrapper.vm.error).toBe(error);
    });
})