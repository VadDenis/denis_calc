/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t62rqd0xkg9qjqc",
    "created": "2024-11-28 19:36:29.461Z",
    "updated": "2024-11-28 19:36:29.461Z",
    "name": "third_party_products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bjbgotuu",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t62rqd0xkg9qjqc");

  return dao.deleteCollection(collection);
})
