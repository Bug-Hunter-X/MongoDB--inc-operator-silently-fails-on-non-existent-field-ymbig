# MongoDB $inc Operator Silent Failure
This repository demonstrates a common error when using MongoDB's `$inc` operator. If you attempt to increment a field using `$inc` that does not already exist in the document, the operation will silently fail without throwing an error.  This can be problematic, leading to difficult-to-debug issues.

## Bug Description
The `bug.js` file demonstrates incorrect usage of the `$inc` operator.  It attempts to increment a non-existent field.  The update will not create the field, and no error will be thrown.

## Solution
The `bugSolution.js` file shows the correct way to handle this scenario, using either a default value or checking for the field's existence before attempting the increment operation.
