let array: Array<string> = ["items", "count"];
console.log("array.includes('Mango') should be false =>", array.includes("Mango"));
console.log("array.includes('items') should be true =>", array.includes("items"));
console.log("array.includes('ITEMS') should be false =>", array.includes("ITEMS"));
console.log(
  "array.includes('items', 1) should be false =>",
  array.includes("items", 1)
);