const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  console.log("route hit");
  Transaction.create(body)
    .then(dbTransaction => {
      console.log(dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log("post error: ", err);
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  console.log("route hit");
  Transaction.insertMany(body)
    .then(dbTransaction => {
      console.log(dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  console.log("route hit");
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      console.log(dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;