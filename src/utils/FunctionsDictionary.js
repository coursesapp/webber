// types -------------------
export const functionCategories = {
    ArrayMethods: {
      show: "Array Methods",
      description: "Methods for manipulating and transforming arrays (e.g., map, filter, reduce).",
    },
    StringMethods: {
      show: "String Methods",
      description: "Methods for manipulating and processing strings (e.g., slice, split, toUpperCase).",
    },
    ObjectMethods: {
      show: "Object Methods",
      description: "Methods for working with object properties and structure (e.g., keys, values, assign).",
    },
    MathUtilities: {
      show: "Math Utilities",
      description: "Functions for mathematical operations and calculations (e.g., round, random, max).",
    },
    DateTimeMethods: {
      show: "Date/Time Methods",
      description: "Methods for handling dates and times (e.g., getDate, toISOString).",
    },
    DOMManipulation: {
      show: "DOM Manipulation",
      description: "Methods for interacting with the Document Object Model (e.g., querySelector, addEventListener).",
    },
    EventHandling: {
      show: "Event Handling",
      description: "Methods and properties for managing user interactions and events (e.g., preventDefault, stopPropagation).",
    },
    UtilityFunctions: {
      show: "Utility Functions",
      description: "General-purpose functions for type checking, parsing, and more (e.g., parseInt, isNaN).",
    },
  };
  
  // ------------------- Array Methods -------------------
  export const arrayMethods = {
    push: {
      method: "push",
      show: "Push",
      description: "Adds one or more elements to the end of an array and returns the new length.",
      parameters: [{ name: "...items", type: "any", description: "Elements to add to the array" }],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["unshift", "splice", "concat"],
      useCase: "Use to append elements to an array, commonly for dynamic list growth.",
      factory: function (array) {
        return (...items) => array.push(...items);
      },
    },
    pop: {
      method: "pop",
      show: "Pop",
      description: "Removes the last element from an array and returns it.",
      parameters: [],
      returnType: ["any", "undefined"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["shift", "splice"],
      useCase: "Use to remove and retrieve the last element, often for stack operations.",
      factory: function (array) {
        return () => array.pop();
      },
    },
    shift: {
      method: "shift",
      show: "Shift",
      description: "Removes the first element from an array and returns it.",
      parameters: [],
      returnType: ["any", "undefined"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["pop", "unshift", "splice"],
      useCase: "Use to remove and retrieve the first element, often for queue operations.",
      factory: function (array) {
        return () => array.shift();
      },
    },
    unshift: {
      method: "unshift",
      show: "Unshift",
      description: "Adds one or more elements to the beginning of an array and returns the new length.",
      parameters: [{ name: "...items", type: "any", description: "Elements to add to the array" }],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["push", "splice", "concat"],
      useCase: "Use to prepend elements to an array, often for prioritized insertions.",
      factory: function (array) {
        return (...items) => array.unshift(...items);
      },
    },
    map: {
      method: "map",
      show: "Map",
      description: "Creates a new array with the results of calling a function for every array element.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute on each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["forEach", "filter", "flatMap"],
      useCase: "Use to transform each element of an array, such as reformatting data.",
      factory: function (array) {
        return (callback, thisArg) => array.map(callback, thisArg);
      },
    },
    filter: {
      method: "filter",
      show: "Filter",
      description: "Creates a new array with all elements that pass the test implemented by the provided function.",
      parameters: [
        { name: "callback", type: "function", description: "Function to test each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["find", "every", "some"],
      useCase: "Use to create a subset of an array based on conditions, like filtering valid items.",
      factory: function (array) {
        return (callback, thisArg) => array.filter(callback, thisArg);
      },
    },
    reduce: {
      method: "reduce",
      show: "Reduce",
      description: "Executes a reducer function on each element, resulting in a single output value.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute on each element" },
        { name: "initialValue", type: "any", description: "Initial value for the accumulator", optional: true },
      ],
      returnType: ["any"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["map", "forEach"],
      useCase: "Use to aggregate array elements, such as summing values or building objects.",
      factory: function (array) {
        return (callback, initialValue) => array.reduce(callback, initialValue);
      },
    },
    forEach: {
      method: "forEach",
      show: "ForEach",
      description: "Executes a provided function once for each array element.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute on each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Iterator",
      relatedMethods: ["map", "filter", "reduce"],
      useCase: "Use to perform side effects for each element, like logging or updating external state.",
      factory: function (array) {
        return (callback, thisArg) => array.forEach(callback, thisArg);
      },
    },
    find: {
      method: "find",
      show: "Find",
      description: "Returns the first element that satisfies the provided testing function.",
      parameters: [
        { name: "callback", type: "function", description: "Function to test each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["any", "undefined"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["filter", "some", "indexOf"],
      useCase: "Use to locate the first matching element, like finding a user by ID.",
      factory: function (array) {
        return (callback, thisArg) => array.find(callback, thisArg);
      },
    },
    includes: {
      method: "includes",
      show: "Includes",
      description: "Determines whether an array includes a certain value, returning true or false.",
      parameters: [
        { name: "value", type: "any", description: "Value to search for" },
        { name: "fromIndex", type: "number", description: "Index to start searching from", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["indexOf", "find"],
      useCase: "Use to check if a value exists in an array, like validating input.",
      factory: function (array) {
        return (value, fromIndex) => array.includes(value, fromIndex);
      },
    },
    slice: {
      method: "slice",
      show: "Slice",
      description: "Returns a shallow copy of a portion of an array into a new array.",
      parameters: [
        { name: "start", type: "number", description: "Start index", optional: true },
        { name: "end", type: "number", description: "End index (exclusive)", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["splice", "concat"],
      useCase: "Use to extract a portion of an array without modifying it, like pagination.",
      factory: function (array) {
        return (start, end) => array.slice(start, end);
      },
    },
    splice: {
      method: "splice",
      show: "Splice",
      description: "Changes the contents of an array by removing or replacing existing elements and/or adding new ones.",
      parameters: [
        { name: "start", type: "number", description: "Start index" },
        { name: "deleteCount", type: "number", description: "Number of elements to remove", optional: true },
        { name: "...items", type: "any", description: "Elements to add", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["slice", "push", "unshift"],
      useCase: "Use to modify an array by adding/removing elements, like editing lists.",
      factory: function (array) {
        return (start, deleteCount, ...items) => array.splice(start, deleteCount, ...items);
      },
    },
    every: {
      method: "every",
      show: "Every",
      description: "Tests whether all elements in the array pass the provided function's test.",
      parameters: [
        { name: "callback", type: "function", description: "Function to test each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["some", "filter", "find"],
      useCase: "Use to validate that all elements meet a condition, like checking data integrity.",
      factory: function (array) {
        return (callback, thisArg) => array.every(callback, thisArg);
      },
    },
    some: {
      method: "some",
      show: "Some",
      description: "Tests whether at least one element in the array passes the provided function's test.",
      parameters: [
        { name: "callback", type: "function", description: "Function to test each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["every", "find", "includes"],
      useCase: "Use to check if any element meets a condition, like feature detection.",
      factory: function (array) {
        return (callback, thisArg) => array.some(callback, thisArg);
      },
    },
    indexOf: {
      method: "indexOf",
      show: "Index Of",
      description: "Returns the first index of a specified value in the array, or -1 if not found.",
      parameters: [
        { name: "value", type: "any", description: "Value to search for" },
        { name: "fromIndex", type: "number", description: "Index to start searching from", optional: true },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["lastIndexOf", "includes", "find"],
      useCase: "Use to find the position of an element, like searching for an item.",
      factory: function (array) {
        return (value, fromIndex) => array.indexOf(value, fromIndex);
      },
    },
    lastIndexOf: {
      method: "lastIndexOf",
      show: "Last Index Of",
      description: "Returns the last index of a specified value in the array, or -1 if not found.",
      parameters: [
        { name: "value", type: "any", description: "Value to search for" },
        { name: "fromIndex", type: "number", description: "Index to start searching from", optional: true },
      ],
      returnType: ["number"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["indexOf", "includes"],
      useCase: "Use to find the last occurrence of an element, like reverse searching.",
      factory: function (array) {
        return (value, fromIndex) => array.lastIndexOf(value, fromIndex);
      },
    },
    concat: {
      method: "concat",
      show: "Concat",
      description: "Combines multiple arrays or values into a single array.",
      parameters: [{ name: "...items", type: ["array", "any"], description: "Arrays or values to concatenate" }],
      returnType: ["array"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["push", "unshift", "slice"],
      useCase: "Use to merge arrays or append values, like combining datasets.",
      factory: function (array) {
        return (...items) => array.concat(...items);
      },
    },
    flat: {
      method: "flat",
      show: "Flat",
      description: "Flattens an array of nested arrays into a single array.",
      parameters: [{ name: "depth", type: "number", description: "Depth level to flatten", optional: true }],
      returnType: ["array"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["flatMap", "concat"],
      useCase: "Use to simplify nested arrays, like normalizing data structures.",
      factory: function (array) {
        return (depth) => array.flat(depth);
      },
    },
    flatMap: {
      method: "flatMap",
      show: "Flat Map",
      description: "Maps each element and then flattens the result into a new array.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute on each element" },
        { name: "thisArg", type: "any", description: "Value to use as this when executing callback", optional: true },
      ],
      returnType: ["array"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["map", "flat"],
      useCase: "Use to transform and flatten arrays in one step, like processing nested data.",
      factory: function (array) {
        return (callback, thisArg) => array.flatMap(callback, thisArg);
      },
    },
    sort: {
      method: "sort",
      show: "Sort",
      description: "Sorts the elements of an array in place.",
      parameters: [
        { name: "compareFunction", type: "function", description: "Function to determine order", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["reverse"],
      useCase: "Use to reorder array elements, like sorting names or numbers.",
      factory: function (array) {
        return (compareFunction) => array.sort(compareFunction);
      },
    },
    reverse: {
      method: "reverse",
      show: "Reverse",
      description: "Reverses the order of elements in an array.",
      parameters: [],
      returnType: ["array"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["sort"],
      useCase: "Use to invert the order of elements, like reversing a list display.",
      factory: function (array) {
        return () => array.reverse();
      },
    },
  };
  
  // ------------------- String Methods -------------------
  export const stringMethods = {
    toUpperCase: {
      method: "toUpperCase",
      show: "To Upper Case",
      description: "Converts a string to uppercase letters.",
      parameters: [],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["toLowerCase"],
      useCase: "Use to standardize text to uppercase, like for case-insensitive comparisons.",
      factory: function (str) {
        return () => str.toUpperCase();
      },
    },
    toLowerCase: {
      method: "toLowerCase",
      show: "To Lower Case",
      description: "Converts a string to lowercase letters.",
      parameters: [],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["toUpperCase"],
      useCase: "Use to standardize text to lowercase, like for uniform data processing.",
      factory: function (str) {
        return () => str.toLowerCase();
      },
    },
    trim: {
      method: "trim",
      show: "Trim",
      description: "Removes whitespace from both ends of a string.",
      parameters: [],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["trimStart", "trimEnd"],
      useCase: "Use to clean user input by removing leading/trailing spaces.",
      factory: function (str) {
        return () => str.trim();
      },
    },
    split: {
      method: "split",
      show: "Split",
      description: "Divides a string into an array of substrings based on a delimiter.",
      parameters: [
        { name: "delimiter", type: ["string", "regexp"], description: "Delimiter to split the string" },
        { name: "limit", type: "number", description: "Maximum number of splits", optional: true },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Transformer",
      relatedMethods: ["slice", "substring"],
      useCase: "Use to parse a string into an array, like splitting a CSV string.",
      factory: function (str) {
        return (delimiter, limit) => str.split(delimiter, limit);
      },
    },
    slice: {
      method: "slice",
      show: "Slice",
      description: "Extracts a portion of a string and returns it as a new string.",
      parameters: [
        { name: "start", type: "number", description: "Start index" },
        { name: "end", type: "number", description: "End index (exclusive)", optional: true },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["substring", "substr"],
      useCase: "Use to extract a specific portion of a string, like getting a substring.",
      factory: function (str) {
        return (start, end) => str.slice(start, end);
      },
    },
    replace: {
      method: "replace",
      show: "Replace",
      description: "Replaces the first occurrence of a substring with a new value.",
      parameters: [
        { name: "searchValue", type: ["string", "regexp"], description: "Substring or pattern to replace" },
        { name: "replaceValue", type: ["string", "function"], description: "Replacement string or function" },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["replaceAll", "match"],
      useCase: "Use to substitute a specific part of a string, like correcting a typo.",
      factory: function (str) {
        return (searchValue, replaceValue) => str.replace(searchValue, replaceValue);
      },
    },
    replaceAll: {
      method: "replaceAll",
      show: "Replace All",
      description: "Replaces all occurrences of a substring with a new value.",
      parameters: [
        { name: "searchValue", type: ["string", "regexp"], description: "Substring or pattern to replace" },
        { name: "replaceValue", type: ["string", "function"], description: "Replacement string or function" },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["replace", "matchAll"],
      useCase: "Use to replace all instances of a substring, like updating multiple placeholders.",
      factory: function (str) {
        return (searchValue, replaceValue) => str.replaceAll(searchValue, replaceValue);
      },
    },
    includes: {
      method: "includes",
      show: "Includes",
      description: "Checks if a string contains a specified substring, returning true or false.",
      parameters: [
        { name: "searchString", type: "string", description: "Substring to search for" },
        { name: "position", type: "number", description: "Position to start searching from", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["indexOf", "startsWith", "endsWith"],
      useCase: "Use to verify if a substring exists, like checking for keywords.",
      factory: function (str) {
        return (searchString, position) => str.includes(searchString, position);
      },
    },
    startsWith: {
      method: "startsWith",
      show: "Starts With",
      description: "Checks if a string starts with a specified substring, returning true or false.",
      parameters: [
        { name: "searchString", type: "string", description: "Substring to check" },
        { name: "position", type: "number", description: "Position to start checking from", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["endsWith", "includes"],
      useCase: "Use to confirm a string begins with a prefix, like validating file extensions.",
      factory: function (str) {
        return (searchString, position) => str.startsWith(searchString, position);
      },
    },
    endsWith: {
      method: "endsWith",
      show: "Ends With",
      description: "Checks if a string ends with a specified substring, returning true or false.",
      parameters: [
        { name: "searchString", type: "string", description: "Substring to check" },
        { name: "length", type: "number", description: "Length of the string to consider", optional: true },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["startsWith", "includes"],
      useCase: "Use to confirm a string ends with a suffix, like checking URL paths.",
      factory: function (str) {
        return (searchString, length) => str.endsWith(searchString, length);
      },
    },
    charAt: {
      method: "charAt",
      show: "Char At",
      description: "Returns the character at a specified index in a string.",
      parameters: [
        { name: "index", type: "number", description: "Index of the character" },
      ],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["charCodeAt", "slice"],
      useCase: "Use to retrieve a specific character, like parsing a single digit.",
      factory: function (str) {
        return (index) => str.charAt(index);
      },
    },
    indexOf: {
      method: "indexOf",
      show: "Index Of",
      description: "Returns the index of the first occurrence of a specified substring.",
      parameters: [
        { name: "searchString", type: "string", description: "Substring to search for" },
        { name: "position", type: "number", description: "Position to start searching from", optional: true },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["lastIndexOf", "includes"],
      useCase: "Use to find the position of a substring, like locating a delimiter.",
      factory: function (str) {
        return (searchString, position) => str.indexOf(searchString, position);
      },
    },
    lastIndexOf: {
      method: "lastIndexOf",
      show: "Last Index Of",
      description: "Returns the index of the last occurrence of a specified substring.",
      parameters: [
        { name: "searchString", type: "string", description: "Substring to search for" },
        { name: "position", type: "number", description: "Position to start searching from", optional: true },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["indexOf", "includes"],
      useCase: "Use to find the last position of a substring, like reverse parsing.",
      factory: function (str) {
        return (searchString, position) => str.lastIndexOf(searchString, position);
      },
    },
    match: {
      method: "match",
      show: "Match",
      description: "Matches a string against a regular expression and returns the result.",
      parameters: [
        { name: "regexp", type: "regexp", description: "Regular expression to match" },
      ],
      returnType: ["array", "null"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["matchAll", "replace"],
      useCase: "Use to extract matches from a string, like parsing email addresses.",
      factory: function (str) {
        return (regexp) => str.match(regexp);
      },
    },
    matchAll: {
      method: "matchAll",
      show: "Match All",
      description: "Returns all matches of a string against a regular expression.",
      parameters: [
        { name: "regexp", type: "regexp", description: "Regular expression to match" },
      ],
      returnType: ["iterator"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["match", "replaceAll"],
      useCase: "Use to iterate over all regex matches, like extracting all URLs.",
      factory: function (str) {
        return (regexp) => str.matchAll(regexp);
      },
    },
    padStart: {
      method: "padStart",
      show: "Pad Start",
      description: "Pads the current string with another string, so it reaches a given length from the left.",
      parameters: [
        { name: "targetLength", type: "number", description: "Desired string length" },
        { name: "padString", type: "string", description: "String to pad with", optional: true },
      ],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["padEnd"],
      useCase: "Use to align strings by adding leading characters, like formatting numbers.",
      factory: function (str) {
        return (targetLength, padString) => str.padStart(targetLength, padString);
      },
    },
    padEnd: {
      method: "padEnd",
      show: "Pad End",
      description: "Pads the current string with another string, so it reaches a given length from the right.",
      parameters: [
        { name: "targetLength", type: "number", description: "Desired string length" },
        { name: "padString", type: "string", description: "String to pad with", optional: true },
      ],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["padStart"],
      useCase: "Use to align strings by adding trailing characters, like formatting logs.",
      factory: function (str) {
        return (targetLength, padString) => str.padEnd(targetLength, padString);
      },
    },
    repeat: {
      method: "repeat",
      show: "Repeat",
      description: "Returns a new string that repeats the original string a specified number of times.",
      parameters: [
        { name: "count", type: "number", description: "Number of times to repeat" },
      ],
      returnType: ["string"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Transformer",
      relatedMethods: [],
      useCase: "Use to create repeated patterns, like generating a separator string.",
      factory: function (str) {
        return (count) => str.repeat(count);
      },
    },
    substring: {
      method: "substring",
      show: "Substring",
      description: "Extracts characters from a string between two indices.",
      parameters: [
        { name: "start", type: "number", description: "Start index" },
        { name: "end", type: "number", description: "End index (exclusive)", optional: true },
      ],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["slice", "substr"],
      useCase: "Use to extract a substring between indices, like parsing fixed-length data.",
      factory: function (str) {
        return (start, end) => str.substring(start, end);
      },
    },
    charCodeAt: {
      method: "charCodeAt",
      show: "Char Code At",
      description: "Returns the UTF-16 code of the character at a specified index.",
      parameters: [
        { name: "index", type: "number", description: "Index of the character" },
      ],
      returnType: ["number", "NaN"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["charAt"],
      useCase: "Use to get the character code for encoding or decoding tasks.",
      factory: function (str) {
        return (index) => str.charCodeAt(index);
      },
    },
  };
  
  // ------------------- Object Methods -------------------
  export const objectMethods = {
    keys: {
      method: "Object.keys",
      show: "Keys",
      description: "Returns an array of a given object's own enumerable property names.",
      parameters: [
        { name: "obj", type: "object", description: "Object to extract keys from" },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["values", "entries", "getOwnPropertyNames"],
      useCase: "Use to retrieve all enumerable property names, like iterating over object keys.",
      factory: function () {
        return (obj) => Object.keys(obj);
      },
    },
    values: {
      method: "Object.values",
      show: "Values",
      description: "Returns an array of a given object's own enumerable property values.",
      parameters: [
        { name: "obj", type: "object", description: "Object to extract values from" },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["keys", "entries"],
      useCase: "Use to access all enumerable property values, like extracting data from an object.",
      factory: function () {
        return (obj) => Object.values(obj);
      },
    },
    entries: {
      method: "Object.entries",
      show: "Entries",
      description: "Returns an array of a given object's own enumerable key-value pairs.",
      parameters: [
        { name: "obj", type: "object", description: "Object to extract entries from" },
      ],
      returnType: ["array"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["keys", "values", "fromEntries"],
      useCase: "Use to iterate over key-value pairs, like transforming object data.",
      factory: function () {
        return (obj) => Object.entries(obj);
      },
    },
    assign: {
      method: "Object.assign",
      show: "Assign",
      description: "Copies properties from one or more source objects to a target object.",
      parameters: [
        { name: "target", type: "object", description: "Target object to copy to" },
        { name: "...sources", type: "object", description: "Source objects to copy from" },
      ],
      returnType: ["object"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["create"],
      useCase: "Use to merge objects or clone properties, like combining configuration objects.",
      factory: function () {
        return (target, ...sources) => Object.assign(target, ...sources);
      },
    },
    hasOwnProperty: {
      method: "hasOwnProperty",
      show: "Has Own Property",
      description: "Returns a boolean indicating whether the object has the specified property.",
      parameters: [
        { name: "prop", type: ["string", "symbol"], description: "Property name to check" },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["propertyIsEnumerable"],
      useCase: "Use to check if an object directly owns a property, like validating object structure.",
      factory: function (obj) {
        return (prop) => obj.hasOwnProperty(prop);
      },
    },
    freeze: {
      method: "Object.freeze",
      show: "Freeze",
      description: "Prevents modification of an object's properties.",
      parameters: [
        { name: "obj", type: "object", description: "Object to freeze" },
      ],
      returnType: ["object"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Mutator",
      relatedMethods: ["seal", "isFrozen"],
      useCase: "Use to make an object immutable, like protecting constant configurations.",
      factory: function () {
        return (obj) => Object.freeze(obj);
      },
    },
    seal: {
      method: "Object.seal",
      show: "Seal",
      description: "Prevents adding or deleting properties but allows modification of existing ones.",
      parameters: [
        { name: "obj", type: "object", description: "Object to seal" },
      ],
      returnType: ["object"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Mutator",
      relatedMethods: ["freeze", "isSealed"],
      useCase: "Use to restrict object structure while allowing value changes, like controlled data models.",
      factory: function () {
        return (obj) => Object.seal(obj);
      },
    },
    fromEntries: {
      method: "Object.fromEntries",
      show: "From Entries",
      description: "Converts a list of key-value pairs into an object.",
      parameters: [
        { name: "entries", type: ["array", "iterable"], description: "Iterable of key-value pairs" },
      ],
      returnType: ["object"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["entries"],
      useCase: "Use to create an object from key-value pairs, like converting a Map to an object.",
      factory: function () {
        return (entries) => Object.fromEntries(entries);
      },
    },
    getOwnPropertyNames: {
      method: "Object.getOwnPropertyNames",
      show: "Get Own Property Names",
      description: "Returns an array of all properties (including non-enumerable) of an object.",
      parameters: [
        { name: "obj", type: "object", description: "Object to extract property names from" },
      ],
      returnType: ["array"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["keys"],
      useCase: "Use to access all property names, including non-enumerable ones, like debugging object structure.",
      factory: function () {
        return (obj) => Object.getOwnPropertyNames(obj);
      },
    },
    defineProperty: {
      method: "Object.defineProperty",
      show: "Define Property",
      description: "Defines a new property or modifies an existing one on an object.",
      parameters: [
        { name: "obj", type: "object", description: "Object to define the property on" },
        { name: "prop", type: ["string", "symbol"], description: "Property name" },
        { name: "descriptor", type: "object", description: "Property descriptor" },
      ],
      returnType: ["object"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Mutator",
      relatedMethods: ["defineProperties"],
      useCase: "Use to set specific property behaviors, like making a property non-writable.",
      factory: function () {
        return (obj, prop, descriptor) => Object.defineProperty(obj, prop, descriptor);
      },
    },
    create: {
      method: "Object.create",
      show: "Create",
      description: "Creates a new object with a specified prototype object and properties.",
      parameters: [
        { name: "proto", type: ["object", "null"], description: "Prototype object" },
        { name: "propertiesObject", type: "object", description: "Property descriptors", optional: true },
      ],
      returnType: ["object"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Creator",
      relatedMethods: ["assign"],
      useCase: "Use to create objects with custom prototypes, like implementing inheritance.",
      factory: function () {
        return (proto, propertiesObject) => Object.create(proto, propertiesObject);
      },
    },
  };
  
  // ------------------- Math Utilities -------------------
  export const mathUtilities = {
    round: {
      method: "Math.round",
      show: "Round",
      description: "Rounds a number to the nearest integer.",
      parameters: [
        { name: "num", type: "number", description: "Number to round" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["floor", "ceil", "trunc"],
      useCase: "Use to round numbers to the nearest integer, like formatting display values.",
      factory: function () {
        return (num) => Math.round(num);
      },
    },
    floor: {
      method: "Math.floor",
      show: "Floor",
      description: "Rounds a number down to the nearest integer.",
      parameters: [
        { name: "num", type: "number", description: "Number to round down" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["round", "ceil", "trunc"],
      useCase: "Use to round down numbers, like calculating grid positions.",
      factory: function () {
        return (num) => Math.floor(num);
      },
    },
    ceil: {
      method: "Math.ceil",
      show: "Ceil",
      description: "Rounds a number up to the nearest integer.",
      parameters: [
        { name: "num", type: "number", description: "Number to round up" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["round", "floor", "trunc"],
      useCase: "Use to round up numbers, like ensuring enough resource allocation.",
      factory: function () {
        return (num) => Math.ceil(num);
      },
    },
    random: {
      method: "Math.random",
      show: "Random",
      description: "Returns a random number between 0 (inclusive) and 1 (exclusive).",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Generator",
      relatedMethods: [],
      useCase: "Use to generate random values, like for simulations or random selections.",
      factory: function () {
        return () => Math.random();
      },
    },
    max: {
      method: "Math.max",
      show: "Max",
      description: "Returns the largest of the given numbers.",
      parameters: [
        { name: "...numbers", type: "number", description: "Numbers to compare" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["min"],
      useCase: "Use to find the largest value, like determining the maximum score.",
      factory: function () {
        return (...numbers) => Math.max(...numbers);
      },
    },
    min: {
      method: "Math.min",
      show: "Min",
      description: "Returns the smallest of the given numbers.",
      parameters: [
        { name: "...numbers", type: "number", description: "Numbers to compare" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["max"],
      useCase: "Use to find the smallest value, like identifying the minimum price.",
      factory: function () {
        return (...numbers) => Math.min(...numbers);
      },
    },
    abs: {
      method: "Math.abs",
      show: "Absolute",
      description: "Returns the absolute value of a number.",
      parameters: [
        { name: "num", type: "number", description: "Number to get absolute value of" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["sign"],
      useCase: "Use to get the magnitude of a number, like calculating distances.",
      factory: function () {
        return (num) => Math.abs(num);
      },
    },
    pow: {
      method: "Math.pow",
      show: "Power",
      description: "Returns the base raised to the exponent power.",
      parameters: [
        { name: "base", type: "number", description: "Base number" },
        { name: "exponent", type: "number", description: "Exponent to raise the base to" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["exp", "sqrt"],
      useCase: "Use to compute powers, like calculating compound interest.",
      factory: function () {
        return (base, exponent) => Math.pow(base, exponent);
      },
    },
    sqrt: {
      method: "Math.sqrt",
      show: "Square Root",
      description: "Returns the square root of a number.",
      parameters: [
        { name: "num", type: "number", description: "Number to find the square root of" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["pow"],
      useCase: "Use to compute square roots, like in geometric calculations.",
      factory: function () {
        return (num) => Math.sqrt(num);
      },
    },
    trunc: {
      method: "Math.trunc",
      show: "Truncate",
      description: "Returns the integer part of a number by removing any fractional digits.",
      parameters: [
        { name: "num", type: "number", description: "Number to truncate" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["round", "floor", "ceil"],
      useCase: "Use to remove decimal parts, like extracting whole numbers from ratios.",
      factory: function () {
        return (num) => Math.trunc(num);
      },
    },
    sign: {
      method: "Math.sign",
      show: "Sign",
      description: "Determines if a number is positive, negative, or zero.",
      parameters: [
        { name: "num", type: "number", description: "Number to determine the sign of" },
      ],
      returnType: ["number"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["abs"],
      useCase: "Use to check the sign of a number, like determining direction in physics.",
      factory: function () {
        return (num) => Math.sign(num);
      },
    },
    log: {
      method: "Math.log",
      show: "Log",
      description: "Returns the natural logarithm (base e) of a number.",
      parameters: [
        { name: "num", type: "number", description: "Number to compute the logarithm of" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Transformer",
      relatedMethods: ["exp"],
      useCase: "Use for logarithmic calculations, like analyzing exponential growth.",
      factory: function () {
        return (num) => Math.log(num);
      },
    },
    exp: {
      method: "Math.exp",
      show: "Exp",
      description: "Returns Euler's number (e) raised to the power of a specified number.",
      parameters: [
        { name: "num", type: "number", description: "Exponent to raise e to" },
      ],
      returnType: ["number"],
      usefulness: "Low",
      frequency: "Rare",
      methodType: "Transformer",
      relatedMethods: ["log", "pow"],
      useCase: "Use for exponential calculations, like modeling population growth.",
      factory: function () {
        return (num) => Math.exp(num);
      },
    },
  };
  
  // ------------------- Date/Time Methods -------------------
  export const dateTimeMethods = {
    getDate: {
      method: "getDate",
      show: "Get Date",
      description: "Returns the day of the month (1-31) for the specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setDate", "getMonth", "getFullYear"],
      useCase: "Use to retrieve the day of the month, like displaying calendar dates.",
      factory: function (date) {
        return () => date.getDate();
      },
    },
    getMonth: {
      method: "getMonth",
      show: "Get Month",
      description: "Returns the month (0-11) for the specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setMonth", "getDate", "getFullYear"],
      useCase: "Use to retrieve the month index, like formatting date strings.",
      factory: function (date) {
        return () => date.getMonth();
      },
    },
    getFullYear: {
      method: "getFullYear",
      show: "Get Full Year",
      description: "Returns the year (4 digits) for the specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setFullYear", "getMonth", "getDate"],
      useCase: "Use to retrieve the full year, like calculating age.",
      factory: function (date) {
        return () => date.getFullYear();
      },
    },
    toISOString: {
      method: "toISOString",
      show: "To ISO String",
      description: "Converts a date to a string in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).",
      parameters: [],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["toDateString", "toTimeString"],
      useCase: "Use to format dates for APIs or storage, like serializing timestamps.",
      factory: function (date) {
        return () => date.toISOString();
      },
    },
    now: {
      method: "Date.now",
      show: "Now",
      description: "Returns the number of milliseconds since January 1, 1970 (Unix Epoch).",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["getTime", "setTime"],
      useCase: "Use to get the current timestamp, like logging events.",
      factory: function () {
        return () => Date.now();
      },
    },
    setTime: {
      method: "setTime",
      show: "Set Time",
      description: "Sets the date and time by specifying milliseconds since the Unix Epoch.",
      parameters: [
        { name: "milliseconds", type: "number", description: "Milliseconds since Unix Epoch" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["getTime", "now"],
      useCase: "Use to set a specific timestamp, like scheduling future events.",
      factory: function (date) {
        return (milliseconds) => date.setTime(milliseconds);
      },
    },
    getTime: {
      method: "getTime",
      show: "Get Time",
      description: "Returns the time value of the specified date in milliseconds since the Unix Epoch.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setTime", "now"],
      useCase: "Use to get the timestamp of a date, like comparing dates.",
      factory: function (date) {
        return () => date.getTime();
      },
    },
    getDay: {
      method: "getDay",
      show: "Get Day",
      description: "Returns the day of the week (0-6) for a specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["getDate"],
      useCase: "Use to determine the weekday, like scheduling weekly tasks.",
      factory: function (date) {
        return () => date.getDay();
      },
    },
    getHours: {
      method: "getHours",
      show: "Get Hours",
      description: "Returns the hour (0-23) for a specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setHours", "getMinutes", "getSeconds"],
      useCase: "Use to retrieve the hour, like displaying time in a UI.",
      factory: function (date) {
        return () => date.getHours();
      },
    },
    getMinutes: {
      method: "getMinutes",
      show: "Get Minutes",
      description: "Returns the minutes (0-59) for a specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setMinutes", "getHours", "getSeconds"],
      useCase: "Use to retrieve minutes, like formatting time displays.",
      factory: function (date) {
        return () => date.getMinutes();
      },
    },
    getSeconds: {
      method: "getSeconds",
      show: "Get Seconds",
      description: "Returns the seconds (0-59) for a specified date.",
      parameters: [],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["setSeconds", "getHours", "getMinutes"],
      useCase: "Use to retrieve seconds, like for precise timing.",
      factory: function (date) {
        return () => date.getSeconds();
      },
    },
    setFullYear: {
      method: "setFullYear",
      show: "Set Full Year",
      description: "Sets the full year (4 digits) for a specified date.",
      parameters: [
        { name: "year", type: "number", description: "Year to set" },
        { name: "month", type: "number", description: "Month to set (0-11)", optional: true },
        { name: "date", type: "number", description: "Day of the month to set (1-31)", optional: true },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["getFullYear", "setMonth", "setDate"],
      useCase: "Use to update the year, like adjusting dates in forms.",
      factory: function (date) {
        return (year, month, dateVal) => date.setFullYear(year, month, dateVal);
      },
    },
    setMonth: {
      method: "setMonth",
      show: "Set Month",
      description: "Sets the month (0-11) for a specified date.",
      parameters: [
        { name: "month", type: "number", description: "Month to set (0-11)" },
        { name: "date", type: "number", description: "Day of the month to set (1-31)", optional: true },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["getMonth", "setFullYear", "setDate"],
      useCase: "Use to update the month, like navigating calendar months.",
      factory: function (date) {
        return (month, dateVal) => date.setMonth(month, dateVal);
      },
    },
    setDate: {
      method: "setDate",
      show: "Set Date",
      description: "Sets the day of the month (1-31) for a specified date.",
      parameters: [
        { name: "date", type: "number", description: "Day of the month to set (1-31)" },
      ],
      returnType: ["number"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["getDate", "setMonth", "setFullYear"],
      useCase: "Use to update the day of the month, like setting specific dates.",
      factory: function (date) {
        return (dateVal) => date.setDate(dateVal);
      },
    },
    toDateString: {
      method: "toDateString",
      show: "To Date String",
      description: "Returns a string representing the date portion of the Date object.",
      parameters: [],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["toTimeString", "toISOString"],
      useCase: "Use to display the date portion, like in user-friendly date outputs.",
      factory: function (date) {
        return () => date.toDateString();
      },
    },
    toTimeString: {
      method: "toTimeString",
      show: "To Time String",
      description: "Returns a string representing the time portion of the Date object.",
      parameters: [],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Transformer",
      relatedMethods: ["toDateString", "toISOString"],
      useCase: "Use to display the time portion, like showing event times.",
      factory: function (date) {
        return () => date.toTimeString();
      },
    },
  };
  
  // ------------------- DOM Manipulation -------------------
  export const domManipulation = {
    querySelector: {
      method: "document.querySelector",
      show: "Query Selector",
      description: "Returns the first element that matches a specified CSS selector.",
      parameters: [
        { name: "selector", type: "string", description: "CSS selector to match" },
      ],
      returnType: ["element", "null"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["querySelectorAll", "getElementById"],
      useCase: "Use to select a single DOM element, like targeting a specific button.",
      factory: function () {
        return (selector) => document.querySelector(selector);
      },
    },
    querySelectorAll: {
      method: "document.querySelectorAll",
      show: "Query Selector All",
      description: "Returns a NodeList of all elements that match a specified CSS selector.",
      parameters: [
        { name: "selector", type: "string", description: "CSS selector to match" },
      ],
      returnType: ["nodelist"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["querySelector"],
      useCase: "Use to select multiple DOM elements, like all list items.",
      factory: function () {
        return (selector) => document.querySelectorAll(selector);
      },
    },
    getElementById: {
      method: "document.getElementById",
      show: "Get Element By ID",
      description: "Returns the element with the specified ID.",
      parameters: [
        { name: "id", type: "string", description: "ID of the element" },
      ],
      returnType: ["element", "null"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["querySelector"],
      useCase: "Use to quickly select an element by its unique ID, like a form container.",
      factory: function () {
        return (id) => document.getElementById(id);
      },
    },
    createElement: {
      method: "document.createElement",
      show: "Create Element",
      description: "Creates a new element node with the specified tag name.",
      parameters: [
        { name: "tagName", type: "string", description: "Tag name of the element" },
      ],
      returnType: ["element"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Creator",
      relatedMethods: ["appendChild"],
      useCase: "Use to create new DOM elements, like adding a new div dynamically.",
      factory: function () {
        return (tagName) => document.createElement(tagName);
      },
    },
    appendChild: {
      method: "appendChild",
      show: "Append Child",
      description: "Adds a node as the last child of a specified parent node.",
      parameters: [
        { name: "node", type: ["element", "node"], description: "Node to append" },
      ],
      returnType: ["element", "node"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["createElement", "remove"],
      useCase: "Use to add elements to the DOM, like appending a new list item.",
      factory: function (parent) {
        return (node) => parent.appendChild(node);
      },
    },
    remove: {
      method: "remove",
      show: "Remove",
      description: "Removes an element from the DOM.",
      parameters: [],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["appendChild"],
      useCase: "Use to delete elements from the DOM, like removing a completed task.",
      factory: function (element) {
        return () => element.remove();
      },
    },
    setAttribute: {
      method: "setAttribute",
      show: "Set Attribute",
      description: "Sets the value of an attribute on the specified element.",
      parameters: [
        { name: "name", type: "string", description: "Attribute name" },
        { name: "value", type: "string", description: "Attribute value" },
      ],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["getAttribute"],
      useCase: "Use to modify element attributes, like setting a src for an image.",
      factory: function (element) {
        return (name, value) => element.setAttribute(name, value);
      },
    },
    getAttribute: {
      method: "getAttribute",
      show: "Get Attribute",
      description: "Returns the value of a specified attribute on the element.",
      parameters: [
        { name: "name", type: "string", description: "Attribute name" },
      ],
      returnType: ["string", "null"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["setAttribute"],
      useCase: "Use to retrieve attribute values, like getting an element's data attribute.",
      factory: function (element) {
        return (name) => element.getAttribute(name);
      },
    },
    innerHTML: {
      method: "innerHTML",
      show: "Inner HTML",
      description: "Gets or sets the HTML content of an element.",
      parameters: [
        { name: "html", type: "string", description: "HTML content to set", optional: true },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["textContent"],
      useCase: "Use to set or get HTML content, like updating a div with new markup.",
      factory: function (element) {
        return (html) => {
          if (html !== undefined) element.innerHTML = html;
          return element.innerHTML;
        };
      },
    },
    textContent: {
      method: "textContent",
      show: "Text Content",
      description: "Gets or sets the text content of an element.",
      parameters: [
        { name: "text", type: "string", description: "Text content to set", optional: true },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["innerHTML"],
      useCase: "Use to set or get plain text content, like updating a paragraph's text.",
      factory: function (element) {
        return (text) => {
          if (text !== undefined) element.textContent = text;
          return element.textContent;
        };
      },
    },
    classList: {
      method: "classList.add / classList.remove / classList.toggle",
      show: "Class List",
      description: "Manipulates the list of classes of an element (add, remove, toggle).",
      parameters: [
        { name: "method", type: "string", description: "ClassList method (add, remove, toggle)" },
        { name: "...classes", type: "string", description: "Class names to manipulate" },
      ],
      returnType: ["void", "boolean"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Mutator",
      relatedMethods: ["setAttribute"],
      useCase: "Use to manage element classes, like toggling a 'hidden' class.",
      factory: function (element) {
        return (method, ...classes) => {
          if (method === "add") element.classList.add(...classes);
          else if (method === "remove") element.classList.remove(...classes);
          else if (method === "toggle") return element.classList.toggle(...classes);
        };
      },
    },
    parentElement: {
      method: "parentElement",
      show: "Parent Element",
      description: "Gets the parent element of the current element.",
      parameters: [],
      returnType: ["element", "null"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["childNodes"],
      useCase: "Use to access an element's parent, like traversing up the DOM tree.",
      factory: function (element) {
        return () => element.parentElement;
      },
    },
    childNodes: {
      method: "childNodes",
      show: "Child Nodes",
      description: "Returns a live NodeList of the child nodes of an element.",
      parameters: [],
      returnType: ["nodelist"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["parentElement", "appendChild"],
      useCase: "Use to access all child nodes, like iterating over an element's children.",
      factory: function (element) {
        return () => element.childNodes;
      },
    },
  };
  
  // ------------------- Event Handling -------------------
  export const eventHandling = {
    addEventListener: {
      method: "addEventListener",
      show: "Add Event Listener",
      description: "Attaches an event handler to an element for a specified event.",
      parameters: [
        { name: "type", type: "string", description: "Event type to listen for" },
        { name: "listener", type: "function", description: "Event handler function" },
        { name: "options", type: ["object", "boolean"], description: "Event listener options or useCapture flag", optional: true },
      ],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Mutator",
      relatedMethods: ["removeEventListener"],
      useCase: "Use to attach event handlers, like handling clicks on a button.",
      factory: function (element) {
        return (type, listener, options) => element.addEventListener(type, listener, options);
      },
    },
    removeEventListener: {
      method: "removeEventListener",
      show: "Remove Event Listener",
      description: "Removes an event handler from an element for a specified event.",
      parameters: [
        { name: "type", type: "string", description: "Event type to remove" },
        { name: "listener", type: "function", description: "Event handler function to remove" },
        { name: "options", type: ["object", "boolean"], description: "Event listener options or useCapture flag", optional: true },
      ],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["addEventListener"],
      useCase: "Use to clean up event listeners, like removing a click handler after use.",
      factory: function (element) {
        return (type, listener, options) => element.removeEventListener(type, listener, options);
      },
    },
    preventDefault: {
      method: "preventDefault",
      show: "Prevent Default",
      description: "Prevents the default action of an event from occurring.",
      parameters: [],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Mutator",
      relatedMethods: ["stopPropagation"],
      useCase: "Use to block default behaviors, like preventing form submission.",
      factory: function (event) {
        return () => event.preventDefault();
      },
    },
    stopPropagation: {
      method: "stopPropagation",
      show: "Stop Propagation",
      description: "Prevents further propagation of the current event in the capturing and bubbling phases.",
      parameters: [],
      returnType: ["void"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Mutator",
      relatedMethods: ["preventDefault"],
      useCase: "Use to stop event bubbling, like isolating a click event to a child element.",
      factory: function (event) {
        return () => event.stopPropagation();
      },
    },
    target: {
      method: "event.target",
      show: "Event Target",
      description: "Returns the element that triggered the event.",
      parameters: [],
      returnType: ["element", "node"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Accessor",
      relatedMethods: ["currentTarget"],
      useCase: "Use to identify the element that triggered an event, like determining which button was clicked.",
      factory: function (event) {
        return () => event.target;
      },
    },
    currentTarget: {
      method: "event.currentTarget",
      show: "Event Current Target",
      description: "Returns the element that the event listener is attached to.",
      parameters: [],
      returnType: ["element", "null"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["target"],
      useCase: "Use to access the element with the listener, like referencing a parent container.",
      factory: function (event) {
        return () => event.currentTarget;
      },
    },
    type: {
      method: "event.type",
      show: "Event Type",
      description: "Returns the type of event that was triggered.",
      parameters: [],
      returnType: ["string"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: [],
      useCase: "Use to identify the event type, like distinguishing between click and keydown events.",
      factory: function (event) {
        return () => event.type;
      },
    },
  };
  
  // ------------------- Utility Functions -------------------
  export const utilityFunctions = {
    parseInt: {
      method: "parseInt",
      show: "Parse Integer",
      description: "Parses a string and returns an integer.",
      parameters: [
        { name: "string", type: "string", description: "String to parse" },
        { name: "radix", type: "number", description: "Radix for parsing (2-36)", optional: true },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["parseFloat"],
      useCase: "Use to convert strings to integers, like parsing user input numbers.",
      factory: function () {
        return (string, radix) => parseInt(string, radix);
      },
    },
    parseFloat: {
      method: "parseFloat",
      show: "Parse Float",
      description: "Parses a string and returns a floating-point number.",
      parameters: [
        { name: "string", type: "string", description: "String to parse" },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["parseInt"],
      useCase: "Use to convert strings to floating-point numbers, like parsing decimal inputs.",
      factory: function () {
        return (string) => parseFloat(string);
      },
    },
    isNaN: {
      method: "isNaN",
      show: "Is Not a Number",
      description: "Determines whether a value is NaN (Not-a-Number).",
      parameters: [
        { name: "value", type: "any", description: "Value to check" },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["Number.isNaN"],
      useCase: "Use to validate numeric inputs, like checking for invalid calculations.",
      factory: function () {
        return (value) => isNaN(value);
      },
    },
    typeof: {
      method: "typeof",
      show: "Type Of",
      description: "Returns a string indicating the type of the operand.",
      parameters: [
        { name: "value", type: "any", description: "Value to check type of" },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["instanceof"],
      useCase: "Use to determine the type of a variable, like debugging or type checking.",
      factory: function () {
        return (value) => typeof value;
      },
    },
    JSONparse: {
      method: "JSON.parse",
      show: "JSON Parse",
      description: "Parses a JSON string, constructing the JavaScript value or object described by it.",
      parameters: [
        { name: "text", type: "string", description: "JSON string to parse" },
        { name: "reviver", type: "function", description: "Function to transform the results", optional: true },
      ],
      returnType: ["any"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Transformer",
      relatedMethods: ["JSON.stringify"],
      useCase: "Use to convert JSON strings to objects, like parsing API responses.",
      factory: function () {
        return (text, reviver) => JSON.parse(text, reviver);
      },
    },
    JSONstringify: {
      method: "JSON.stringify",
      show: "JSON Stringify",
      description: "Converts a JavaScript value to a JSON string.",
      parameters: [
        { name: "value", type: "any", description: "Value to convert to JSON" },
        { name: "replacer", type: ["function", "array"], description: "Function or array to filter/transform values", optional: true },
        { name: "space", type: ["number", "string"], description: "Indentation for formatting", optional: true },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Transformer",
      relatedMethods: ["JSON.parse"],
      useCase: "Use to serialize objects to JSON, like preparing data for API requests.",
      factory: function () {
        return (value, replacer, space) => JSON.stringify(value, replacer, space);
      },
    },
    isFinite: {
      method: "Number.isFinite",
      show: "Is Finite",
      description: "Checks if a value is a finite number.",
      parameters: [
        { name: "value", type: "any", description: "Value to check" },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Rare",
      methodType: "Accessor",
      relatedMethods: ["isNaN"],
      useCase: "Use to validate if a number is finite, like checking calculation results.",
      factory: function () {
        return (value) => Number.isFinite(value);
      },
    },
    isInteger: {
      method: "Number.isInteger",
      show: "Is Integer",
      description: "Checks if a value is an integer.",
      parameters: [
        { name: "value", type: "any", description: "Value to check" },
      ],
      returnType: ["boolean"],
      usefulness: "Moderate",
      frequency: "Occasional",
      methodType: "Accessor",
      relatedMethods: ["isFinite"],
      useCase: "Use to verify if a value is an integer, like validating input for array indices.",
      factory: function () {
        return (value) => Number.isInteger(value);
      },
    },
    isArray: {
      method: "Array.isArray",
      show: "Is Array",
      description: "Checks if a value is an array.",
      parameters: [
        { name: "value", type: "any", description: "Value to check" },
      ],
      returnType: ["boolean"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Accessor",
      relatedMethods: ["typeof"],
      useCase: "Use to confirm a value is an array, like ensuring correct data structure.",
      factory: function () {
        return (value) => Array.isArray(value);
      },
    },
    encodeURIComponent: {
      method: "encodeURIComponent",
      show: "Encode URI Component",
      description: "Encodes a URI component by escaping special characters.",
      parameters: [
        { name: "uriComponent", type: "string", description: "String to encode" },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["decodeURIComponent"],
      useCase: "Use to encode URL parameters, like preparing query strings.",
      factory: function () {
        return (uriComponent) => encodeURIComponent(uriComponent);
      },
    },
    decodeURIComponent: {
      method: "decodeURIComponent",
      show: "Decode URI Component",
      description: "Decodes a URI component, replacing escape sequences.",
      parameters: [
        { name: "encodedURI", type: "string", description: "Encoded URI component to decode" },
      ],
      returnType: ["string"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Transformer",
      relatedMethods: ["encodeURIComponent"],
      useCase: "Use to decode URL parameters, like extracting query string values.",
      factory: function () {
        return (encodedURI) => decodeURIComponent(encodedURI);
      },
    },
    setTimeout: {
      method: "setTimeout",
      show: "Set Timeout",
      description: "Executes a function after a specified delay.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute" },
        { name: "delay", type: "number", description: "Delay in milliseconds", optional: true },
        { name: "...args", type: "any", description: "Arguments to pass to the callback", optional: true },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Scheduler",
      relatedMethods: ["setInterval", "clearTimeout"],
      useCase: "Use to delay execution, like triggering an action after a pause.",
      factory: function () {
        return (callback, delay, ...args) => setTimeout(callback, delay, ...args);
      },
    },
    setInterval: {
      method: "setInterval",
      show: "Set Interval",
      description: "Executes a function repeatedly at a specified interval.",
      parameters: [
        { name: "callback", type: "function", description: "Function to execute" },
        { name: "interval", type: "number", description: "Interval in milliseconds", optional: true },
        { name: "...args", type: "any", description: "Arguments to pass to the callback", optional: true },
      ],
      returnType: ["number"],
      usefulness: "High",
      frequency: "Common",
      methodType: "Scheduler",
      relatedMethods: ["setTimeout", "clearInterval"],
      useCase: "Use to run tasks repeatedly, like updating a clock every second.",
      factory: function () {
        return (callback, interval, ...args) => setInterval(callback, interval, ...args);
      },
    },
    console: {
      method: "console.log / console.error / console.warn",
      show: "Console",
      description: "Logs messages or errors to the console.",
      parameters: [
        { name: "method", type: "string", description: "Console method (log, error, warn)" },
        { name: "...args", type: "any", description: "Values to log" },
      ],
      returnType: ["void"],
      usefulness: "High",
      frequency: "Very Common",
      methodType: "Logger",
      relatedMethods: [],
      useCase: "Use to output debug information, like logging variable states.",
      factory: function () {
        return (method, ...args) => {
          if (method === "log") console.log(...args);
          else if (method === "error") console.error(...args);
          else if (method === "warn") console.warn(...args);
        };
      },
    },
  };
  