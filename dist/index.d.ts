// Minimum TypeScript Version: 3.0
type Callback = (fpath: string, fname: string) => any;

export function scan(dir: string, callback: Callback, deep?: boolean): void;
export function scanRecursively(dir: string, callback: Callback): void;

export default scan;
