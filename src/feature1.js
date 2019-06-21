module.exports = {
  registerName: (req) => {
    return getNameFromParam(req);
  }
}

const getNameFromParam = (req) => {
  return "Aashish"
}
