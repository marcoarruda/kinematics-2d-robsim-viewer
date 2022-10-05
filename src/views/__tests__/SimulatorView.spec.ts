import SimulationPlayer from "@/components/Simulator/SimulationPlayer.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";
import SimulatorView from "../SimulatorView.vue";

describe("SimulatorView", () => {
  describe("currentStepIndex", () => {
    it("should be increased when SimulationPlayer emits 'next'", async () => {
      const wrapper = shallowMount(SimulatorView);
      const simulationPlayer = wrapper.findComponent(SimulationPlayer);
      const originalStep = simulationPlayer.props().currentStepIndex;

      await simulationPlayer.vm.$emit("next");

      expect(simulationPlayer.props().currentStepIndex).toBe(originalStep + 1);
    });

    it("should be decreased when SimulationPlayer emits 'prev'", async () => {
      const wrapper = shallowMount(SimulatorView);
      const simulationPlayer = wrapper.findComponent(SimulationPlayer);
      const originalStep = simulationPlayer.props().currentStepIndex;

      await simulationPlayer.vm.$emit("prev");

      expect(simulationPlayer.props().currentStepIndex).toBe(originalStep - 1);
    });
  });
});
