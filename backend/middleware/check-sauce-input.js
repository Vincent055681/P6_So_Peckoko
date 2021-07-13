module.exports = (req, res, next) => {
    const sauce = JSON.parse(req.body.sauce)
    console.log(sauce);
    let {name, manufacturer, description, mainPepper} = sauce;

    const toTrim = (...string) => {
        string = string.trim()
    }
    toTrim(name, manufacturer, description, mainPepper)
    console.log(name, manufacturer, description, mainPepper)

    if (name.length >= 3 && manufacturer.length >= 3 && description.length >= 3 && mainPepper.length >= 3 ) {
        console.log("ok")
        next()
    } else {
        console.log('non');
        throw new Error("Tous les champs doivent faire au moins 3 caractères")
    }
  };