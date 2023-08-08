const Client = require("../models/clients.models.js");

exports.FindClients = async (req, res) => {
  try {
    const clients = await Client.findAll({
      where: {
        status: "available",
      },
    });
    return res.status(200).json({
      status: "success",
      message: "clients found",
      data: clients,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to fetch clients",
      error: error.message,
    });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { id, name, email, password, role, status } = req.body;
    const client = await Client.create({
      id,
      name,
      email,
      password,
      role,
      status,
    });

    return res.status(200).json({
      status: "success",
      message: "client created",
      data: client,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to create client",
      error: error.message,
    });
  }
};

exports.FindClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!client) {
      return res.status(404).json({
        status: "error",
        message: "client not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "client found",
      data: client,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to fetch client",
      error: error.message,
    });
  }
};

exports.updatedClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const client = await Client.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!client) {
      return res.status(404).json({
        status: "error",
        message: `client with id ${id} not found`,
      });
    }
    const clientUpdated = await client.update({
      name,
      email,
    });

    return res.status(200).json({
      status: "success",
      message: "client updated",
      data: clientUpdated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to update client",
      error: error.message,
    });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!client) {
      return res.status(404).json({
        status: "error",
        message: `client with id ${id} not found`,
      });
    }
    await client.update({
      status: "disabled",
    });
    return res.status(200).json({
      status: "success",
      message: "client deleted",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "failed to delete client",
      error,
    });
  }
};
