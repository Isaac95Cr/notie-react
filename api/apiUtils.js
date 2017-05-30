const sendJsonResponse = (res, content, status = '200') => {
  res.status(status);
  res.json(content);
}

const sendErrorResponse = (res, error, status = '404') => {
  res.status(status);
  res.send(error);
}

const saveModel = (res, model) => {
  model.save((err, data) => {
    if(err) sendErrorResponse(res, err, '500');
    sendJsonResponse(res, data, '201');
  });
}

const removeModel = (res, model) => {
  model.remove((err, data) => {
    if(err) sendErrorResponse(res, err, '500');
    sendJsonResponse(res, data, '200');
  });
}

const updateModel = (res, model, newData) => {
  Object.assign(model, newData);
  saveModel(res, model);
}


module.exports = {
  sendJsonResponse,
  sendErrorResponse,
  saveModel,
  removeModel,
  updateModel
}
