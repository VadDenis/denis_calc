/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cwvmdstpk3d7vk7",
    "created": "2024-11-28 17:52:37.146Z",
    "updated": "2024-11-28 17:52:37.146Z",
    "name": "materials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1oaeqmst",
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
  const collection = dao.findCollectionByNameOrId("cwvmdstpk3d7vk7");

  return dao.deleteCollection(collection);
})
