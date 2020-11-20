let laptop = {
    manufacturer: "Lenovo",
    model: "G50-80",
    year: 2015,
    processor: "i5-5200U",
    graphic: "AMD Radeon R5 M330",
    ram: "16gb",
    rom: "1tb",
    fullName: function () {
        return this.manufacturer + " " + this.model;
    },
    printSpecs: function () {
        return this.processor + " " + this.graphic + " ram: " + this.ram + " rom: " + this.rom;
    }
}

function print(lap) {
    for ([k, v] of Object.entries(lap)) {
        console.log("property: " + k + ", type: " + typeof(v));
    }
}

print(laptop);
