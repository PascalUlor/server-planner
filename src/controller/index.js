const calculate = require('../util/calculate');
const requestHandler = require('../util/requestHandler');


const getServerCount = (req, res) =>{
    const { serverType, virtualMachines } = req.body;
    
    const vmCount = calculate(serverType, virtualMachines)

    return requestHandler.success(res, 201, 'Server count successfully calculated', vmCount)
}

module.exports = getServerCount;