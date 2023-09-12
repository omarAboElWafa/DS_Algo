/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 * Worst and Average Case Time Complexity: O(n*n).
 * Worst case occurs when array is reverse sorted.
 * Best Case Time Complexity: O(n).
 * Best case occurs when array is already sorted.
 */

class BubbleSort {
  constructor(inputArray) {
    this.array = inputArray;
  }

  /**
   * Sorts the given array from smallest to largest
   * @param {array} - array to be sorted
   * @returns {array} - sorted array
   */
  sortAscending() {
    let currentArrayLength = this.array.length;
    while (currentArrayLength > 0) {
      for (let i = 0; i < currentArrayLength; i++) {
        if (this.array[i] > this.array[i + 1]) {
          [this.array[i], this.array[i + 1]] = [
            this.array[i + 1],
            this.array[i],
          ];
        }
        continue;
      }
      currentArrayLength--;
    }
    return this.array;
  }

  /**
   * Sorts the given array from largest to smallest
   * @param {array} - array to be sorted
   * @returns {array} - sorted array
   */
  sortDescending() {
    let currentArrayLength = this.array.length;
    while (currentArrayLength > 0) {
      for (let i = 0; i < currentArrayLength; i++) {
        if (this.array[i] < this.array[i + 1]) {
          [this.array[i], this.array[i + 1]] = [
            this.array[i + 1],
            this.array[i],
          ];
        }
        continue;
      }
      currentArrayLength--;
    }

    return this.array;
  }
}

module.exports = BubbleSort;
