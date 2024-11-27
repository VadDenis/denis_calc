/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ytpuc6tdk3aow9k",
    "created": "2024-11-24 14:10:47.224Z",
    "updated": "2024-11-24 14:10:47.224Z",
    "name": "filter_cleaning_class",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2bkn1nef",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ytpuc6tdk3aow9k");

  return dao.deleteCollection(collection);
})
