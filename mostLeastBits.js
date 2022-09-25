function mostLeastBitsEquality (number) {
  let leastBit = (number >>> 31);
  let mostBit = ((number << 31) >>> 31);
  
  return leastBit == mostBit;
}
