from testimonial.models import *
from django_seed import Seed

def run_testimonial():
    seed = Seed.seeder()
    
    testimonials = [
        {
        'name' : 'Ryan Hook',
        'rating' : '5',
        'image' : 'images/customer-1.png',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'Rome',
        'country' : 'Italy',
        },
        {
        'name' : 'Manon Dumont',
        'rating' : '5',
        'image' : 'images/customer-4.webp',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'Cannes',
        'country' : 'France',
        },
        {
        'name' : 'Joshua Ketelaer',
        'rating' : '4',
        'image' : 'images/customer-3.jpeg',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'Brussels',
        'country' : 'Belgium',
        },
        {
        'name' : 'Ryad Mahrez',
        'rating' : '5',
        'image' : 'images/customer-2.png',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'Berkane',
        'country' : 'Morrocco',
        },
        {
        'name' : 'Brie Hull',
        'rating' : '5',
        'image' : 'images/customer-5.jpg',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'London',
        'country' : 'England',
        },
        {
        'name' : 'Jacques Webster',
        'rating' : '5',
        'image' : 'images/customer-6.jpg',
        'testi' : 'Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize value-added the systems before manufactured products. Enthusiastically envisioneer emerging best',
        'city' : 'Los Angeles, CA',
        'country' : 'USA',
        }
    ]
    
    for item in testimonials:
        seed.add_entity(Testimonial, 1, item)
    
    seed.execute()