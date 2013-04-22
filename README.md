Form-Submission-Attributes-Polyfill
===================================

Simple polyfill to handle html5 form submission attributes in legacy browsers

Function must be applied to a form, ie $('form').formSubmissionAttributes() otherwise it will output a warning and cancel execution on that element.

The script will pull appropriately typed inputs/buttons either from within the form or that are pointed to the form via the form="" attribute.  If one of these items is clicked and has form submission attributes it will apply those values to the form before submission, otherwise it will make sure the form defaults (from page load time) are applied.

If you need a Modernizr test, I use:
Modernizr.addTest('formaction', 'formAction' in document.createElement('input'));