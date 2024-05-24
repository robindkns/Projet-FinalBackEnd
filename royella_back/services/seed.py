from services.models import *
from django_seed import Seed

def run_services():
    seed = Seed.seeder()
    
    services = [{
        'order' : 1,
        'theme' : 'Fitness',
        'title' : 'Gym Training Grounds',
        'image' : 'images/gym.jpg',
        'description' : 'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone',
    },{
        'order' : 2,
        'theme' : 'Fitness',
        'title' : 'Outdoor Swimming Pool',
        'image' : 'images/piscine.jpg',
        'description' : 'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone',
    },{
        'order' : 3,
        'theme' : 'Foods',
        'title' : 'The Restaurant Center',
        'image' : 'images/resto.jpg',
        'description' : 'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone',
    },{
        'order' : 4,
        'theme' : 'Experience',
        'title' : 'Gaming Zone',
        'image' : 'images/gaming.jpg',
        'description' : 'Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone',
    }]
    
    for item in services:
        seed.add_entity(Service, 1, item)
    
    seed.execute()