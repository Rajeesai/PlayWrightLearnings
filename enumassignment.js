var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    //test execution
    console.log("Current SDLC Stage is ".concat(env, " "));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.PRODUCTION);
