// DISCLAIMER: Code ideas taken from an example repo that uses the below code but for a login/register form - I've attempted to alter this to suit what we require it to do - Also need to research this technique further to gain a clear understanding.
// Skeleton of a general idea for what the valid form file could potentially be like depending on functionality 
// errors and err are made up and will need to be changed to relevant elements relating to the notes form file once linked.

export default function formIsValid(errors) {
    return !Object.values(errors).some(err => err)
}