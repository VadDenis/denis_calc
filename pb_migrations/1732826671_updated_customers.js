/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsjxzwaxieweit4")

  collection.name = "partners"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsjawhmu",
    "name": "inn",
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
    "id": "yg4iv8fh",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("nsjxzwaxieweit4")

  collection.name = "customers"

  // remove
  collection.schema.removeField("hsjawhmu")

  // remove
  collection.schema.removeField("yg4iv8fh")

  return dao.saveCollection(collection)
})
