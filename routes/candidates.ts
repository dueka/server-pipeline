import {Router} from 'express';
const {handleCandidateGet, handleCandidateDelete,handleCandidateGetByName,
    handleCandidateGetById
} = require("../controllers/candidates/candidates");

const router = Router();

router.get("/", handleCandidateGet);
router.get("/filter/:name", handleCandidateGetByName);
router.get("/:id", handleCandidateGetById);
router.delete("/:id", handleCandidateDelete);

module.exports = router;