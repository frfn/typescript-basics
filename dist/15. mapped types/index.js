"use strict";
const listOfProperties2 = {
    cole: "cole",
    flex: "flex",
    baby: "baby",
};
// index signature cannot do union types as shown below!
const Records = {
    flexer: 616,
};
Records.cole = 123;
Records[123] = 123;
const IndexSig = {
    flexer: 616,
};
IndexSig.cole = 123;
IndexSig[123] = 123;
// console.log(IndexSig)
/*
Though they are similar --
- Index Signatures: more primitive based: strings, numbers, primitive types
- Mapped Types: can take in union types, intersections types, etc

Index Signature has limitations, you can not use union or intersection types!
*/
