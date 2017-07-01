"use strict";
var Alumni = (function () {
    function Alumni(firstName, lastName, dateOfBirth, email, address, city, state, zip, campus, school, major, graduationYear, companyName, companyWeb, position, jobDesc, linkedIn, memories, recommendation) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (dateOfBirth === void 0) { dateOfBirth = ''; }
        if (email === void 0) { email = ''; }
        if (state === void 0) { state = ''; }
        if (companyName === void 0) { companyName = ''; }
        if (companyWeb === void 0) { companyWeb = ''; }
        if (position === void 0) { position = ''; }
        if (jobDesc === void 0) { jobDesc = ''; }
        if (linkedIn === void 0) { linkedIn = ''; }
        if (memories === void 0) { memories = ''; }
        if (recommendation === void 0) { recommendation = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.campus = campus;
        this.school = school;
        this.major = major;
        this.graduationYear = graduationYear;
        this.companyName = companyName;
        this.companyWeb = companyWeb;
        this.position = position;
        this.jobDesc = jobDesc;
        this.linkedIn = linkedIn;
        this.memories = memories;
        this.recommendation = recommendation;
    }
    return Alumni;
}());
exports.Alumni = Alumni;
//# sourceMappingURL=alumni.js.map