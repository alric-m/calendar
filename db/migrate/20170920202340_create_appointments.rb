class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :starting_date

      t.timestamps
    end
  end
end
