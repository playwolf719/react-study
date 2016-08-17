const requireFields = (...names) => data =>
  names.reduce((errors, name) => {
    if (!data[name]) {
      errors[name] = 'Required'
    }
    console.log(data);
    if(Array.isArray(data[name])&&data[name].length>0){
      for (var i =  0; i <data[name].length; i++) {
        console.log(data[name][i]);
        if(!data[name][i]){
          var theName=name+"["+i+"]";
          console.log("Required");
          console.log(theName);
          errors[theName]='Required';
        }
      };
    }
    return errors
  }, {} )

// const requireArrayFields = (...names) => data =>
//   names.reduce((errors, name) => {
//         if(!errors[name][i]){
//           theName="awards["+i+"]";
//           errors[theName]='Required';
//         }
//     return errors
//   }, {} )

const validateChild = requireFields('username', 'othername',"awards")
const validateDeepForm = data => {
  const errors = {}
  if (!data.username) {
    errors.username = 'Required'
  }
  if (!data.othername) {
    errors.othername = 'Required'
  }
  errors.children = data.children.map(validateChild)
  return errors
}

export default validateDeepForm