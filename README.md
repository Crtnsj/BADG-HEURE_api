# API

Ceci est une API construite avec Node.js, Express et MongoDB.

# Installation

Clonez le référentiel sur votre machine locale en utilisant la commande suivante :

```
git clone https://github.com/Crtnsj/BADG-HEURE_api.git
```

Installez les dépendances NPM en utilisant la commande suivante :

```
npm install
```

Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement suivantes :

```
SECRET_TOKEN=the_secret_token
ACCESS_DB=the_user&password_of_DB
PORT=the_port
```

# Utilisation

Vous pouvez démarrer le serveur en utilisant la commande suivante :

```
npm run dev
```

# Scripts NPM

npm run dev : démarre le serveur localement avec nodemon

npm start : démarre le serveur localement avec node

# Dépendances

bcrypt : ^5.1.0

cors : ^2.8.5

dotenv : ^16.1.4

express : ^4.18.2

express-validator : ^7.0.1

jsonwebtoken : ^9.0.0

mongoose : ^7.2.2

# Dev Dépendances

nodemon : ^2.0.22
