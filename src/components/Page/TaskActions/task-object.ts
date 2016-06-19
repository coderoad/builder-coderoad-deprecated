export default function getTaskObject(a: string): Builder.ActionObject {
  const obj: Builder.ActionObject = {
    action: a.substring(0, a.indexOf('(')),
    content: a.substring(a.indexOf('(') + 2, a.length - 2)
  };

  if (obj.action === 'open') {
    obj.singleLine = true;
  }

  return obj;
}
