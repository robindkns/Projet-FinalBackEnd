from pricing.models import *
from django_seed import Seed

def run_pricing():
    seed = Seed.seeder()
    
    pricing = [
        {
            'title' : 'Room Services',
            'price' : 12,
            'image' : 'images/pricing-1.jpg',
            'service_1' : 'Bed and floor Cleaning',
            'service_2' : 'Orci miss natoque vasa ince',
            'service_3' : 'Clean sorem ipsum morbin',
            'service_4' : 'Wash & Clean equipment',
        },
        {
            'title' : 'Breakfast Premium',
            'price' : 15,
            'image' : 'images/pricing-1.jpg',
            'service_1' : 'Early Access to Restaurant',
            'service_2' : 'Orci miss natoque vasa ince',
            'service_3' : 'Clean sorem ipsum morbin',
            'service_4' : 'Premium tables',
        },
        {
            'title' : 'Free Drinks',
            'price' : 20,
            'image' : 'images/pricing-1.jpg',
            'service_1' : 'Alcohol and Drinks',
            'service_2' : 'Orci miss natoque vasa ince',
            'service_3' : 'Clean sorem ipsum morbin',
            'service_4' : 'Premium bar',
        },
    ]
    
    for item in pricing:
        seed.add_entity(Pricing, 1, item)
    
    # faqs = [
    #     {
    #         'question': "How to Booking a Room?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "What kinds of Bedroom available?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "Do you have any Discount Current Month?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "Have you available money back Guarantee?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "Do you have any Discount Current Month?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "How to Booking a Room?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "What kinds of Bedroom available?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },

    #     {
    #         'question': "Have you available money back Gaurentee?",
    #         'response': "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
    #         'active': False,
    #     },
    # ];
    
    # for item in faqs:
    #     seed.add_entity(Faq, 1, item)
    
    
    seed.execute()