/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t5wlyr90gp2umg8",
    "created": "2024-11-24 14:10:01.833Z",
    "updated": "2024-11-24 14:10:01.833Z",
    "name": "filter_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "33chxg4n",
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
  const collection = dao.findCollectionByNameOrId("t5wlyr90gp2umg8");

  return dao.deleteCollection(collection);
})
