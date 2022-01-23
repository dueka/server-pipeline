const handler = require("../../utils/requestHandler");
const reqDb = require('../../models/candidatesModel');

function handleCandidateGet(req, res, next) {
    reqDb.find().then(data => {
        return handler.success(
            res, 200, 'All Candidates retrieved successfully', data
        )
    }).catch(error => {
        return handler.error(res, 500, `server error ${error.message}`)
    }) 
}

function handleCandidateGetById(req, res) {
    const { id } = req.params;
    reqDb.findById(id)
      .then(data => {
        return handler.success(
          res,
          200,
          'Candidate retrieved Successfully',
          data
        );
      })
      .catch(error => {
        return handler.error(res, 500, `server error ${error.message}`);
      });
  }


function handleCandidateDelete(req, res) {
    const {id} = req.params;
    reqDb.remove(id).then(() => {
        return handler.success(res, 200, 'Candidate was deleted successfully!')
    }).catch(error => {
        return handler.error(res, 500, `server error ${error.message}`)
    })
}

function handleCandidateGetByName(req, res) {
    const { name } = req.params;
    reqDb.findByName(name).then((data) => {
        return handler.success(res, 200, 'Candidate retrieved successfully', data)
    }).catch(error => {
        return handler.error(res, 500, `Server error ${error.message}`)
    })
}


module.exports = {
    handleCandidateGet,handleCandidateGetByName,handleCandidateDelete,
    handleCandidateGetById
}