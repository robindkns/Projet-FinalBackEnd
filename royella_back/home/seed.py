from home.models import *
from django_seed import Seed

def run():
    seed = Seed.seeder()
    
    banner = [{
        'titre' : 'THE BEST LUXURY HOTEL IN CALIFORNIA',
        'image' : 'images/hotel_california.webp',
        'stars' : 5
    },{
        'titre' : 'THE BEST LUXURY HOTEL IN KASHMIR',
        'image' : 'images/hotel_kashmir.jpeg',
        'stars' : 5
    },{
        'titre' : 'THE BEST LUXURY HOTEL IN COLOSSEUM',
        'image' : 'images/hotel_colosseum.jpg',
        'stars' : 5
    },{
        'titre' : 'THE BEST LUXURY HOTEL IN SRILANKA',
        'image' : 'images/hotel_srilanka.jpg',
        'stars' : 5
    }]
    
    for item in banner:
        seed.add_entity(Banner, 1, item)
    
    seed.execute()