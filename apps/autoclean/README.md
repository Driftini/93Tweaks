# AutoClean
Originally born as a tool to solely get rid of WINDOWS93's regenerating files, AutoClean is now usable to automatically get rid of any file you desire during boot.

**WARNING: Any damage caused by incorrect usage of AutoClean is _your_ responsibility, not mine.**

## Installation
Simply run this script in the Terminal! WINDOWS93 will reboot 7 seconds after running the script. Beware, as this will clean your current cleanlist, if any.

```js
$file.save("/a/.autoclean/clean.json", "[]")
fetch("https://rawcdn.githack.com/Driftini/93Tweaks/f33302294adc360b3bd41fe1a13971638d69fc9c/apps/autoclean/autoclean.js")
.then(res => res.text()) .then(data => {$file.save("/a/boot/autoclean.js", data);$notif("Autoclean 1.0", "Thank you for installing AutoClean 1.0! Run \"autoclean\" in the Terminal after the reboot for more information.");setTimeout(()=>{$exe("reboot")}, 5000)})
```

## Usage

Run `autoclean --help` in the Terminal to view the help screen.

If you're a new user, you might also want to run `autoclean --pull` to quickly obtain recommended presets. Don't forget to load them with `autoclean --load [PRESET NAME]`, of course.

## Uninstallation

Delete `/a/boot/autoclean.js` and `/a/.autoclean/`.
