var cleanlist = []

le._apps["autoclean"] = {
    name: "AutoClean",
    categories: "Utility",
    exec: function() {
        var options = this.arg.options
        var args = this.arg.arguments.toString().replace(",", " ")
        
        function help() {
            $log("<p style='color:gold'>|| AutoClean Help ||</p>")
            $log("Available options:")
            $log("--help | displays this help screen")
            $log("-a [PATH] | adds [PATH] to the clean list")
            $log("-r [PATH] | removes [PATH] from the clean list")
            $log("-c | clears the clean list")
            $log("-v | shows current clean list")
            $log("Preset-related options:")
            $log("--pull | pulls recommended presets from GitHub")
            $log("--save [NAME] | saves clean list in /a/.autoclean/presets/[NAME].json")
            $log("--load [NAME] | loads /a/.autoclean/presets/[NAME].json as preset")
        }
        function read() {
            $file.open("/a/.autoclean/clean.json", "String", file => cleanlist = file)
        }
        function write() {
            $db.set(".autoclean/clean.json", cleanlist)
        }
        function error() {
            $log.error("Invalid syntax.")
        }

        if (options != undefined) {
            $log(args)
            read()
            if (options.help) {
                help()
            } else if (options.a) {
                if (args != undefined) {
                    cleanlist.push(args)
                    write()
                }
                else error()
            } else if (options.r) {
                if (args != undefined) {
                    cleanlist = cleanlist.toString().replace(cleanlist.indexOf(args + ","), ",").split(",")
                    cleanlist = cleanlist.toString().replace(cleanlist.indexOf(args), ",").split(",")
                    write()
                }
                else error()
            } else if (options.c) {
                cleanlist = []
                write()
            } else if (options.v) {
                read()
                $log(cleanlist)
            } else if (options.pull) {
                try {
                    fetch("https://raw.githack.com/Driftini/93Tweaks/master/apps/autoclean/presets/pullscript.js")
                        .then(res => res.text()) .then(data => $exe("js " + data))
                } catch (e) {
                    $log.error("Pulling failed.")
                    $log.error(e)
                }
            } else if (options.save) {
                if (args != undefined) {
                    $file.copy("/a/.autoclean/clean.json", "/a/.autoclean/presets/" + args + ".json", file => {
                        $file.rename(file, args[0] + ".json")
                    })
                } else error()
            } else if (options.load) {
                if (args != undefined) {
                    $file.copy("/a/.autoclean/presets/" + args + ".json", "/a/.autoclean/clean.json", file => {
                        $file.rename(file, "clean.json")
                    })
                } else error()
            }
        } else {
            help()
        }
    }
}