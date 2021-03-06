import _ from "lodash"

export default class Temperatures {
  private celsius = 0;

  units = ["celsius", "fahrenheit", "kelvin"]

  constructor() { }

  setValues(unit: string, val: number) {
    switch (unit) {
      case "celsius":
        this.celsius = val;
        break;
      case "fahrenheit":
        this.celsius = ((val - 32) * 5) / 9;
        break;
      case "kelvin":
        this.celsius = val - 273.15;
        break;
    }
  }

  getValues(unit: string) {
    switch (unit) {
      case "celsius":
        return this.celsius;
      case "fahrenheit":
        return (this.celsius * 9) / 5 + 32;
      case "kelvin":
        return this.celsius + 273.15;
      default:
        return "Error"
    }
  }

  convertValue = (val: number, in_unit: string, out_unit: string) => {
    this.setValues(in_unit, val);
    return this.getValues(out_unit);
  }
}
