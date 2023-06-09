let myFavorites = []

module.exports.postFav = function(req, res) {
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}

module.exports.deleteFav = (req,res)=>{
    const {id} = req.params
    myFavorites = myFavorites.filter(e=> e.id !== id)
    return res.status(200).json(myFavorites)
}
