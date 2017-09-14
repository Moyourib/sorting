describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  //handles one value, multiples, the correct return values
  it ('handle an array of one value', function(){
  	expect (bubbleSort([1])).toEqual( [1] );
  });

  it ('handle an array of multiple values', function(){
  	expect (bubbleSort([1,2,3])).toEqual( [1,2,3] );
  });

  it ('returns the correct order of values', function(){
  	expect (bubbleSort([3,2,1])).toEqual( [1,2,3] );
  });

  it('can handle a long array of many values', function(){
    expect( bubbleSort([9,8,7,6,4,5,2,3,1,61,24,0]) ).toEqual( [0,1,2,3,4,5,6,7,8,9,24,61] );
  });
 
  it('throw exception when all values in array are not integers', function(){
    expect( bubbleSort([1,2,"fancyDan","78"])).toThrowError("all values must be integers");
  });
});

/* Tests we are trying to pass*/
