import { describe, it, expect, beforeAll } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";
import SimulatorWorld from "../SimulatorWorld.vue";
import type { IObjectWrapper } from "@/interfaces";

describe("SimulatorWorld", () => {
  it("should create rows and columns properly", () => {
    const dimension = {
      x: 2,
      y: 5,
    };
    const objects: Array<IObjectWrapper> = [];

    const wrapper = mount(SimulatorWorld, {
      props: { dimension, objects },
    });

    expect(wrapper.findAll("div.row")).toHaveLength(dimension.y);
    expect(wrapper.findAll("div.column")).toHaveLength(
      dimension.x * dimension.y
    );
  });

  describe("object creation", () => {
    let wrapper: VueWrapper;
    let dimension: { x: number; y: number };
    let objectWrapper: IObjectWrapper;
    let objectRef: string;

    beforeAll(() => {
      dimension = {
        x: 2,
        y: 5,
      };
      objectWrapper = {
        object: { id: "id" },
        x: 1,
        y: 2,
      };
      objectRef = `object-${objectWrapper.object.id}`;

      wrapper = mount(SimulatorWorld, {
        props: { dimension, objects: [objectWrapper] },
      });
    });

    it("should create element with object ref properly", () => {
      expect(wrapper.find({ ref: objectRef }).exists()).toBe(true);
    });

    it("should create only 1 element per object", () => {
      expect(wrapper.findAll("div.object")).toHaveLength(1);
    });

    it("should create object at the right place", () => {
      const cellRef = `row-${objectWrapper.y}-column-${objectWrapper.x}`;
      const objectRef = `object-${objectWrapper.object.id}`;

      const cellWrapper = wrapper.find({ ref: cellRef });

      expect(cellWrapper.find({ ref: objectRef }).exists()).toBe(true);
    });
  });
});
