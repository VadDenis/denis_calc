/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qpwcnvkb3o6fe8l",
    "created": "2024-11-28 19:01:26.524Z",
    "updated": "2024-11-28 19:01:26.524Z",
    "name": "filters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "beji9alc",
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
  const collection = dao.findCollectionByNameOrId("qpwcnvkb3o6fe8l");

  return dao.deleteCollection(collection);
})
