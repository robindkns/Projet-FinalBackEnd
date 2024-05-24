from employees.models import *
from django_seed import Seed

def run_employees():
    seed = Seed.seeder()
    
    manager = {
        'name' : 'John D. Alexon',
        'poste' : 'Manager',
        'image' : 'images/manager.png',
        'quote' : '“ Model. Appropriately create interactive infrastructures after main Holisticly facilitate stand-alone inframe of the world ”',
    }
    
    seed.add_entity(Manager, 1, manager)
    
    employees = [
        {
        'name' : 'Josh H. Alexon',
        'poste' : 'General Manager',
        'image' : 'images/member-1.jpg',
        'email' : 'josh@royella.com'
        },
        {
        'name' : 'Leary Mart',
        'poste' : 'F&B Manager',
        'image' : 'images/member-2.jpg',
        'email' : 'leary@royella.com'
        },
        {
        'name' : 'Samantha Shen',
        'poste' : 'Front Office Manager',
        'image' : 'images/member-6.jpg',
        'email' : 'samantha@royella.com'
        },
        {
        'name' : 'Jack Duncan',
        'poste' : 'IT Department Manager',
        'image' : 'images/member-5.jpg',
        'email' : 'jack@royella.com'
        },
        {
        'name' : 'Aliyah Pearson',
        'poste' : 'HR Manager',
        'image' : 'images/member-4.jpg',
        'email' : 'aliyah@royella.com'
        },
        {
        'name' : 'Kevin Smith',
        'poste' : 'Commercial',
        'image' : 'images/member-3.jpg',
        'email' : 'kevin@royella.com'
        }
    ]
    
    for item in employees:
        seed.add_entity(Employee, 1, item)
    
    seed.execute()