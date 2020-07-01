import scan, { scanRecursively } from "scan-dir";

// $ExpectType void
scan("./directory", (fpath, fname) => {
  // $ExpectType string
  const filePath = fpath;

  // $ExpectType string
  const fileName = fname;
});

// $ExpectType void
scanRecursively("./directory", (fpath, fname) => {
  // $ExpectType string
  const filePath = fpath;

  // $ExpectType string
  const fileName = fname;
});
