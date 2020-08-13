$log("Pulling presets...")

let path = "/a/.autoclean/presets/"
let presets = ["nodesktop", "noregen"]

function pull(value) {
    $log("Pulling " + value + "...")
    fetch("https://rawcdn.githack.com/Driftini/93Tweaks/ed74a67a701504ab3c85f72ecb239a2aefee5afe/apps/autoclean/presets/" + value + ".json")
        .then(res => res.json()) .then(data => $file.save(path + value + ".json", data))
    $log(value + " pulled.")
}

presets.forEach(pull)