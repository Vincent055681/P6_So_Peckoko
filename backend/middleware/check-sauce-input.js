module.exports = (req, res, next) => {
    const sauce = JSON.parse(req.body.sauce)
    let {name, manufacturer, description, mainPepper} = sauce;
    let trimedTab = []
    
    function toTrim(...string) {
         trimedTab = string.map((elt) => elt.trim());
    } 
    
    toTrim(name, manufacturer, description, mainPepper)
    console.log(trimedTab);

    if (trimedTab[0].length >= 3 && trimedTab[1].length >= 3 && trimedTab[2].length >= 3 && trimedTab[3].length >= 3 ) {
        next()
    } else {
        throw new Error("Tous les champs doivent faire au moins 3 caractères")
    }
  };