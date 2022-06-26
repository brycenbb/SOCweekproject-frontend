// DISCLAIMER: Code ideas taken from an example repo that uses the below code but for a login/register form - I've attempted to alter this to suit what we require it to do - Also need to research this technique further to gain a clear understanding.
// Skeleton of a general idea for what the attribute validators for the form's input validation could potentially be depending on functionality
// attributeValidators and 'form' are made up and put in as inputs for now, will need to change to relevant elements relating to the notes form file once linked

export const attributeValidators = {
    week_input: weekValid,
    day_input: dayValid,
    topic_input: topicValid,
    tag_input: tagValid
}

function weekValid(form) {
    if (week_input !== null) {
        console.log("Input field filled correctly")
        return form.week_input;
    };
};

function dayValid(form) {
    if (day_input !== null) {
        console.log("Input field filled correctly")
        return form.day_input;
    };
};

function topicValid(form) {
    if (topic_input !== null) {
        console.log("Input field filled correctly")
        return form.topic_input;
    };
};

function tagValid(form) {
    if (tag_input !== null) {
        console.log("Input field filled correctly")
        return form.tag_input;
    }
}

function completeForm(form) {
    if ({ weekValid, dayValid, topicValid, tagValid } !== null)
        return true;
}

export default completeForm;