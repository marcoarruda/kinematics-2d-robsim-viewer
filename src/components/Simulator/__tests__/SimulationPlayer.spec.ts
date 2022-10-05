import { DOMWrapper, mount, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeAll } from "vitest";
import SimulationPlayer from "../SimulationPlayer.vue";

describe("SimulationPlayer", () => {
  describe("play and pause buttons", () => {
    let playButton: DOMWrapper<Node>, pauseButton: DOMWrapper<Node>;

    beforeAll(() => {
      const wrapper = mount(SimulationPlayer, {
        props: { currentStepIndex: 0, totalSteps: 10 },
      });

      playButton = wrapper.find({ ref: "play" });
      pauseButton = wrapper.find({ ref: "pause" });
    });

    it("should start paused - play is enabled", () => {
      expect(playButton.attributes().disabled).toBeUndefined();
      expect(pauseButton.attributes().disabled).toBe("");
    });

    it("should change state if simulation is paused - play is disabled", async () => {
      await playButton.trigger("click");

      expect(playButton.attributes().disabled).toBe("");
      expect(pauseButton.attributes().disabled).toBeUndefined();
    });

    it("should change state if simulation is paused - play is enabled", async () => {
      await pauseButton.trigger("click");

      expect(playButton.attributes().disabled).toBeUndefined();
      expect(pauseButton.attributes().disabled).toBe("");
    });
  });

  describe("prev and next buttons", () => {
    describe("prev button", () => {
      it("should be disabled if current step is 0", () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 0, totalSteps: 10 },
        });
        const prevButton = wrapper.find({ ref: "prev" });

        expect(prevButton.attributes().disabled).toBe("");
      });
      it("should be enabled if current step is higher than 0", () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 1, totalSteps: 10 },
        });
        const prevButton = wrapper.find({ ref: "prev" });

        expect(prevButton.attributes().disabled).toBeUndefined();
      });
      it("should emit 'prev' when pressed", async () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 1, totalSteps: 10 },
        });
        const prevButton = wrapper.find({ ref: "prev" });

        await prevButton.trigger("click");

        expect(wrapper.emitted("prev")).toHaveLength(1);
      });
    });

    describe("next button", () => {
      it("should be disabled if current step is equal or higher than max", () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 10, totalSteps: 10 },
        });
        const nextButton = wrapper.find({ ref: "next" });

        expect(nextButton.attributes().disabled).toBe("");
      });
      it("should be enabled if current step is lower than max", () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 1, totalSteps: 10 },
        });
        const nextButton = wrapper.find({ ref: "next" });

        expect(nextButton.attributes().disabled).toBeUndefined();
      });
      it("should emit 'next' when pressed", async () => {
        const wrapper = mount(SimulationPlayer, {
          props: { currentStepIndex: 1, totalSteps: 10 },
        });
        const nextButton = wrapper.find({ ref: "next" });

        await nextButton.trigger("click");

        expect(wrapper.emitted("next")).toHaveLength(1);
      });
    });
  });

  describe("steps display", () => {
    let wrapper: VueWrapper<any>;
    const currentStepIndex = 2,
      totalSteps = 10;

    beforeAll(() => {
      wrapper = mount(SimulationPlayer, {
        props: { currentStepIndex, totalSteps },
      });
    });

    it("should show current and maximum number of steps", () => {
      const stepsDisplay = wrapper.find("div.steps");

      expect(stepsDisplay.exists()).toBe(true);
      expect(stepsDisplay.html()).toContain(currentStepIndex);
      expect(stepsDisplay.html()).toContain(totalSteps);
    });
  });
});
