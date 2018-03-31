import chai  from "chai";
import {resolve} from "path";
import load, {loadAll} from "../src/";

describe("call-dir", function () {
    const expect = chai.expect;
    const dir = resolve(__dirname, "./demo");

    describe("load(path, callback)", function () {
        it("should execute callback for each file", function (done) {
            load(resolve(dir, "./deep"), function (path, filename) {
                expect(filename).to.equal("d.js");
                expect(path).to.equal(resolve(dir, "./deep/d.js"));

                done();
            });
        });

        it("should ignore dot files", function (done) {
            let results = {};
            let iterations = 0;

            function test() {
                expect(results).to.deep.equal({
                    "b.js": resolve(__dirname, "./demo/b.js"),
                    "c.js": resolve(__dirname, "./demo/c.js"),
                });

                done();
            }

            load(dir, function (path, filename) {
                results[filename] = path;

                if (++iterations === 2) {
                    test();
                }
            });
        });
    });

    describe("load(path, callback, true)", function () {
        it("should execute callback for each file (recursive)", function () {
            let results = {};
            let iterations = 0;

            function test() {
                expect(results).to.deep.equal({
                    "b.js": resolve(__dirname, "./demo/b.js"),
                    "c.js": resolve(__dirname, "./demo/c.js"),
                    "d.js": resolve(__dirname, "./demo/deep/d.js"),
                });

                done();
            }

            load(dir, function (path, filename) {
                results[filename] = path;

                if (++iterations === 3) {
                    test();
                }
            });
        });
    });

    describe("loadAll(path, callback)", function () {
        it("should execute callback for each file (recursive)", function () {
            let results = {};
            let iterations = 0;

            function test() {
                expect(results).to.deep.equal({
                    "b.js": resolve(__dirname, "./demo/b.js"),
                    "c.js": resolve(__dirname, "./demo/c.js"),
                    "d.js": resolve(__dirname, "./demo/deep/d.js"),
                });

                done();
            }

            load(dir, function (path, filename) {
                results[filename] = path;

                if (++iterations === 3) {
                    test();
                }
            });
        });
    });
});
