import chai from "chai";
import { resolve } from "path";
import scan, { scanRecursively } from "../dist";

describe("scan-dir", () => {
  const expect = chai.expect;
  const dir = resolve(__dirname, "./demo");

  describe("scan(directory, callback)", () => {
    it("should execute callback for a valid file", (done) => {
      scan(resolve(dir, "./foo"), (fpath, fname) => {
        expect(fname).to.equal("d.js");
        expect(fpath).to.equal(resolve(dir, "./foo/d.js"));

        done();
      });
    });

    it("should execute callback for each file in directory", (done) => {
      let results = {};
      let iterations = 0;

      scan(dir, (fpath, fname) => {
        results[fname] = fpath;

        if (++iterations === 2) {
          expect(results).to.deep.equal({
            "b.js": resolve(__dirname, "./demo/b.js"),
            "c.js": resolve(__dirname, "./demo/c.js"),
          });

          done();
        }
      });
    });

    it("should ignore symlinks", (done) => {
      scan(resolve(dir, "./bar"), (fpath, fname) => {
        done(`Error: should ignore ${fname}`);
      });

      // Assumes that `load` should take less than 250ms to find any file:
      setTimeout(done, 250);
    });

    it("should ignore dotfiles", (done) => {
      scan(resolve(dir, "./bar"), (fpath, fname) => {
        done(`Error: should ignore ${fname}`);
      });

      // Assumes that `load` should take less than 250ms to find any file:
      setTimeout(done, 250);
    });
  });

  describe("scanRecursively(directory, callback)", () => {
    it("should execute callback for each file (recursive)", (done) => {
      let results = {};
      let iterations = 0;

      scanRecursively(dir, (fpath, fname) => {
        results[fname] = fpath;

        if (++iterations === 3) {
          expect(results).to.deep.equal({
            "b.js": resolve(__dirname, "./demo/b.js"),
            "c.js": resolve(__dirname, "./demo/c.js"),
            "d.js": resolve(__dirname, "./demo/foo/d.js"),
          });

          done();
        }
      });
    });
  });
});
