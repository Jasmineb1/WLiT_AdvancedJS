function sum(numbers) {
    return new Promise((resolve, reject) => {
      if (numbers.length !== 4) {
        reject(new Error("Input array must contain exactly 4 numbers"));
      } else {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);
      }
    });
  }
  
  async function findsum() {
    const numbers = [1, 2, 3, 4];
  
    try {
      const result = await sum(numbers);
      console.log("Sum of the 4 natural numbers:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  findsum();
  