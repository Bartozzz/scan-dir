// Minimum TypeScript Version: 3.0
type Callback = (fpath: string, fname: string) => any;

export function load(dir: string, callback: Callback, deep?: boolean): void;
export function loadAll(dir: string, callback: Callback): void;

export default load;
