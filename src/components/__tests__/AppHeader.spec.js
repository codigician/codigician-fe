import {shallowMount} from "@vue/test-utils";
import AppHeader from "../AppHeader"

describe("AppHeader.vue", () => {
    describe("Exists check", () => {
        test("Component exists", () => {
            const wrapper = shallowMount(AppHeader)
            expect(wrapper.exists()).toBeTruthy()

            const navbar = wrapper.find("nav")
            expect(navbar.exists()).toBeTruthy()

            const navbarLeft = wrapper.find(".nav-left")
            expect(navbarLeft.exists()).toBeTruthy()

            const navbarOptionsElements = wrapper.findAll(".nav-left > ul > li")
            expect(navbarOptionsElements.exists()).toBeTruthy()
            expect(navbarOptionsElements.length).toBe(4)

            const logo = wrapper.find("#app-logo")
            expect(logo.exists()).toBeTruthy()

            const navbarRight = wrapper.find(".nav-right")
            expect(navbarRight.exists()).toBeTruthy()

            const navbarPersonalElements = wrapper.findAll(".nav-right > ul > li")
            expect(navbarPersonalElements.exists()).toBeTruthy()
            expect(navbarPersonalElements.length).toBe(2)
        })
    })
})