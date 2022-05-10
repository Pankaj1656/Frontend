### Arrays Methods-->

- Arrays to string --> toString(); . It converts array to a string of (separated by commas) array values.

- Join() --> It is similar to toString(),but in addition you can specify the separator;

- pop() --> Method removes the last element of the array.

- push() --> Method adds the new element to the end of the array.

- shift() --> Method removes the first element of the array and shifts the other remaining elements to the left.

- unshift() --> Method adds the element to the start of the array and shift older elements to the right.

- delete() --> Deletes the given element in the array but leaves undefined holes in the array.

- concat() --> Method creates a new array by "Concatenating" given arrays. It can also take string as an argument.

## EXAMPLE.1 ---> const fruits = ["Banana", "Orange", "Apple", "Mango"];

## fruits.splice(2, 0, "Lemon", "Kiwi");

- splice() -->Method can be used to add new items to an array. splice() method also returns an array with the deleted items.

  ## In above example -- (2) defines the position where new elements should be added. (0) defines how many elements should be removed. The rest parameters define the new elements to be added.

- slice() --> Method slices out a peice of an array into new array. Creates a new array .

## EXAMPLE.2 --> const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

# const citrus = fruits.slice(1);
