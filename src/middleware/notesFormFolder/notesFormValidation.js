// DISCLAIMER: Code ideas taken from an example repo that uses the below code but for a login/register form - I've attempted to alter this to suit what we require it to do - Also need to research this technique further to gain a clear understanding.
// Skeleton of a general idea for what the notes form validation for the form's input validation could potentially be depending on functionality
// dispatch, getState, next, action, errors are made up/been passed in for now so that there was something inputted within each part of the code, need to research these to fully understand their purposes to ensure that they are required in the code if this skeleton can be used.

import { formValidationErrors } from "./validationErrors.js";
import { submitFormFailure } from "./notesFormActions.js";
import { formIsValid } from "./formIsValid.js"

const formValidationMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== "SUBMIT_FORM_SUCCESSFUL") {
        return next(action);
    };
    const { form } = action;
    let errors = formValidationErrors(form)
    if (!formIsValid(errors)) {
        dispatch(submitFormFailure(errors))
    } else {
        next(action)
    }
};

export default formValidationMiddleware;