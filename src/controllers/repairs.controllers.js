const Repair = require("./../models/repairs.models.js");

exports.findRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });
    return res.status(200).json({
      status: "success",
      message: "repair found",
      data: repair,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to fetch repair",
      error: error.message,
    });
  }
};

exports.findRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: "pending",
      },
    });
    return res.status(200).json({
      status: "success",
      message: "repairs found",
      data: repairs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to fetch repairs",
      error: error.message,
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userid, productid } = req.body;
    const repair = await Repair.create({
      date,
      status: "pending",
      userid,
      productid,
    });
    return res.status(200).json({
      status: "success",
      message: "repair created",
      data: repair,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to create repair",
      error: error.message,
    });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, status, userid } = req.body;

    const repairToUpdate = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });

    if (!repairToUpdate) {
      return res.status(404).json({
        status: "error",
        message: `Repair with id ${id} not found or not in pending state.`,
      });
    }

    const updatedRepair = await repairToUpdate.update({
      date,
      status,
      userid,
    });

    return res.status(200).json({
      status: "success",
      message: "repair updated",
      data: updatedRepair,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to update repair",
      error: error.message,
    });
  }
};
exports.deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repairToDelete = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });

    if (!repairToDelete) {
      return res.status(404).json({
        status: "error",
        message: `Repair with id ${id} not found or not in pending state.`,
      });
    }

    await repairToDelete.update({
      status: "deleted",
    });

    return res.status(200).json({
      status: "success",
      message: "repair deleted",
      data: repairToDelete,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to delete repair",
      error: error.message,
    });
  }
};

exports.findRepairByUser = async (req, res) => {
  try {
    const { userid } = req.params;
    const repairs = await Repair.findAll({
      where: {
        userid,
        date,
      },
    });
    return res.status(200).json({
      status: "success",
      message: "repairs found",
      data: repairs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to fetch repairs",
      error: error.message,
    });
  }
};
