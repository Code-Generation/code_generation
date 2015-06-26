class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.references :user, index: true
      t.string :description
      t.text :code

      t.timestamps
    end
  end
end
