from django_seed import Seed
from .models import *

def run_authentification():
    seeder = Seed.seeder()
    
    roles = [
        {
            'name' : 'admin'
        },{
            'name' : 'webmaster'
        },{
            'name' : 'redacteur'
        },{
            'name' : 'receptionniste'
        },{
            'name' : 'utilisateur'
        }
    ]

    for item in roles:
        seeder.add_entity(Role, 1, item)
    seeder.execute()