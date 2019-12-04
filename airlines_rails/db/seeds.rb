# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 

sean = User.create(
    email: 'sean@ga.com.au',
    username: 'sean',
    password_digest: 'password',
    is_admin: true,
);

kay = User.create(
    email:'kay@ga.com.au',
    username: 'kay',
    password_digest: 'password',
    is_admin: false,
);

paulo = User.create(
    email:'paulo@ga.com.au',
    username: 'paulo', 
    password_digest: 'password', 
    is_admin: false,
);

plane1 = Plane.create(
    plane_name: "A380",
    rows: 30,
    cols: 20,
    total_seat: 600
);

plane2 = Plane.create(
    plane_name: "Mini plane",
    rows: 4,
    cols: 1,
    total_seat: 4
);

plane3 = Plane.create(
    plane_name: "B747",
    rows: 20,
    cols: 10,
    total_seat: 200
);

sydney = Destination.create(
    destination: "Sydney"
);

melbourne = Destination.create(
    destination: "Melbourne"
);

hobart = Destination.create(
    destination: "Hobart"
);

flight1 = Flight.create(
    plane_id: plane2.id,
    fly_from: sydney.id,
    fly_to: melbourne.id,
    fly_time: Date.new(2020,1,1)
);

Seating.create(
    flight_id: flight1.id,
    booked: false,
    user_id: sean.id,
);

Seating.create(
    flight_id: flight1.id,
    booked: false,
    user_id: kay.id,
);

Seating.create(
    flight_id: flight1.id,
    booked: false,
    user_id: paulo.id,
);

Seating.create(
    flight_id: flight1.id,
    booked: false
);

