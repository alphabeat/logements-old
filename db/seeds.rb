# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Building.create({
  street_number: 15,
  street_type: "Allée",
  street_name: "Boissy d'Anglas",
  zipcode: 91000,
  city: "Evry",
  name: "Villa Rodin",
  number_of_appartments: 15
})

Building.create({
  street_number: 53,
  street_type: "Boulevard",
  street_name: "de l'Yerres",
  zipcode: 91000,
  city: "Evry",
  name: "Le Lancaster",
  number_of_appartments: 25
})

Building.create({
  street_number: 71,
  street_type: "Avenue",
  street_name: "Aristide Briand",
  zipcode: 92120,
  city: "Montrouge",
  name: "Montrouge",
  number_of_appartments: 35
})

Appartment.create({
  number: 12,
  building_id: 2,
  area: 60,
  rent: 800
})

Appartment.create({
  number: 141,
  building_id: 1,
  area: 27,
  rent: 599
})

Appartment.create({
  number: 10,
  building_id: 3,
  area: 60,
  rent: 1400
})

Tenant.create({lastname: 'Kilo', 
  firstname: 'Julien', 
  birthdate: '21-10-1992', 
  phone:'659418459', 
  parentsphone:'477712069', 
  email:'julienkilo@gmail.com',
  startdate:'01-04-2015',
	enddate:'31-08-2015',
	cafamount:'211',
	rent:'599',
  internet:false,
	solde:'400',
  haspaid:true,
	appartment_id:'2'
})

Tenant.create({lastname: 'Kilo', 
  firstname: 'Olivier', 
  birthdate: '21-12-1990', 
  phone:'632045893', 
  parentsphone:'477712069', 
  email:'olivier.kilo@centrale-marseille.fr',
  startdate:'01-09-2014',
	enddate:'31-12-2015',
	cafamount:'0',
	rent:'700',
  internet:true,
	solde:'500',
  haspaid:true,
	appartment_id:'3'
})

Tenant.create({lastname: 'Fayad', 
  firstname: 'Sarah', 
  birthdate: '18-11-1993', 
  phone:'617679301', 
  parentsphone:'477712069', 
  email:'fayad_sarah@yahoo.fr',
  startdate:'01-09-2014',
	enddate:'31-12-2015',
	cafamount:'0',
	rent:'700',
  internet:true,
	solde:'500',
  haspaid:true,
	appartment_id:'1'
})