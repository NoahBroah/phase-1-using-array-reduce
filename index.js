const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initialValue = 0
const totalBatteries = batteryBatches.reduce((batteries,reducer) => batteries + reducer)

console.log(totalBatteries)