'use strict';
var dbConn = require('./../../config/db.config.js');
//Employee object create
var Employee = function (employee) {
    this.id_employee = employee.id_employee;
    this.id_boss = employee.id_boss;
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
};
Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employee set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Employee.findById = function (id, result) {
    dbConn.query("Select * from employee where id_employee = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Employee.findAll = function (result) {
    dbConn.query("Select * from employee", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Empleado : ', res);
            result(null, res);
        }
    });
};
Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE employee SET first_name=?,last_name=? WHERE id_employee = ?", [employee.first_name, employee.last_name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM employee WHERE id_employee = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Employee;