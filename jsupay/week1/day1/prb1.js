function findCellWithMaxWeight(N, Edge) {
    const weights = new Array(N).fill(0);
  
    // Calculate weights
    //[2, 0, -1, 2];
    for (let i = 0; i < N; i++) {
      if (Edge[i] !== -1) {
          weights[Edge[i]]+= i;
        //   console.log(weights, Edge[i] ,i)
        //  // console.log(Edge[i])
      }
    }
    //console.log(weights )
  
    let maxWeightCellIndex = -1;
    let maxWeight = -1;
  
    // Find cell with maximum weight
    for (let i = 0; i < N; i++) {
      if (weights[i] >= maxWeight) {
        maxWeight = weights[i];
        maxWeightCellIndex = i;
      }
    }
  
    return maxWeightCellIndex;
  }
  
  // Example usage:
 
const Edge = [2, 0, -1, 2];
const N = Edge.length;
  const maxWeightCell = findCellWithMaxWeight(N, Edge);
  console.log("Cell with Maximum Weight:", maxWeightCell);
  