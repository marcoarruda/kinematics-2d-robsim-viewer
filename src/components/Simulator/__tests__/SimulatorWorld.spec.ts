import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SimulatorWorld from "../SimulatorWorld.vue";

describe("SimulatorWorld", () => {
  it("renders properly", () => {
    const dimension = {
      x: 2,
      y: 5,
    };

    const wrapper = mount(SimulatorWorld, {
      props: { dimension },
    });

    expect(wrapper.findAll("div.row")).toHaveLength(dimension.x);
    expect(wrapper.findAll("div.column")).toHaveLength(
      dimension.x * dimension.y
    );
  });
});
