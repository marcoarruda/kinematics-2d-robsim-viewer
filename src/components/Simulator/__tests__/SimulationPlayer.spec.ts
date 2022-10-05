import { DOMWrapper, mount } from "@vue/test-utils";
import { describe, it, expect, beforeAll } from "vitest";
import SimulationPlayer from "../SimulationPlayer.vue";

describe("SimulationPlayer", () => {
  let playButton: DOMWrapper<Node>, pauseButton: DOMWrapper<Node>;

  beforeAll(() => {
    const wrapper = mount(SimulationPlayer, {
      props: { steps: [] },
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
