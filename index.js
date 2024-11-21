const pic = document.getElementById("pic");

        let brightness = 100;
        let saturation = 100;
        let contrast = 100;
        let hue = 0;

        function reset() {
            brightness = 100;
            saturation = 100;
            contrast = 100;
            hue = 0;
            document.getElementById("bri").value = brightness;
            document.getElementById("sat").value = saturation;
            document.getElementById("cont").value = contrast;
            document.getElementById("hue").value = hue;

            pic.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;
            // pic.style.filter = `brightness(100%) saturate(100%) contrast(100%) hue-rotate(0deg)`;
        }
        const updateFilters = () => {
            pic.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;
        }

        const updateBrightness = () => {
            brightness = document.getElementById("bri").value;
            updateFilters();
            document.getElementById("br").innerHTML = brightness;
        }

        const updateSaturation = () => {
            saturation = document.getElementById("sat").value;
            updateFilters();
            document.getElementById("st").innerHTML = saturation;
        }

        const updateContrast = () => {
            contrast = document.getElementById("cont").value;
            updateFilters();
            document.getElementById("ct").innerHTML = contrast;
        }

        const updateHue = () => {
            hue = document.getElementById("hue").value;
            updateFilters();
            document.getElementById("hueValue").innerHTML = hue;
        }