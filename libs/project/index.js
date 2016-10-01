(
	function() {
		'use strict';
		
		angular.module('listaTelefonica',['ngMask']).controller('ctrlApp', ctrlApp);

		ctrlApp.$inject = ['$scope'];
		
		function ctrlApp($scope) {
			
			$scope.contatos = JSON.parse(localStorage.getItem('contatos'));//[{nome:'Cloves Jose', email: 'cjsj.tec@gmail.com', telefone: '(11)96046-7095'}];
			console.log();
			
			$scope.listar = true;
				
			$scope.mostrarFormContato = function() {
				$scope.listar = false;
			}

			$scope.gravar = function(contato) {
				if(!$scope.contatos) $scope.contatos = [] ;
				$scope.contatos.push(angular.copy(contato));
				localStorage.setItem('contatos', JSON.stringify($scope.contatos));
				
				delete $scope.contato;
				$scope.listar = true;
			}

			$scope.removerContato = function(contatos) {
				$scope.contatos = contatos.filter(function(contato) {
					if(!contato.selecionado) {
						return contato;
					}
				});
			}
			$scope.cancelar = function() {
				$scope.listar = true;
			}
			
			$scope.editar = function(contato) {
				$scope.listar = false;
				$scope.contatoForm = contato;				
			}
		}
	}
)()