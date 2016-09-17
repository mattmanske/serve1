class CreateAffidavits < ActiveRecord::Migration
  def change
    create_table :affidavits do |t|
      t.references :service, index: true, foreign_key: true
      t.references :state,   index: true, foreign_key: true

      t.string :court, null: false
      t.string :url

      t.timestamps null: false
    end
  end
end
