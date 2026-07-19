function noop() {}
noop.enabled = false;
noop.log = noop;
noop.namespace = '';
noop.destroy = noop;
noop.extend = () => noop;
noop.coerce = (v) => v;
noop.disable = () => '';
noop.enable = () => {};
noop.enabled = () => false;
noop.humanize = { ms: (v) => `${v}ms`, s: (v) => `${v}s`, m: (v) => `${v}m` };
noop.inspectOpts = {};
noop.colors = [];
noop.useColors = () => false;
noop.formatters = {};

function createDebug(namespace) {
  const fn = noop;
  fn.namespace = namespace;
  fn.enabled = false;
  fn.log = noop;
  fn.destroy = noop;
  fn.extend = () => fn;
  fn.coerce = (v) => v;
  return fn;
}

createDebug.enable = () => {};
createDebug.disable = () => '';
createDebug.load = () => [];
createDebug.destroy = noop;
createDebug.default = createDebug;
createDebug.debug = createDebug;

export default createDebug;
