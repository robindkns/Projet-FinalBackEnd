from django_seed import Seed
from .models import *
from datetime import datetime
from user.models import User
def run_post():
    seeder = Seed.seeder()
    categories = [
        {'nom': 'Batterie'},
        {'nom': 'Réseaux Sociaux'},
        {'nom': 'Protection des données'},
    ]
    for item in categories:
        seeder.add_entity(CategorieBlog, 1, item)

    tags = [
        {'nom': 'PC'},
        {'nom': 'Téléphone'},
        {'nom': 'Batterie'},
        {'nom': 'SPAM'},
        {'nom': 'Vie Privée'},
        {'nom': 'Arnaque'},
        {'nom': 'Message'},
        {'nom': 'Vol'},
    ]
    for item in tags:
        seeder.add_entity(Tag, 1, item)
    print(seeder.execute())

    posts = [
        {
            'user': User.objects.get(username='Admin'),
            'titre': 'Comment charger son PC/Téléphone ?',
            'description': "Trouvez le chargeur adapté : Assurez-vous d'avoir le chargeur spécifique fourni avec votre PC, car différents modèles et marques peuvent avoir des chargeurs différents. Localisez le port de charge : Sur votre PC, recherchez le port de charge. Il s'agit généralement d'un connecteur rectangulaire ou rond situé sur le côté, à l'arrière ou sur le bord de l'ordinateur portable. Sur un ordinateur de bureau, le port de charge se trouve généralement à l'arrière de l'unité centrale.Branchez le chargeur : Insérez la fiche du chargeur dans le port de charge de votre PC jusqu'à ce qu'elle soit bien connectée. Assurez-vous qu'elle est correctement insérée et qu'elle s'adapte parfaitement. Branchez l'autre extrémité du chargeur : Branchez l'autre extrémité du chargeur dans une prise électrique murale ou une multiprise avec une alimentation électrique fiable. Vérifiez le témoin de charge : Certains PC ont des voyants lumineux pour indiquer l'état de charge. Vérifiez si le témoin de charge s'allume pour indiquer que l'ordinateur est en charge. Laissez l'ordinateur se charger : Une fois le chargeur connecté, laissez l'ordinateur se charger pendant un certain temps. Cela peut prendre plusieurs heures pour charger complètement la batterie, en fonction de l'état de charge initial et de la capacité de la batterie. Débranchez le chargeur : Une fois que votre PC est complètement chargé, débranchez le chargeur de l'ordinateur et de la prise murale.",
            "categorie": CategorieBlog.objects.get(nom='Batterie'),
            'tag': [
                Tag.objects.get(nom='PC'),
                Tag.objects.get(nom='Téléphone'),
            ],            
            "img": "images/blog/i1.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'La lutte contre les SPAMS',
            'description': "Les spams, ou messages indésirables, sont une nuisance constante dans notre monde numérique. Que ce soit par e-mail, sur les réseaux sociaux, ou même par SMS, les spams semblent toujours trouver leur chemin jusqu'à nos boîtes de réception. Dans cet article, nous explorerons les différents types de spams, les conséquences qu'ils peuvent avoir et comment nous pouvons nous protéger contre eux Qu'est-ce qu'un spam et quels sont les types courants ? Les spams sont des messages non sollicités envoyés en masse à un grand nombre de destinataires. Les spams peuvent prendre différentes formes, y compris des e-mails non sollicités, des commentaires indésirables sur les blogs, des messages promotionnels sur les réseaux sociaux, des appels téléphoniques non désirés, etc. Les conséquences des spams : Perte de temps : Les spams nécessitent souvent de trier et supprimer de nombreux messages inutiles, ce qui peut prendre beaucoup de temps Risques de sécurité : Certains spams peuvent contenir des liens malveillants ou des logiciels malveillants qui compromettent la sécurité de nos appareils. Pollution de l'espace numérique : Les spams encombrent nos boîtes de réception et les commentaires des blogs, rendant difficile la recherche de messages légitimes. Comment se protéger contre les spams ? Filtres anti-spam : Utilisez des filtres anti-spam fournis par les fournisseurs de services de messagerie pour bloquer les messages indésirables. Ne partagez pas votre adresse e-mail publiquement : Évitez de publier votre adresse e-mail sur des sites web ou des forums publics où les robots spammeurs peuvent la collecter. Soyez prudent avec les liens : Ne cliquez pas sur des liens provenant de sources inconnues ou douteuses, car ils pourraient être des pièges à spam. Utilisez des CAPTCHA : Les tests de CAPTCHA sur les formulaires en ligne peuvent aider à bloquer les robots spammeurs. Signalez les spams : Signalez les spams aux fournisseurs de services de messagerie, aux réseaux sociaux ou aux autorités compétentes.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='PC'),
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='SPAM'),
                Tag.objects.get(nom='Vie Privée'),
                Tag.objects.get(nom='Message'),
                Tag.objects.get(nom='Arnaque'),
            ],            
            "img": "images/blog/i2.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,

        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Batterie Faible !',
            'description': "La batterie faible de nos appareils électroniques est une contrainte frustrante qui fait partie de notre vie quotidienne. Nous avons tous vécu ce moment où notre téléphone portable ou notre ordinateur portable affiche un avertissement de batterie faible, nous rappelant que notre temps d'utilisation est limité. Cette situation peut être particulièrement stressante lorsque nous sommes en déplacement ou que nous avons besoin de nos appareils pour des tâches importantes. La décharge de la batterie nous oblige à chercher une prise de courant ou un chargeur pour rétablir l'énergie de nos appareils. La batterie faible affecte notre productivité et notre capacité à rester connectés. Nous dépendons de plus en plus de nos appareils électroniques pour le travail, les études, les communications et les divertissements. Lorsque la batterie se vide, nous sommes confrontés à une interruption de nos activités et à une perte de notre autonomie numérique. Pour éviter cette situation, de nombreuses personnes portent des chargeurs portables ou cherchent des points de charge accessibles dans les lieux publics. Malheureusement, cela n'est pas toujours pratique ou possible. La dépendance à la batterie peut nous mettre dans une position délicate lorsque nous en avons le plus besoin. La batterie faible est également un rappel constant de notre consommation énergétique et de son impact sur l'environnement. La nécessité de recharger régulièrement nos appareils contribue à la consommation d'électricité et à l'utilisation de ressources naturelles pour produire de l'énergie. Cela soulève des questions sur la durabilité et l'empreinte carbone de nos habitudes technologiques. Pour faire face à la batterie faible, il existe quelques astuces que nous pouvons adopter. La gestion de l'énergie devient essentielle pour prolonger la durée de vie de la batterie. Des actions simples telles que réduire la luminosité de l'écran, désactiver les fonctionnalités inutilisées, limiter la synchronisation automatique et fermer les applications en arrière-plan peuvent contribuer à économiser de l'énergie et à prolonger l'autonomie de nos appareils.",
            "categorie": CategorieBlog.objects.get(nom='Batterie'),
            'tag': [
                Tag.objects.get(nom='PC'),
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='Batterie'),
            ],            
            "img": "images/blog/i3.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,

        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Protégez-vous contre les arnaques',
            'description': "Dans notre société moderne, les arnaques téléphoniques sont devenues une préoccupation majeure. Les escrocs utilisent des stratagèmes astucieux pour tromper les gens au téléphone et leur soutirer de l'argent ou des informations personnelles. Pour protéger votre sécurité et éviter d'être victime d'une arnaque téléphonique, voici quelques conseils simples mais efficaces à suivre : Soyez conscient des types d'arnaques courantes : Faux appels de services gouvernementaux : Les escrocs se font passer pour des agents du gouvernement et prétendent exiger des informations personnelles ou de l'argent pour régler de prétendues infractions. Appels de loterie ou de gains : Les escrocs vous informent que vous avez gagné une somme d'argent ou un prix, mais vous demandent de payer des frais ou de fournir des informations bancaires pour recevoir votre gain. Faux appels de support technique : Les escrocs se font passer pour des techniciens informatiques et prétendent résoudre un problème sur votre ordinateur, mais en réalité, ils cherchent à installer des logiciels malveillants ou à accéder à vos données. Appels de phishing : Les escrocs prétendent être votre banque, votre fournisseur de services ou une autre institution légitime pour vous inciter à divulguer vos informations personnelles, telles que votre numéro de carte de crédit ou votre mot de passe. Méfiez-vous des appels inattendus : Si vous recevez un appel d'une personne inconnue vous demandant des informations confidentielles ou de l'argent, soyez prudent. Ne révélez pas d'informations personnelles sans vérifier l'identité de l'appelant. Soyez sceptique face aux offres trop belles pour être vraies. Si quelque chose semble trop beau pour être vrai, il y a de fortes chances que ce soit une arnaque. Ne partagez pas d'informations personnelles sensibles : Ne donnez jamais votre numéro de sécurité sociale, vos informations bancaires, vos mots de passe ou d'autres informations personnelles sensibles par téléphone, à moins d'être sûr de l'identité de la personne à qui vous parlez. Méfiez-vous des personnes qui vous demandent de l'argent ou des paiements par des méthodes non sécurisées, telles que les cartes-cadeaux ou les virements bancaires. Utilisez des listes de blocage et des filtres d'appel: Enregistrez votre numéro de téléphone sur la liste nationale 'Ne pas appeler' pour éviter de recevoir des appels de télévendeurs. Utilisez des applications de filtrage d'appels sur votre smartphone pour bloquer les numéros suspects ou indésirables. Informez-vous et signalez les arnaques : Tenez-vous informé des dernières arnaques téléphoniques en consultant les ressources en ligne fournies par les organismes gouvernementaux ou les entreprises de télécommunication.Signalez les arnaques téléphoniques aux autorités compétentes, telles que la police locale ou les organismes de protection des consommateurs.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='PC'),
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='Arnaque'),
                Tag.objects.get(nom='Vie Privée'),
                Tag.objects.get(nom='Vol'),
            ],            
            "img": "images/blog/i4.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Protégez-vous contre le vol des voleurs qui volent',
            'description': "Dans notre société moderne, le vol est devenu une préoccupation majeure. Les escrocs utilisent des stratagèmes astucieux pour tromper les gens au téléphone et leur soutirer de l'argent ou des informations personnelles. Pour protéger votre sécurité et éviter d'être victime d'une arnaque téléphonique, voici quelques conseils simples mais efficaces à suivre : Soyez conscient des types d'arnaques courantes : Faux appels de services gouvernementaux : Les escrocs se font passer pour des agents du gouvernement et prétendent exiger des informations personnelles ou de l'argent pour régler de prétendues infractions. Appels de loterie ou de gains : Les escrocs vous informent que vous avez gagné une somme d'argent ou un prix, mais vous demandent de payer des frais ou de fournir des informations bancaires pour recevoir votre gain. Faux appels de support technique : Les escrocs se font passer pour des techniciens informatiques et prétendent résoudre un problème sur votre ordinateur, mais en réalité, ils cherchent à installer des logiciels malveillants ou à accéder à vos données. Appels de phishing : Les escrocs prétendent être votre banque, votre fournisseur de services ou une autre institution légitime pour vous inciter à divulguer vos informations personnelles, telles que votre numéro de carte de crédit ou votre mot de passe. Méfiez-vous des appels inattendus : Si vous recevez un appel d'une personne inconnue vous demandant des informations confidentielles ou de l'argent, soyez prudent. Ne révélez pas d'informations personnelles sans vérifier l'identité de l'appelant. Soyez sceptique face aux offres trop belles pour être vraies. Si quelque chose semble trop beau pour être vrai, il y a de fortes chances que ce soit une arnaque. Ne partagez pas d'informations personnelles sensibles : Ne donnez jamais votre numéro de sécurité sociale, vos informations bancaires, vos mots de passe ou d'autres informations personnelles sensibles par téléphone, à moins d'être sûr de l'identité de la personne à qui vous parlez. Méfiez-vous des personnes qui vous demandent de l'argent ou des paiements par des méthodes non sécurisées, telles que les cartes-cadeaux ou les virements bancaires. Utilisez des listes de blocage et des filtres d'appel: Enregistrez votre numéro de téléphone sur la liste nationale 'Ne pas appeler' pour éviter de recevoir des appels de télévendeurs. Utilisez des applications de filtrage d'appels sur votre smartphone pour bloquer les numéros suspects ou indésirables. Informez-vous et signalez les arnaques : Tenez-vous informé des dernières arnaques téléphoniques en consultant les ressources en ligne fournies par les organismes gouvernementaux ou les entreprises de télécommunication.Signalez les arnaques téléphoniques aux autorités compétentes, telles que la police locale ou les organismes de protection des consommateurs.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='Arnaque'),
                Tag.objects.get(nom='Vie Privée'),
                Tag.objects.get(nom='Vol'),
            ],            
            "img": "images/blog/i5.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Ecoutons la Radio',
            'description': "Depuis son invention, la radio est devenue un média populaire à travers le monde, offrant aux auditeurs une expérience unique d'information, de divertissement et de connexion. Dans cet article, nous explorerons l'importance de l'écoute de la radio, son évolution à l'ère numérique et les raisons pour lesquelles cette passion intemporelle persiste. L'écoute de la radio a un charme particulier qui attire les auditeurs depuis des décennies. Que ce soit en voiture, à la maison ou au travail, la radio offre une présence sonore agréable qui accompagne notre quotidien. La voix des animateurs, la variété musicale, les débats et les émissions spécialisées créent une atmosphère chaleureuse et familière. L'un des grands attraits de la radio est la possibilité de découvrir de nouvelles musiques, de nouveaux artistes et de nouveaux sujets. Les stations de radio offrent une grande diversité de genres musicaux, de styles d'émission et de contenus. Cela permet aux auditeurs d'explorer différents univers, d'élargir leurs horizons et de se connecter à de nouvelles cultures et communautés. L'écoute de la radio crée une sensation de compagnie, surtout pour ceux qui vivent seuls ou qui passent beaucoup de temps seuls. Les animateurs de radio deviennent souvent des voix familières et des compagnons de confiance. La radio est également un moyen de se sentir connecté à la communauté locale, en diffusant des nouvelles, des événements et des informations spécifiques à la région.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='PC'),
            ],          
            "img": "images/blog/i8.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Les animaux savent-ils utiliser un PC',
            'description': "L'intelligence animale est un sujet fascinant qui soulève de nombreuses questions sur les capacités cognitives et les comportements des différentes espèces. Avec l'avancement de la technologie, se pose également la question de savoir si les animaux peuvent utiliser un PC (ordinateur personnel) ou d'autres dispositifs technologiques. Dans cet article, nous explorerons les preuves scientifiques sur l'intelligence animale, les expériences menées pour évaluer leurs capacités technologiques et les limites de leur interaction avec les ordinateurs. Il est largement accepté que de nombreux animaux, notamment les primates, les oiseaux, les dauphins et les éléphants, ont des capacités cognitives développées. Ils peuvent résoudre des problèmes, communiquer, apprendre et utiliser des outils dans leur environnement naturel. Cependant, l'utilisation d'un PC nécessite des compétences spécifiques telles que la manipulation d'interfaces graphiques, la compréhension du langage humain et la capacité à effectuer des tâches complexes. Des études ont été menées pour évaluer la capacité des animaux à interagir avec les ordinateurs. Par exemple, des primates tels que les chimpanzés et les orangs-outans ont été formés à utiliser des écrans tactiles pour effectuer des tâches simples, comme associer des images ou résoudre des puzzles. Des expériences similaires ont été menées avec des dauphins et des perroquets, qui ont été entraînés à appuyer sur des touches ou des icônes pour effectuer différentes actions.",
            "categorie": CategorieBlog.objects.get(nom='Réseaux Sociaux'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='PC'),
            ],          
            "img": "images/blog/i9.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': "Le Wifi dans l'Espace ?",
            'description': "L'espace est souvent perçu comme un lieu isolé et déconnecté de notre monde numérique. Cependant, avec l'essor de l'exploration spatiale et des missions prolongées dans l'espace, la connectivité sans fil devient un élément essentiel pour les astronautes et les opérations spatiales. Dans cet article, nous explorerons comment le WiFi est utilisé dans l'espace, les défis auxquels il est confronté et les technologies innovantes qui permettent une communication sans fil fiable au-delà des frontières terrestres. Alors que les astronautes s'aventurent de plus en plus loin de la Terre, la nécessité de rester connecté pour les communications, les transferts de données et le soutien psychologique devient cruciale. Le WiFi, qui est devenu omniprésent sur notre planète, a également trouvé sa place dans l'espace pour faciliter la communication entre les astronautes et les contrôleurs de mission. La connectivité sans fil dans l'espace est confrontée à des défis uniques. L'un des principaux défis est la distance. Les signaux WiFi traditionnels se dissipent avec la distance, ce qui rend difficile la communication entre la Terre et les engins spatiaux éloignés. De plus, l'environnement spatial lui-même, avec son rayonnement intense, ses interférences électromagnétiques et ses conditions extrêmes, pose des problèmes supplémentaires pour établir et maintenir une connexion stable.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='PC'),
            ],          
            "img": "images/blog/i10.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Faut-il aller à Molengeek',
            'description': "Molengeek, un espace de coworking et un incubateur de start-ups situé à Molenbeek, en Belgique, suscite l'intérêt en raison de sa mission d'inclusion sociale et d'entrepreneuriat. Dans cet article, nous examinerons les raisons pour lesquelles il pourrait être intéressant de se rendre à Molengeek, en mettant en évidence les avantages potentiels d'une telle expérience dans un quartier en pleine transformation. Molengeek est également connu pour son écosystème dynamique, où des entrepreneurs, des experts techniques et des investisseurs se rencontrent. En vous rendant à Molengeek, vous aurez la possibilité de vous immerger dans un environnement stimulant, propice à la collaboration et aux partenariats. Vous aurez la chance d'échanger des idées, de bénéficier de conseils d'experts et de créer des réseaux précieux, ce qui peut être bénéfique pour le développement de votre projet ou de votre carrière. En intégrant la communauté de Molengeek, vous aurez accès à des ressources et à des opportunités précieuses. Les entrepreneurs bénéficient de formations, de mentorat et de conseils pratiques pour les aider à faire croître leur entreprise. De plus, Molengeek offre des liens avec des réseaux d'investisseurs et des partenaires potentiels, ce qui peut être essentiel pour obtenir le soutien financier nécessaire au développement de votre projet. Molenbeek est un quartier qui a connu des défis socio-économiques, mais qui se transforme progressivement grâce à des initiatives comme Molengeek. En vous rendant à Molengeek, vous aurez l'opportunité de contribuer à cette transformation positive en participant à la revitalisation économique et sociale du quartier. Vous pourrez découvrir la diversité culturelle de la région et vous engager activement dans des projets qui ont un impact local durable.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='Arnaque'),
                Tag.objects.get(nom='PC'),
            ],          
            "img": "images/blog/i6.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        {
            'user': User.objects.get(username="Admin"),
            'titre': 'Comment Hacker Molengeek ?',
            'description': "La première étape pour tout hacker potentiel consiste à collecter des informations sur la cible. Dans notre scénario fictif, nous utiliserons des compétences en recherche pour rassembler des informations sur Molengeek à partir de sources publiques telles que leur site web, leurs comptes de médias sociaux, les articles de presse et les blogs. Cette étape nous permettra de comprendre leur infrastructure technologique et d'identifier d'éventuelles vulnérabilités.L'ingénierie sociale est une technique utilisée pour manipuler les individus afin d'obtenir des informations confidentielles. Dans notre scénario fictif, nous supposerons que nous avons réussi à infiltrer un événement de Molengeek en se faisant passer pour un employé ou un membre du personnel. À l'aide de conversations et de manipulations psychologiques, nous parviendrons à obtenir des informations sensibles, telles que des mots de passe ou des identifiants.",
            "categorie": CategorieBlog.objects.get(nom='Protection des données'),
            'tag': [
                Tag.objects.get(nom='Téléphone'),
                Tag.objects.get(nom='Arnaque'),
                Tag.objects.get(nom='PC'),
                Tag.objects.get(nom='Vie Privée'),
            ],          
            "img": "images/blog/i7.png",
            "created_at": datetime.now(),
            "last_update": datetime.now(),
            "valid": True,
        },
        
    ]
    
    for item in posts:
        post = Post.objects.create(
            user=item['user'],
            titre=item['titre'],
            description=item['description'],
            categorie=item['categorie'],
            img=item['img'],
            created_at=item['created_at'],
            last_update=item['last_update'],
            valid=item['valid'],
        )
        post.tag.set(item['tag'])
        
    print("Seed completed successfully.")


