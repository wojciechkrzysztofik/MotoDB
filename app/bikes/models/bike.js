var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bikeSchema = new Schema({
  name: String,
  brand: { type: String, required: true }, // Honda
  model: { type: String, required: true }, // CBR 600RR
  engine: { type: Number, required: true }, // 599 cc
  fuel_system: { type: String }, // Fuel injection
  ignition: { type: String }, // Digital DC-CDI
  suspension: { type: String }, // Front: fully adjustable 43 mm telescopic fork, 130 mm (5.3 in) of travel
  power: {
    horsepower: Number, // 68.8 kW (92.3 hp)
    torque: Number, // 56.9 N·m (42.0 lb·ft)
  },
  tires: {
    front: String, // Front: 120/60-ZR17
    rear: String // Front: 180/60-ZR17
  },
  breaks: {
    front: String, // Front: 2×295 mm floating disc
    rear: String
  },
  dimensions: {
    rake: Number, // 24.0°
    trail: Number, // 95.0 mm (3.74 in)
    wheelbase: Number, // 1,390 mm (54.7 in)
    length: Number, // 2,100 mm (81 in)
    width: Number, // 700 mm (27.6 in)
    height: Number, // 1,120 mm (44.2 in)
    seat_height: Number, // 820 mm (32.3 in)
    dry_weight: Number, // 170 kg (370 lb)
    wet_weight: Number, // 170 kg (370 lb)
  },
  performance: {
    to_60mph: Number, // 3.1 sec.
    top_speed: Number, // 251 km/h
    fuel_economy: Number // 6.4 L/100 km
  },
  created_at: Date,
  updated_at: Date
});

var Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
