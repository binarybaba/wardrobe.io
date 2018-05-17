function clothFactory($localStorage) {// eslint-disable-line
    // var clothes = $localStorage.clothes || [];
    var clothes = [];
    var clothF = {};

    clothF.sendToWardrobe = function sendClothToWardrobe(id){
        clothes.forEach(function(cloth, idx){
            if(idx === id) {
                cloth.isInWardrobe = true;
            }
        });
        // $localStorage.clothes = clothes;

    };

    clothF.addCloth = function addCloth(clothUri){
        if(!clothes.filter(function(storedCloth) {
            return storedCloth.uri === clothUri
        }).length) { // because we dont want the same cloth again..
            clothes.push(clothUri);
            // $localStorage.clothes = clothes;
        }

    };

    clothF.getClothes = function getAllClothes(){
        return clothes;
    };
    clothF.toggleLower = function toggleLower(uri) {
        clothes.forEach(function(cloth) {
            if(cloth.uri === uri) {
                cloth.isLower = !cloth.isLower;
            }
        });
    };
    clothF.moveToWardrobe = function moveToWardrobe(uri) {
        clothes.forEach(function(cloth) {
            if(cloth.uri === uri) {
                cloth.isInWardrobe = true;
            }
        });
        return clothes;
    };
    clothF.removeCloth = function removeCloth(uri) {
        clothes = clothes.filter(function(cloth) {
            return cloth.uri !== uri
        });
        return clothes;

    }

    return clothF;
}
clothFactory.$inject=['$localStorage'];
export default clothFactory;