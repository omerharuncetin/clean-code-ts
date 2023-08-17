// Define an interface for the switch.
interface ISwitch {
  isOn: boolean;
  toggle(): void;
}

class BetterSwitch implements ISwitch {
  isOn = false;

  toggle(): void {
    this.isOn = !this.isOn;
    console.log(this.isOn ? 'Switch is ON' : 'Switch is OFF');
  }
}

// Introducing the DimmerSwitch class that implements the ISwitch interface.
class DimmerSwitch implements ISwitch {
  isOn = false;
  brightness = 0; // Brightness level from 0 (off) to 100 (fully on)

  toggle(): void {
    if (this.isOn) {
      this.isOn = false;
      this.brightness = 0;
      console.log('DimmerSwitch is OFF');
    } else {
      this.isOn = true;
      this.brightness = 50; // Default to 50% brightness when turned on
      console.log('DimmerSwitch is ON at 50% brightness');
    }
  }

  adjustBrightness(level: number): void {
    if (level < 0) level = 0;
    if (level > 100) level = 100;
    this.brightness = level;
    console.log(`DimmerSwitch brightness adjusted to ${this.brightness}%`);
  }
}

// The LightBulb class depends on the ISwitch abstraction.
class BetterLightBulb {
  constructor(private lightSwitch: ISwitch) { }

  operate(): void {
    if (this.lightSwitch.isOn) {
      console.log("Light is ON");
    } else {
      console.log("Light is OFF");
    }
  }
}


function example() {
  // Create instances of Switch and DimmerSwitch
  const regularSwitch = new Switch();
  const dimmer = new DimmerSwitch();

  // Link switches with a light bulb
  const bulbWithRegularSwitch = new LightBulb(regularSwitch);
  const bulbWithDimmer = new LightBulb(dimmer);

  console.log("Testing Regular Switch:");
  regularSwitch.toggle();  // Should turn the switch ON
  bulbWithRegularSwitch.operate();  // Light should be ON

  regularSwitch.toggle();  // Should turn the switch OFF
  bulbWithRegularSwitch.operate();  // Light should be OFF

  console.log("\nTesting Dimmer Switch:");
  dimmer.toggle();  // Should turn the dimmer ON at 50% brightness
  bulbWithDimmer.operate();  // Light should be ON

  dimmer.adjustBrightness(75);  // Adjust brightness to 75%
  dimmer.toggle();  // Should turn the dimmer OFF
  bulbWithDimmer.operate();  // Light should be OFF

  dimmer.toggle();  // Should turn the dimmer ON at 50% brightness (default)
  bulbWithDimmer.operate();  // Light should be ON
}
