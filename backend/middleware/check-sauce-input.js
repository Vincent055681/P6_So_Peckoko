module.exports = (req, res, next) => {
    const sauce = JSON.parse(req.body.sauce)
    let {name, manufacturer, description, mainPepper} = sauce;

    const toTrim = (...string) => {
        string = string.trim()
    }
    toTrim(name, manufacturer, description, mainPepper)

    if (name.length >= 3 && manufacturer.length >= 3 && description.length >= 3 && mainPepper.length >= 3 ) {
        next()
    } else {
        throw new Error("Tous les champs doivent faire au moins 3 caractères")
    }
  };