import django
django.setup()

# from home.seed import *
from rooms.seed import *

if __name__== '__main__':
    run()