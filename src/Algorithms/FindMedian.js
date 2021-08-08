function FindMedian(A, B) {
  if (A.length > B.length) {
     return FindMedian(B, A);
  }

  let x = A.length; //always the shorter array
  let y = B.length; //always the longer array
  //the initial search range
  let low = 0;
  let high = x;

  while (low <= high) {
    //if this condition ever fails, it means the initial arguments were not sorted
    /* we choose our initial partition as the midpoint of the smaller array
     * so that we can remove the largest possible search area on the next iteration.
     * We want the size of the partition to always include half of the elements of the array on each side,
     * so we have the relationship that:
     * partitionX + partitionY = (lengthSmallerArray + lengthLargerArray + 1 ) / 2 */
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2 - partitionX);

    //now find the values directly to the left and right of the partitions in each array
    let leftX;
    let rightX;
    let leftY;
    let rightY;

    /* we also need to control what happens when there is nothing on either side of the partition
     * do this by using either maximum or minimum "dummy" values*/

    if (partitionX == 0) {
      //there is nothing left of the partition in the smaller array
      leftX = Number.MIN_VALUE;
    } else {
      console.log("hii");
      leftX = A[partitionX - 1];
      console.log(partitionX, "leftX");
    }

    if (partitionX == x) {
      //there is nothing right of the partition in the smaller array
      rightX = Number.MAX_VALUE;
    } else rightX = A[partitionX];

    if (partitionY == 0) {
      //there is nothing left of the partition in the larger array
      leftY = Number.MIN_VALUE;
    } else leftY = B[partitionY - 1];

    if (partitionY == y) {
      //there is nothing right of the partition in the larger array
      rightY = Number.MAX_VALUE;
    } else rightY = B[partitionY];

    /* now that the values at of the current partition is established, we check to see if all the
     * values on the left are less than all of those on the right. If so, we can return the median.*/

    if (leftX <= rightY && leftY <= rightX) {
      if ((x + y) % 2 == 0) {
        //total number of elements is even
        return (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
      } else {
        //total number of elements is odd
        return Math.max(leftX, leftY);
      }
    } else {
      /* if the condition is not met we must reduce the search criteria and iterate again*/
      if (leftX > rightY) {
        //the median must be less than the current partitionX
        high = partitionX - 1; //eliminate the search area greater than partitionX
      } else {
        //the median must be greater than the current partitionX
        low = partitionX + 1; //eliminate the search area less than partitionX
      }
    }
  }
  return "exception";
}

export default FindMedian;
