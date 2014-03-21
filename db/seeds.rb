# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Sound.delete_all

Sound.create(name:"conga", url:"https://s3.amazonaws.com/Sounds/conga.wav")
Sound.create(name:"cow_bell", url:"https://s3.amazonaws.com/Sounds/cow_bell.wav")
Sound.create(name:"cymbal", url:"https://s3.amazonaws.com/Sounds/cymbal.wav")
Sound.create(name:"hand_clap", url:"https://s3.amazonaws.com/Sounds/cymbal.wav")
Sound.create(name:"hi_hat", url:"https://s3.amazonaws.com/Sounds/hi_hat.wav")
Sound.create(name:"kick_drum_1", url:"https://s3.amazonaws.com/Sounds/kick_drum_1.wav")
Sound.create(name:"rim_click", url:"https://s3.amazonaws.com/Sounds/rim_click.wav")
Sound.create(name:"snare_drum", url:"https://s3.amazonaws.com/Sounds/snare_drum.wav")