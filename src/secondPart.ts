//  generic type 

type Generic<T> = Array<T>;

const stringArry : Generic<string> = ['one', 'two', 'three'];
const numberArry : Generic<number> = [1, 2, 3];

//  tuple type annotation
const tuple : [string, number, boolean] = ['alice', 30, true]
