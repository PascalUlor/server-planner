const calculate = require('../util');


const getServerCount = (req, res) =>{
    const { serverType, virtualMachines } = req.body;
    
    const vmCount = calculate(serverType, virtualMachines)

    res.status(200).json({
        status: 200,
        result: vmCount
    })
}

module.exports = getServerCount;