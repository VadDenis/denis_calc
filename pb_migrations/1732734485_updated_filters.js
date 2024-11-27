/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykiw44ypoatl471")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b6qq6xyb",
    "name": "coefficient",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ur4ikbwx",
    "name": "comment",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykiw44ypoatl471")

  // remove
  collection.schema.removeField("b6qq6xyb")

  // remove
  collection.schema.removeField("ur4ikbwx")

  return dao.saveCollection(collection)
})
