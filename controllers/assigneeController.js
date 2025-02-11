// controllers/assigneeController.js
// const assigneeModel = require('../models/assigneeModel');


// const db = require('../config/db');

// const updateAssignee = (req, res) => {
//   const {leadid, assignee, managerid } = req.body;
  
 

//   const query = `
//     UPDATE addleads 
//     SET managerid = ?, assign_to_manager = ? 
//     WHERE leadid = ?
//   `;

//   db.query(query, [managerid ,assignee,  leadid], (error, results) => {
//     if (error) {
//       console.error("Error assigning lead:", error);
//       return res.status(500).json({ message: "Internal server error" });
//     }

//     if (results.affectedRows === 0) {
//       return res.status(404).json({ message: "Lead not found" });
//     }

//     return res.status(200).json({ message: "Lead assigned successfully" });
//   });
// };

// controllers/assigneeController.js
const { updateAssigneeModel } = require('../models/assigneeModel');

const updateAssignee = (req, res) => {
  const { leadid, assignee, managerid } = req.body;
  console.log("Received request body:", req.body);

  updateAssigneeModel(leadid, assignee, managerid, (err, results) => {
    if (err) {
      console.error('Error in updateAssignee:', err);
      return res.status(500).json({ message: 'Error updating lead or inserting notification' });
    }
    res.status(200).json({ message: "Assignee updated and notification sent." });
  });
};

const assignLead = (req, res) => {
  const { leadid, employeeId, employeeName } = req.body;
  
  console.log("Received employee ID:", employeeId); // Log employee ID
  console.log("Received employee Name:", employeeName); // Log employee name

  updateEmployeeModel(leadid, employeeId, employeeName, (err, results) => {
    if (err) {
      console.error('Error in updateAssignee:', err);
      return res.status(500).json({ message: 'Error updating lead or inserting notification' });
    }
    res.status(200).json({ message: "Assignee updated and notification sent." });
  });
};

module.exports = { updateAssignee };



// module.exports = { updateAssignee };
