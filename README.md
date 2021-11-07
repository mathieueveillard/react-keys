# All you always wanted to know about keys \* but were afraid to ask

## Setup

`npm i`, then `npm start`.

## Why keys are needed

https://reactjs.org/docs/reconciliation.html

## Why using an index as key is a bad idea…

### Problem

- Assign a description to reference #100201, e.g. "Clean code, by Robert C. Martin"
- Delete this reference

Problem: the description ("Clean code, by Robert C. Martin") is now associated to reference #100202. Ooops…

### Explanation

https://reactjs.org/docs/reconciliation.html
https://medium.com/geekculture/reactjs-why-index-as-a-key-is-an-anti-pattern-4b9dc6ef0067
https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318

### Solution

In `Catalog.tsx`, use `reference` instead of `index` as key:

```typescript
{
  references.map((reference, index) => (
    <tr key={reference}>
      <Reference
        reference={reference}
        removeFromCatalog={removeFromCatalog(index)}
      />
    </tr>
  ));
}
```
