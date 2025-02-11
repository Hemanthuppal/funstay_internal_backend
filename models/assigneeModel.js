// models/assigneeModel.js
// const db = require('../config/db'); // Import the database connection

// const updateAssignee = async (leadid, assignee, managerid) => {
//   // Update both `assign_to_manager` and `managerid` fields in the `addleads` table
//   const query = `UPDATE addleads SET assign_to_manager = ?, managerid = ? WHERE leadid = ?`;
//   const [result] = await db.promise().execute(query, [managerid, assignee, leadid]);
//   return result;
// };

// models/assigneeModel.js
const db = require('../config/db');

const updateAssigneeModel = (leadid, assignee, managerid, callback) => {
  console.log("Received request body:",leadid, assignee, managerid,);
  // Update the lead with the new assignee.
  const updateLeadQuery = 'UPDATE addleads SET assign_to_manager = ?, managerid = ?  WHERE leadid = ?';
  db.query(updateLeadQuery, [assignee,managerid, leadid], (err, updateResult) => {
    if (err) {
      return callback(err);
    }
    // Insert a notification for the manager.
    const notificationMessage = 'Admin assigned you an Lead';
    const insertNotificationQuery = `
      INSERT INTO notifications (managerid, message, createdAt, \`read\`)
      VALUES (?, ?, NOW(), 0)
    `;
    db.query(insertNotificationQuery, [managerid, notificationMessage], (err2, insertResult) => {
      if (err2) {
        return callback(err2);
      }
      return callback(null, { updateResult, insertResult });
    });
  });
};

module.exports = { updateAssigneeModel };



// module.exports = { assigneeModel };

