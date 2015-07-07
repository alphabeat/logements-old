# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
	appartment_id:'1'
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
	appartment_id:'2'
})

Tenant.create({lastname: 'Fayad', 
  firstname: 'Sarah', 
  birthdate: '18-11-1993', 
  phone:'', 
  parentsphone:'477712069', 
  email:'olivier.kilo@centrale-marseille.fr',
  startdate:'01-09-2014',
	enddate:'31-12-2015',
	cafamount:'0',
	rent:'700',
  internet:true,
	solde:'500',
  haspaid:true,
	appartment_id:'2'
})