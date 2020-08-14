le._apps["autoclean"] = {
    name: "AutoClean",
    categories: "Utility",
    exec: function() {
        var options = this.arg.options
        var args = this.arg.arguments
        
        function help() {
            $log("<p style='color:gold'>|| AutoClean Help ||</p>")
            $log("Available options:")
            $log("--help | displays this help screen")
            $log("-a [PATH] | adds [PATH] to the clean list")
            $log("-r [PATH] | removes [PATH] from the clean list")
            $log("-c | clears the clean list")
            $log("Preset-related options:")
            $log("--pull | pulls recommended presets from GitHub")
            $log("--save [NAME] | saves clean list in /a/.autoclean/presets/[NAME].json")
            $log("--load [NAME] | loads /a/.autoclean/presets/[NAME].json as preset")
        }
        function update() {
            
        }

        if (options != undefined) {
            if (options.help) {
                help()
            } else if (options.a) {
                
            } else if (options.r) {

            } else if (options.c) {
                $db.set(".autoclean/clean.json", "")
            } else if (options.pull) {
                try {
                    fetch("https://raw.githack.com/Driftini/93Tweaks/master/apps/autoclean/presets/testscript.js")
                        .then(res => res.text()) .then(data => $exe("js " + data))
                } catch (e) {
                    $log.error("Pulling failed.")
                    $log.error(e)
                }
            } else if (options.save) {
                $file.copy("/a/.autoclean/clean.json", "/a/.autoclean/presets/" + n + ".json", false)
            } else if (options.load) {
                $file.copy("/a/.autoclean/presets/" + n + ".json", "/a/.autoclean/clean.json", false)
            }
        } else {
            help()
        }
    }
}