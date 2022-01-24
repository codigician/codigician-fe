import {shallowMount} from "@vue/test-utils"
import CardQuestion from "../CardQuestion"

describe("CardQuestion.vue", () => {
    describe("Exists check", () => {
        test("Elements exist", () => {
            const wrapper = shallowMount(CardQuestion)
            expect(wrapper.exists()).toBeTruthy()

            const card = wrapper.find("#card-question")
            expect(card.exists()).toBeTruthy()

            const iconStatus = wrapper.find("#icon-status")
            expect(iconStatus.exists()).toBeTruthy()

            const title = wrapper.find(".title")
            expect(title.exists()).toBeTruthy()

            const difficulty = wrapper.find(".difficulty")
            expect(difficulty.exists()).toBeTruthy()

            const acceptance = wrapper.find(".acceptance")
            expect(acceptance.exists()).toBeTruthy()
        })
    })
})