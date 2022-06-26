// DISCLAIMER: Code ideas taken from an example repo that uses the below code but for a login/register form - I've attempted to alter this to suit what we require it to do - Also need to research this technique further to gain a clear understanding.
// Skeleton of a general idea for what the notes form actions for the form's input validation could potentially be depending on functionality
// form and errors are made up and put in as inputs for now, will need to change to relevant elements relating to the notes form file once linked
// May need another type such as 'API' to connect to our database? This is used in the example but it doesn't explain why.

export function submitFormSuccess(form) {
    return {
        type: "SUBMIT_FORM_SUCCESSFUL",
        form
    };
};

export function submitFormFailure(errors) {
    return {
        type: "FORM_VALIDATION_ERROR",
        errors
    };
};