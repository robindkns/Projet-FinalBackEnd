from rooms.models import *
from django_seed import Seed

def run_rooms():
    seed = Seed.seeder()
    
    # amenity = [
    #     {
    #     'title' : '2 - 5 Persons',
    #     'image' : 'gg-user'
    #     },
    #     {
    #     'title' : 'Free WiFi Available',
    #     'image' : 'gg-data'
    #     },
    #     {
    #     'title' : 'Swimming Pools',
    #     'image' : 'gg-drop'
    #     },
    #     {
    #     'title' : 'Breakfast',
    #     'image' : 'gg-coffee'
    #     },
    #     {
    #     'title' : '250 SQFT Rooms',
    #     'image' : 'gg-home-alt'
    #     },
    #     {
    #     'title' : 'Gym facilities',
    #     'image' : 'gg-gym'
    #     },
    # ]
    
    # for item in amenity:
    #     seed.add_entity(Amenity, 1, item)
    
    rooms = [
        {
            'title' : 'Delux Family Rooms',
            'description' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image' : 'images/room-1.jpg',
            'price' : 450,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 20,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-03-01',
            'date_out' : '2024-03-30',
            'discount' : 25
        },
        {
            'title' : 'Double Suite Rooms',
            'description' : 'Holisticly maximize cross-platform interfaces after revolutionary leadership. Rapidiously transition interactive schemas for maintainable markets. Efficiently leverage stand-alone functionalities via strategic infrastructures. Distinctively whiteboard alternative potentialities. Appropriately streamline extensible architectures beyond e-services. Dramatically orchestrate pandemic-driven technologies. Completely engineer holistic mindshare for user-centric models. Conveniently fabricate robust e-commerce portals.',
            'image' : 'images/room-2.jpg',
            'price' : 550,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 15,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-01-01',
            'date_out' : '2024-06-30',
            'discount' : 24
        },
        {
            'title' : 'Superior Bed Rooms',
            'description' : 'Proactively exploit goal-oriented methodologies with premier intellectual resources. Compellingly iterate dynamic initiatives for efficient ROI. Enthusiastically architect seamless functionalities via web-enabled models. Distinctively extend state-of-the-art benefits. Rapidiously innovate scalable infrastructures for holistic architectures. Appropriately maximize team-driven technologies beyond whiteboard sessions. Assertively leverage maintainable e-tailers via innovative partnerships. Conveniently transition interactive deliverables.',
            'image' : 'images/room-3.jpg',
            'price' : 380,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 80,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-02-05',
            'date_out' : '2024-04-30',
            'discount' : 26
        },
        {
            'title' : 'Junior Suite Rooms',
            'description' : 'Proactively reintermediate impactful mindshare via strategic intellectual capital. Rapidiously evolve cross-platform infrastructures beyond maintainable markets. Appropriately leverage stand-alone functionalities for seamless architectures. Dramatically conceptualize alternative paradigms. Holisticly incubate extensible interfaces after reliable e-services. Efficiently engineer pandemic-driven technologies beyond user-centric models. Conveniently whiteboard holistic e-commerce portals. Distinctively strategize robust methodologies.',
            'image' : 'images/room-4.jpg',
            'price' : 420,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 60,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-03-01',
            'date_out' : '2024-10-30',
            'discount' : 22
        },
        {
            'title' : 'Family Suite Rooms',
            'description' : 'Appropriately scale goal-oriented architectures with premier intellectual resources. Rapidiously iterate dynamic initiatives for efficient ROI. Dramatically architect seamless functionalities via web-enabled models. Efficiently extend state-of-the-art benefits. Proactively innovate scalable infrastructures for holistic architectures. Compellingly maximize team-driven technologies beyond whiteboard sessions. Assertively leverage maintainable e-tailers via innovative partnerships. Conveniently transition interactive deliverables.',
            'image' : 'images/room-5.jpg',
            'price' : 520,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 45,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-01-01',
            'date_out' : '2024-05-30',
            'discount' : 30
        },
        {
            'title' : 'Beautiful Family Rooms',
            'description' : 'Holisticly engineer cross-platform mindshare via strategic intellectual capital. Rapidiously evolve interactive infrastructures beyond maintainable markets. Appropriately leverage stand-alone functionalities for seamless architectures. Dramatically whiteboard alternative paradigms. Proactively revolutionize extensible interfaces after reliable e-services. Efficiently engineer pandemic-driven technologies beyond user-centric models. Conveniently whiteboard holistic e-commerce portals. Distinctively strategize robust methodologies.',
            'image' : 'images/room-6.jpg',
            'price' : 500,
            'size' : 1500,
            'rating' : 5,
            'beds' : 2,
            'quantity' : 35,
            'amenities' : [
                Amenity.objects.get(title='2 - 5 Persons'),
                Amenity.objects.get(title='Free WiFi Available'),
                Amenity.objects.get(title='Swimming Pools'),
                Amenity.objects.get(title='Breakfast'),
                Amenity.objects.get(title='250 SQFT Rooms'),
                Amenity.objects.get(title='Gym facilities'),
                ],
            'date_in' : '2024-05-08',
            'date_out' : '2024-12-28',
            'discount' : 20
        }
    ]
    
    for item in rooms:
        post = Room.objects.create(
            title=item['title'],
            description=item['description'],
            image=item['image'],
            price=item['price'],
            size=item['size'],
            rating=item['rating'],
            beds=item['beds'],
            quantity=item['quantity'],
            date_in=item['date_in'],
            date_out=item['date_out'],
            discount=item['discount'],
        )
        post.amenities.set(item['amenities'])
    
    seed.execute()