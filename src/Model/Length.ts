export default class Lengths {
  private meters = 0;

  constructor() {}

  setValue(unit: string, val: number) {
    switch (unit.toLowerCase()) {
      case "meters":
        this.meters = val;
        break;
      case "centimeters":
        this.meters = val / 100;
        break;
      case "kilometers":
        this.meters = val * 1000;
        break;
      case "miles":
        this.meters = val * 1609.344;
        break;
      case "inches":
        this.meters = val * 0.0254;
        break;
      case "yards":
        this.meters = val * 0.9144;
        break;
    }
  }

  getValue(unit: string) {
    switch (unit.toLowerCase()) {
      case "meters":
        return this.meters;
      case "centimeters":
        return this.meters * 100;
      case "kilometers":
        return this.meters / 1000;
      case "miles":
        return this.meters / 1609.344;
      case "inches":
        return this.meters / 0.0254;
      case "yards":
        return this.meters / 0.9144;
    }
  }
}