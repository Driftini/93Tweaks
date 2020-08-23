$log("Pulling presets...")

let path = "/a/.autoclean/presets/"
let presets = ["nodesktop", "noregen", "essentials"]
let done = 0

function pull(value) {
    $log("Pulling " + value + "...")
    fetch("https://rawcdn.githack.com/Driftini/93Tweaks/f33302294adc360b3bd41fe1a13971638d69fc9c/apps/autoclean/presets/" + value + ".json")
        .then(res => res.json()) .then(data => {$file.save(path + value + ".json", data)})
    done++
    $log(value + " pulled. (" + done + "/" + presets.length + ")")
}

presets.forEach(pull)