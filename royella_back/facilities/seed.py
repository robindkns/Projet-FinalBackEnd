from facilities.models import *
from django_seed import Seed

def run_facilities():
    seed = Seed.seeder()
    
    facilities = [{
        'title' : 'Room Services',
        'icon' : 'gg-info',
        'image' : 'images/roomservice.webp'
    },{
        'title' : 'Wi-Fi Internet',
        'icon' : 'gg-data',
        'image' : 'images/wifi.webp'
    },{
        'title' : 'Smart Key',
        'icon' : 'gg-key',
        'image' : 'images/key.jpg'
    },{
        'title' : 'Breakfast',
        'icon' : 'gg-coffee',
        'image' : 'images/breakfast.jpg'
    },{
        'title' : 'Swimming Pool',
        'icon' : 'gg-drop',
        'image' : 'images/piscine.jpg'
    },{
        'title' : 'Gym',
        'icon' : 'gg-gym',
        'image' : 'images/gym.jpg'
    }]
    
    for item in facilities:
        seed.add_entity(Facilities, 1, item)
    
    seed.execute()