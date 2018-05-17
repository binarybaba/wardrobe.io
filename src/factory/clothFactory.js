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
    clothF.toggleLower = function toggleLower(idx) {
        clothes.forEach(function(cloth, i) {
            if(i === idx) {
                cloth.isLower = !cloth.isLower;
            }
        });
    };
    clothF.moveToWardrobe = function moveToWardrobe(idx) {
        clothes.forEach(function(cloth, i) {
            if(i === idx) {
                cloth.isInWardrobe = true;
            }
        });
        return clothes;
    }

    return clothF;
}
clothFactory.$inject=['$localStorage'];
export default clothFactory;