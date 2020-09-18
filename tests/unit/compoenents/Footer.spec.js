import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer";

describe("Footer.vue", () => {
    it("renders footer text", () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.text()).toMatch("Informations brought to you from TVmaze");
    });
})       