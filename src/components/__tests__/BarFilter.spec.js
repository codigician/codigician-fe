import {shallowMount} from "@vue/test-utils"
import BarFilter from "../BarFilter"

describe("BarFilter.vue", () => {
    describe("Exists check", () => {
        test("Elements exist", () => {
            const wrapper = shallowMount(BarFilter)
            expect(wrapper.exists()).toBeTruthy()

            const filterTitles = wrapper.findAll("h4")
            expect(filterTitles.at(0).text()).toBe("Difficulty")
            expect(filterTitles.at(1).text()).toBe("Data Structures")
        })
    })
})