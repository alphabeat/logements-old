# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150712140349) do

  create_table "appartments", force: true do |t|
    t.integer  "building_id"
    t.integer  "number"
    t.integer  "area"
    t.integer  "rent"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "appartments", ["building_id"], name: "index_appartments_on_building_id"

  create_table "buildings", force: true do |t|
    t.integer  "street_number"
    t.string   "street_type"
    t.string   "street_name"
    t.string   "zipcode"
    t.string   "city"
    t.string   "name"
    t.integer  "number_of_appartments"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "suppliers", force: true do |t|
    t.string   "name"
    t.string   "company"
    t.string   "profession"
    t.integer  "phone"
    t.string   "address"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", force: true do |t|
    t.integer  "tenant_id"
    t.string   "label"
    t.date     "dueto"
    t.boolean  "state"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tasks", ["tenant_id"], name: "index_tasks_on_tenant_id"

  create_table "tenants", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.date     "birthdate"
    t.integer  "phone"
    t.string   "parentsaddress"
    t.integer  "parentsphone"
    t.string   "email"
    t.date     "startdate"
    t.date     "enddate"
    t.integer  "cafamount"
    t.integer  "rent"
    t.boolean  "internet"
    t.integer  "solde"
    t.string   "payment"
    t.boolean  "haspaid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "appartment_id"
  end

  add_index "tenants", ["appartment_id"], name: "index_tenants_on_appartment_id"

end
