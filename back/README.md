# Back

## Commandes pour créer et pousser l'image sur Docker Hub

- Créer une image docker : `docker build -t julienbouquillon/server .`
- Se connecter à Docker Hub : `docker login`
- Pousser l'image sur Docker Hub : `docker push julienbouquillon/server`

## Mise en production avec Render

- Créer un compte sur [Render](https://render.com/)  
- Créer un nouveau web service  
- Choisir l'option pour les registries  
- Renseigner le nom de l'image sur docker hub : `julienbouquillon/server`  
- Render vous fournira une URL pour accéder à votre application https://<nom_du_service>.onrender.com  

Note: il fait lui même le mapping des ports => 80:votre_port_exposé