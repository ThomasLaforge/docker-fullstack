# App fullstack

## Description

Ce projet a permis de dockeriser une application fullstack. Il est composé de deux parties:
- [front](front/README.md)
- [back](back/README.md)

Les deux parties possèdent leur propre documentation pour la mise en production.

## Résumé de la journée

### Dockerfile

- FROM : image de base
- WORKDIR /app : là où tout se passe
- COPY : copie des fichiers
- RUN : commandes à lancer
- ENV : variables d'environnement
- EXPOSE : port à exposer
- CMD : commande à lancer au démarrage

Le fichier .dockerignore permet d'ignorer des fichiers lors de la copie.

### Commandes

```bash
docker build -t julienbouquillon/server .
docker run -p port_machine:port_exposé julienbouquillon/server
docker login
docker push julienbouquillon/server
```

### CD

- [Vercel](https://vercel.com/) : lié à Github
- [Render](https://render.com/) : lié à Docker Hub

Pas de CI encore mais la prochaine fois ^^