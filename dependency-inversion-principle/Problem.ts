class Switch {
  isOn = false;
  toggle(): void {
    this.isOn = !this.isOn;
    console.log(this.isOn ? 'Switch is ON' : 'Switch is OFF');
  }
}

// The LightBulb class is directly dependent on the concrete Switch class.
class LightBulb {
  constructor(private lightSwitch: Switch) { }

  operate(): void {
    if (this.lightSwitch.isOn) {
      console.log("Light is ON");
    } else {
      console.log("Light is OFF");
    }
  }
}
