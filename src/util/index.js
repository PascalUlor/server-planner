/**
 * +calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int
 *
 * @param {*} serverType
 * @param {*} virtualMachines
 * @returns int
 */
const calculate = (serverType, virtualMachines) => {
    let count = 0;

    while (virtualMachines.length > 0){
        let vM = virtualMachines.shift();

        console.log(serverType)
        
        if(vM['CPU'] < serverType['CPU'] && vM['RAM'] <= serverType['RAM'] && vM['HDD'] <= serverType['HDD']){
            serverType['CPU'] -= vM['CPU'];
            serverType['RAM'] -= vM['RAM'];
            serverType['HDD'] -= vM['HDD'];
            count++;
        }
    }
    return count;
}



module.exports = calculate;