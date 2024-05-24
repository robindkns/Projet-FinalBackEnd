from hotel.models import *
from django_seed import Seed

def run_hotel():
    seed = Seed.seeder()
    
    hotel = {
        'title' : 'LUXURY BEST HOTEL IN CITY CALIFORNIA, USA',
        'description' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe Compellingly create premier open data through economically. Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after',
        'image' : 'images/about-thumb.jpg',
        'location' : '102/B, Dream Street, New Elephant Road, Resort. Dhanmondi Dhaka - 1212',
        'video' : 'https://www.youtube.com/watch?v=4K6Sh1tsAW4&ab_channel=BogdanIorga',
    }
    
    seed.add_entity(Hotel, 1, hotel)
    
    seed.execute()