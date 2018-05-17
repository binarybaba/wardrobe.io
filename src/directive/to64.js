/* eslint-disable */

function to64() {
    return {
        scope: {
            onConvertTo64: '='
        },
        link: function postLink(scope,elem,attrs,ngModel) {

            elem.on("change", function(e) {
                const files = elem[0].files;
                const reader = new FileReader();
                reader.addEventListener('load', function(e){
                    scope.onConvertTo64(reader.result);
                }, false);
                Array.prototype.forEach.call(files, function(file){
                    reader.readAsDataURL(file);
                });
            })
        }
    }
}
export default to64;