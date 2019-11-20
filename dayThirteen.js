//

const lightsOn = lights => lights.map(({ id }) => ({ id, on: true }));

const lightsOff = lights => lights.map(({ id }) => ({ id, on: false }));

const toggleLights = (lights, lightsAreOn) =>
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);
