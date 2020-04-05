import load, { loadAll } from "call-dir";

// $ExpectType void
load("./directory", (fpath, fname) => {
  // $ExpectType string
  const filePath = fpath;

  // $ExpectType string
  const fileName = fname;
});

// $ExpectType void
loadAll("./directory", (fpath, fname) => {
  // $ExpectType string
  const filePath = fpath;

  // $ExpectType string
  const fileName = fname;
});
