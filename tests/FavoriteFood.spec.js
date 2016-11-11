describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter favoritefood correctly', function(){
		 var fakeList = [{
			 name: 'Bob',
			 favoriteFood: 'Mint'
		 },{
			 name: 'Cath',
			 favoriteFood: 'Chocolate'
		 },{
			 name: 'Tom',
			 favoriteFood: 'Hot pot'
		 }];

		 var results = $filter('favoriteFood')(fakeList, 'Mint');

		 expect(results.length).toBe(1);
		 expect(results[0].name).toBe('Bob');
	});
});
