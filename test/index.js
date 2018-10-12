import chai from "chai";
import { resolve } from "path";
import load, { loadAll } from "../dist/";

describe("call-dir", () => {
  const expect = chai.expect;
  const dir = resolve(__dirname, "./demo");

  describe("load(directory, callback)", () => {
    it("should execute callback for a valid file", done => {
      load(resolve(dir, "./foo"), function(fpath, fname) {
        expect(fname).to.equal("d.js");
        expect(fpath).to.equal(resolve(dir, "./foo/d.js"));

        done();
      });
    });

    it("should execute callback for each file in directory", done => {
      let results = {};
      let iterations = 0;

      load(dir, function(fpath, fname) {
        results[fname] = fpath;

        if (++iterations === 2) {
          expect(results).to.deep.equal({
            "b.js": resolve(__dirname, "./demo/b.js"),
            "c.js": resolve(__dirname, "./demo/c.js")
          });

          done();
        }
      });
    });

    it("should ignore symlinks", done => {
      load(resolve(dir, "./bar"), function(fpath, fname) {
        done(`Should ignore ${fname}`);
      });

      // Assumes that `load` should take less than 250ms to find any file:
      setTimeout(done, 250);
    });

    it("should ignore dotfiles", done => {
      load(resolve(dir, "./bar"), function(fpath, fname) {
        done(`Should ignore ${fname}`);
      });

      // Assumes that `load` should take less than 250ms to find any file:
      setTimeout(done, 250);
    });
  });

  describe("loadAll(directory, callback)", function() {
    it("should execute callback for each file (recursive)", function() {
      let results = {};
      let iterations = 0;

      load(dir, function(fpath, fname) {
        results[fname] = fpath;

        if (++iterations === 3) {
          expect(results).to.deep.equal({
            "b.js": resolve(__dirname, "./demo/b.js"),
            "c.js": resolve(__dirname, "./demo/c.js"),
            "d.js": resolve(__dirname, "./demo/foo/d.js")
          });

          done();
        }
      });
    });
  });
});
