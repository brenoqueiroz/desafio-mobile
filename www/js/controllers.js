angular.module('devmeetup.github', [])

.controller('GithubCtrl', ['$scope','$http','github.service', 'github.foto','$ionicModal', function($scope, $http, githubService, githubFoto, $ionicModal) {

	$scope.model = {username: 'romulobr'}
	$ionicModal.fromTemplateUrl('templates/picture-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};

  $scope.validar = function(){
	githubService.getUser($scope.model.username).then(function (data) {
		$scope.userData = data;
		console.log(data);
		$scope.openModal();
	})}

	$scope.tirarFoto = function() {
		githubFoto.
	}
}])

.controller('FotoCtrl', function($scope) {

});
