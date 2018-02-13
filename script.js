var app = angular.module('myApp', []);
app.controller('myCtrl', function () {
    var vm = this;

    vm.class = [
        {
            header: "header1",
            aside: "aside1",
            main: "main1"
        },
        {
            header: "header2",
            aside: "aside2",
            main: "main2"
        },
        {
            header: "header3",
            aside: "aside3",
            main: "main3"
        },
    ];
    vm.style1 = function(){
       vm.newStyle = vm.class[0]; 
        console.log(vm.newStyle);
    };
   vm.style2 = function(){
       vm.newStyle = vm.class[1]; 
        console.log(vm.newStyle);
    }; 
    vm.style3 = function(){
       vm.newStyle = vm.class[2]; 
        console.log(vm.newStyle);
    }; 
    
});
