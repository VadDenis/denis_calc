/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykiw44ypoatl471")

  collection.name = "saved_calculations"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykiw44ypoatl471")

  collection.name = "filters"

  return dao.saveCollection(collection)
})
