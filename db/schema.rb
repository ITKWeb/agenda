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

ActiveRecord::Schema.define(version: 2013070916200000) do

  create_table "projets", force: true do |t|
    t.string   "nom"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sprints", force: true do |t|
    t.string   "nom"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "projet_id"
  end

  add_index "sprints", ["projet_id"], name: "index_sprints_on_projet_id"

  create_table "tickets", force: true do |t|
    t.string   "titre"
    t.string   "description"
    t.integer  "importance"
    t.integer  "poids"
    t.datetime "tempsPris"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "projet_id"
    t.integer  "sprint_id"
  end

  add_index "tickets", ["projet_id"], name: "index_tickets_on_projet_id"
  add_index "tickets", ["sprint_id"], name: "index_tickets_on_sprint_id"

end
