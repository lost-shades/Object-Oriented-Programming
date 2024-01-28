class DescriptiveStatistics {
    // Measures of central tendency
    static mean(data) {
      const sum = data.reduce((acc, val) => acc + val, 0);
      return (sum / data.length).toFixed(2);
    }
  
    static median(data) {
      const sortedData = data.sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
    }
  
    static mode(data) {
      const frequencyMap = {};
      data.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      });
      let maxFrequency = 0;
      let modes = [];
      for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
          maxFrequency = frequencyMap[num];
          modes = [num];
        } else if (frequencyMap[num] === maxFrequency) {
          modes.push(num);
        }
      }
      return modes.map(mode => parseFloat(mode));
    }
  
    // Measures of dispersion
    static range(data) {
      const sortedData = data.sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    static variance(data) {
      const mean = DescriptiveStatistics.mean(data);
      const squaredDifferences = data.map(num => (num - mean) ** 2);
      return DescriptiveStatistics.mean(squaredDifferences);
    }
  
    static standardDeviation(data) {
      return Math.sqrt(DescriptiveStatistics.variance(data)).toFixed(2);
    }
  
    static quartiles(data) {
      const sortedData = data.sort((a, b) => a - b);
      const Q1 = DescriptiveStatistics.median(sortedData.slice(0, Math.floor(sortedData.length / 2)));
      const Q2 = DescriptiveStatistics.median(sortedData);
      const Q3 = DescriptiveStatistics.median(sortedData.slice(Math.ceil(sortedData.length / 2)));
      return { Q1, Q2, Q3 };
    }
  
    // Measure of dispersion - Absolute Deviation
    static absoluteDeviation(data) {
      const mean = DescriptiveStatistics.mean(data);
      const absoluteDifferences = data.map(num => Math.abs(num - mean));
      return DescriptiveStatistics.mean(absoluteDifferences);
    }
  }
  
  // Example usage
  const data = [4, 8, 6, 2, 10, 8, 5];
  console.log('Mean:', DescriptiveStatistics.mean(data));
  console.log('Median:', DescriptiveStatistics.median(data));
  console.log('Mode:', DescriptiveStatistics.mode(data));
  console.log('Range:', DescriptiveStatistics.range(data));
  console.log('Variance:', DescriptiveStatistics.variance(data));
  console.log('Standard Deviation:', DescriptiveStatistics.standardDeviation(data));
  console.log('Quartiles:', DescriptiveStatistics.quartiles(data));
  console.log('Absolute Deviation:', DescriptiveStatistics.absoluteDeviation(data));
  