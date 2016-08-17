const requireFields = (...names) => data =>
  names.reduce((errors, name) => {
    if (!data[name]) {
      errors[name] = 'Required'
    }
    var temp={};
    if(Array.isArray(data[name])&&data[name].length>0){
      for (var i =  0; i <data[name].length; i++) {
        console.log(data[name][i]);
        if(!data[name][i]){
          temp[i]='Required';
        }
        errors[name]=temp;
      };
    }
    return errors
  }, {} )


const validateComb = requireFields('combname1', 'combname2',"phones")
const validateChild = requireFields('testname', 'othername',"awards")
const validateDeepForm = data => {
  const errors = {}
  if (!data.username) {
    errors.username = 'Required'
  }
  if (!data.othername) {
    errors.othername = 'Required'
  }
  errors.test = validateComb(data.test)
  errors.children = data.children.map(validateChild)

  console.log("validateAll");
  console.log(data);
    // console.log(validateChild);
  console.log(errors);
  errors
  return errors
}

export default validateDeepForm