const serverType = {CPU: 2, RAM: 32, HDD: 100}
const virtualMachines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]


const calculate = (serverType, virtualMachines) => {
    let count = 0;

    while (virtualMachines.length > 0){
        let item = virtualMachines.shift();
        
        if(item['CPU'] < serverType['CPU'] || item['RAM'] < serverType['RAM'] && serverType['HDD'] % item['HDD'] === 0){
            serverType['CPU'] - item['CPU']
            serverType['RAM'] - item['RAM']
            count++;
        }
    }
    return count;
}



module.exports = calculate;