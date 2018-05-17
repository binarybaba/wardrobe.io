function uploadController($scope, $state, clothFactory) {

    $scope.uploadedImages = clothFactory.getClothes().filter(function(cloth){
        return !cloth.isInWardrobe
    });

    function toggleLower(uri) {
        clothFactory.toggleLower(uri);
    }

    function processImg64(dataUri) {
        clothFactory.addCloth({
            uri:dataUri,
            isLower: false,
            isInWardrobe: false
        });
        $scope.uploadedImages = clothFactory.getClothes().filter(function(cloth){
            return !cloth.isInWardrobe
        });
        $scope.$apply();
    }

    function moveToWardrobe(uri) {
        $scope.uploadedImages = clothFactory.moveToWardrobe(uri).filter(function(cloth) {
            return !cloth.isInWardrobe;
        });
    }

    function checkoutWardrobe(){
        $state.go("W.wardrobe");
    }

    $scope.processImg64 = processImg64;
    $scope.toggleLower = toggleLower;
    $scope.moveToWardrobe = moveToWardrobe;
    $scope.checkoutWardrobe = checkoutWardrobe;
}
uploadController.$inject = ["$scope", "$state", "clothFactory"];

export default uploadController;