module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        users: _.times(100, function(index) {
            return {
                id: index,
                name: faker.name.findName(),
                country: faker.address.country(),
                streetAddress: faker.address.streetAddress(),
                secondaryAddress: faker.address.secondaryAddress(),
                state: faker.address.state(),
                city: faker.address.city(),
                zipCode: faker.address.zipCode(),
                email: faker.internet.email(),
                DOB: faker.date.future(2),
                image: faker.internet.avatar()
            }
        })
    }
}