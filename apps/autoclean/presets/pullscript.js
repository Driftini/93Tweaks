$log("Pulling presets...")

let path = "/a/.autoclean/presets/"
let presets = ["nodesktop", "noregen"]

function pull(value) {
    $log("Pulling " + value + "...")
    fetch("https://raw.githack.com/Driftini/93Tweaks/master/apps/autoclean/presets/" + value + ".json")
        .then(res => res.json()) .then(data => $file.save(path + value + ".json", data))
    $log(value + " pulled.")
}

presets.forEach(pull)