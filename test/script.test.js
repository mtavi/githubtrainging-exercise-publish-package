const helloNpm = require('../index.js')
describe("testHello", () =>{
	test ("returns true if hello NPM is seen", () => {
		expect(helloNpm()).toBe("hello NPM")
	})
	test ("returns false if hello world is seen", () => {
		expect(helloNpm()).not.toBe("hello world")
	})
})
