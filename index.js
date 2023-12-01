const employee = {
    name : "Jay",
    streetAddress : "573 Clear",
};

function updateEmployeeWithKeyAndValue (obj, key, value) {
   const newEmployee = {...obj}
        newEmployee[key] = value;
        return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (obj, key) {
    const newEmployeeList = {...obj};
    delete newEmployeeList[key];
    return newEmployeeList;
};
    
function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key];
    return obj;
};

