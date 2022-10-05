export interface ISimulationObject {
  object: SimulatorObject;
  position: IGeometry2D;
}

export interface SimulatorObject {
  id: string;
}

export interface IGeometry2D {
  x: number;
  y: number;
}

export interface ISimulation {
  world: ISimulationWorld;
  steps: Array<ISimulationStep>;
}

export interface ISimulationWorld {
  dimension: IGeometry2D;
  objects: Array<ISimulationObject>;
}

export interface ISimulationStep {
  updatedObjects: Array<ISimulationObject>;
}
