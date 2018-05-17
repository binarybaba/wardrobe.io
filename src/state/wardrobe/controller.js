function wardrobeController($scope, clothFactory) {
    $scope.clothesInWardrobe = clothFactory.getClothes().filter(function(cloth) {
        console.log(cloth); // eslint-disable-line
        return cloth.isInWardrobe;
    });

    function removeCloth(uri){
        $scope.clothesInWardrobe = clothFactory.removeCloth(uri).filter(function(cloth) {
            return cloth.isInWardrobe;
        });
    }
    $scope.removeCloth = removeCloth;

}

wardrobeController.$inject = ["$scope", "clothFactory"];

export default wardrobeController;