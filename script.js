const numbers = [10, 20, 30, 40, 50];

function getElementAtIndex(arr, index) {
    
  if (index < 0 || index >= arr.length) {
    throw new Error(`Invalid-index:${index}`);
  }
  return arr[index];
}


try {
  let result = getElementAtIndex(numbers, 2);
  console.log("Element:", result); // 30
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Access attempt finished");
}

try {
  let result = getElementAtIndex(numbers, 10);
  console.log("Element:", result);
} catch (error) {
  console.log(error.message); 
} finally {
  console.log("Access attempt finished");
}