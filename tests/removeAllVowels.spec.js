describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels', function(){
		var results = $filter('removeAllVowels')('abstractwords');

		expect(results).toEqual('bstrctwrds');
	});

});
