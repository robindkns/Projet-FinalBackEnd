from contact.models import *
from django_seed import Seed

def run_contact():
    seed = Seed.seeder()
    
    contact = {
        'tel' : '+980 123 (4567) 890',
        'email' : 'example@gmail.com',
        'location' : 'New Elephant Road, Dhanmondi Dhaka - 1212',
        'maps' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1633418400558!5m2!1sen!2sbd'
    }
    
    seed.add_entity(Contact, 1, contact)
    
    images = [
        {'image' : 'images/blog-architect.jpg' },
        {'image' : 'images/blog-details.jpg' },
        {'image' : 'images/blog-holidays.jpg' },
        {'image' : 'images/gaming.jpg' },
        {'image' : 'images/hotel-colosseum.jpg' },
        {'image' : 'images/room-3.jpg' },
        {'image' : 'images/room-5.jpg' },
        {'image' : 'images/piscine.jpg' },
        {'image' : 'images/roomservice.webp' }
    ]
    
    for item in images :
        seed.add_entity(Images, 1, item)
    
    seed.execute()