const queries = require('./query/queries')

const getEpidemicData = async(req, res) => {
    const { province_id, pandemic_id, date } = req.body;
    let result = await queries.queryEpidemicData(province_id, pandemic_id, date);
    res.status(200).json(result)
}

const getPandemicData = async(req, res) => {
    let result = await queries.queryPandemicData();
    res.status(200).json(result)
}

const getSupplyQuantity = async(req, res) => {
    const { province_id, pandemic_id } = req.body;
    let result = await queries.querySupplyQuantity(province_id, pandemic_id);
    res.status(200).json(result)
}

const getAllEmail = async(req, res) => {
    const { email } = req.body;
    let result = await queries.queryAllEmail(email);
    res.status(200).json(result);
}

const getEpidemicDataOfAllProvinces = async(req, res) => {
    const { pandemic_id, date } = req.body;
    let result = await queries.queryEpidemicDataOfAllProvinces(pandemic_id, date);
    res.status(200).json(result)
}

const getSupplyQuantityOfAllProvinces = async(req, res) => {
    const { pandemic_id } = req.body;
    let result = await queries.querySupplyQuantityOfAllProvinces(pandemic_id);
    res.status(200).json(result);
}

const getSupplyAbility = async(req, res) => {
    const { pandemic_id, supply_type_id } = req.body;
    let result = await queries.querySupplyAbility(pandemic_id, supply_type_id);
    res.status(200).json(result);
}

const getDistributionData = async(req, res) => {
    const { listReceive, listSupport } = req.body;
    let result = await queries.queryDistributionData(listReceive, listSupport);
    res.status(200).json(result);
}

const getProvinceData = async(req, res) => {
    let result = await queries.queryProvinceData();
    res.status(200).json(result)
}

const getSupplyTypeData = async(req, res) => {
    let result = await queries.querySupplyTypeData();
    res.status(200).json(result)
}

const getMedicalSupplyData = async(req, res) => {
    let result = await queries.queryMedicalSupplyData();
    res.status(200).json(result)
}

module.exports = {
    getEpidemicData,
    getPandemicData,
    getSupplyQuantity,
    getAllEmail,
    getEpidemicDataOfAllProvinces,
    getSupplyQuantityOfAllProvinces,
    getSupplyAbility,
    getDistributionData,
    getProvinceData,
    getSupplyTypeData,
    getMedicalSupplyData,
};