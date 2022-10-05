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

  describe("steps display", () => {
    let wrapper: VueWrapper;

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
