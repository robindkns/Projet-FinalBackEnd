from blog.models import *
from django_seed import Seed

def run_blog():
    seed = Seed.seeder()
    
    # tags = [
    #     {'name' : 'Luxury Hotel'},
    #     {'name' : 'Interior Design'},
    #     {'name' : 'SPA Center'},
    #     {'name' : 'Luxury Restaurant'},
    # ]
    
    # categories = [
    #     {'name' : 'Luxury Hotels'},
    #     {'name' : 'Restaurant'},
    #     {'name' : 'SPA Center'},
    #     {'name' : 'Health Club'},
    #     {'name' : 'Industrial'},
    #     {'name' : 'Uncategories'},
        
    # ]
    
    # for tag in tags:
    #     seed.add_entity(Tag, 1, tag)
    
    # for category in categories:
    #     seed.add_entity(Category, 1, category)
    
    # blogs = [ 
    #     {
    #         'title' : 'Luxury Hotel for Travelling Spot California, USA',
    #         'date' : '2023-08-10',
    #         'image' : 'images/blog-details.jpg',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=1),
    #         'tag' : [
    #             Tag.objects.get(name='Luxury Hotel'),
    #             Tag.objects.get(name='SPA Center')
    #         ]
    #     },
    #     {
    #         'title' : 'How to book a room online, Step by Step guide',
    #         'date' : '2022-08-10',
    #         'image' : 'images/blog-room.jpg',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=1),
    #         'tag' : [
    #             Tag.objects.get(name='Luxury Hotel'),
    #             Tag.objects.get(name='Luxury Restaurant')
    #         ]
    #     },
    #     {
    #         'title' : 'Pre booking benefits for the Traveler on our Hotel',
    #         'date' : '2023-10-15',
    #         'image' : 'images/blog-traveler.webp',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=6),
    #         'tag' : [
    #             Tag.objects.get(name='Luxury Hotel')
    #         ]
    #     },
    #     {
    #         'title' : '5 Discount Periods every year for Valuable Clients',
    #         'date' : '2024-02-10',
    #         'image' : 'images/blog-holidays.jpg',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=4),
    #         'tag' : [
    #             Tag.objects.get(name='Luxury Hotel'),
    #             Tag.objects.get(name='SPA Center'),
    #             Tag.objects.get(name='Luxury Restaurant')
    #         ]
    #     },
    #     {
    #         'title' : 'What the best architects think of our Hotel',
    #         'date' : '2023-11-07',
    #         'image' : 'images/blog-architect.jpg',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=5),
    #         'tag' : [
    #             Tag.objects.get(name='Interior Design')
    #         ]
    #     },
    #     {
    #         'title' : 'Come visit our brand new Gym !',
    #         'date' : '2022-09-11',
    #         'image' : 'images/blog-gym.webp',
    #         'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #         'category' : Category.objects.get(id=4),
    #         'tag' : [
    #             Tag.objects.get(name='Luxury Hotel'),
    #             Tag.objects.get(name='SPA Center')
    #         ]
    #     },
    # {
    #     'title': 'Discover our new breakfast selection !',
    #     'date': '2023-10-15',
    #     'image' : 'images/pricing-2.jpg',
    #     'text' : 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative. Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
    #     'category' : Category.objects.get(id=2),
    #     'tag' : [
    #         Tag.objects.get(name='Luxury Restaurant'),
    #         Tag.objects.get(name='SPA Center')
    #     ]
    # }
    # ]
    
    # for item in blogs:
    #     post = Blog.objects.create(
    #         title=item['title'],
    #         date=item['date'],
    #         image=item['image'],
    #         text=item['text'],
    #         category=item['category'],
    #     )
    #     post.tag.set(item['tag'])
    
    comments = [
        {
            'author' : 'Marie Doe',
            'image' : 'images/comment-user1.jpg',
            'text' : 'Interactively visualize top-line internal or "organic" sources rather than top-line niche mark unleash 24/7 opportunities after high standards in process improvements. Uniquely deploy methodologies with reliable information.',
            'blog' : Blog.objects.get(id=1)
        },
        {
            'author' : 'Moris Barbar',
            'image' : 'images/comment-user2.webp',
            'text' : 'Interactively visualize top-line internal or "organic" sources rather than top-line niche mark unleash 24/7 opportunities after high standards in process improvements. Uniquely deploy methodologies with reliable information.',
            'blog' : Blog.objects.get(id=1)
        },
        {
            'author' : 'John Doe',
            'image' : 'images/comment-user3.webp',
            'text' : 'Interactively visualize top-line internal or "organic" sources rather than top-line niche mark unleash 24/7 opportunities after high standards in process improvements. Uniquely deploy methodologies with reliable information.',
            'blog' : Blog.objects.get(id=2)
        }
    ]
    
    for comment in comments:
        seed.add_entity(Comment, 1, comment)
    
    seed.execute()