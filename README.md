# Intranet - CodeceptJs Automation tests

## CodeceptJs, c'est quoi ?
**CodeceptJS** est un framework de test de bout en bout moderne avec une syntaxe spéciale de style **"BDD"**. Les tests sont écrits comme un scénario linéaire de l'action de l'utilisateur sur un site. Chaque test est décrit dans une fonction de **"scenario"** avec l'objet **"I"** passé dedans. L'objet **"I"** est un **"actor"**, une abstraction pour un utilisateur testeur. [Visiter le site officiel pour plus d'informations](https://codecept.io).


## Comment collaborer ?
Dans la première partie on commencera par **installer les prérequis** et configurer l'environnement local, puis on verra en détails **l'architechture du projet**, le framework et les technologies utilisées et finalement comment on peut collaborer ensemble en suivant le **git branching model** et les process qu'on a définis, à savoir: "branch naming convention, "semantic versionning", "reviews process", "merging" et finalement les "tags".


### Installez Java JDK et ajoutez-le dans la variable d'environnement :
Minimum v1.8 : [Télécharger ici](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
Ajouter JDK dans la variable d'environnement 

### Installez NodeJs:
Minimum v8 : [Télécharger ici](https://nodejs.org/en/)

### Installez Git sur windows
[Télécharger ici](https://git-scm.com/download/win)

### Installer le IDE VS code
[Télécharger ici](https://code.visualstudio.com/download)

### Clonez le projet sur votre machine
Ouvrez git bash, positionnez vous sur le chemin où vous voulez cloner le projet puis exécutez cette commande :
```
git clone https://github.com/acialatlantique/intranet.git
```

Dans le dossier **conf**, double cliquer sur le fichier **cc_config.bat**,
ce fichier *contient un script qui installe et configure les variables d'environnement qui concernent les modules npm présents dans le dossier du projet.*
Pour s'assurer que l'installation s'est bien passée, fermez et rouvrez la **cmd** puis exécuter la commande suivante :
```
allure --version
```
'Le output doit être une version'. Si au contraire vous obtenez _**"allure n’est pas reconnu en tant que commande interne"**_, je vous invite à contacter le responsable du projet.

Installer EdgeDriver helper sur windows:
```
DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0
```

Félicitations !! vous pouvez désormais lancer un premier test. Ouvrez une invite de commande puis exécutez la commande suivante :
```
cc run --steps
```


## Notre "Git Branching model"
Dans cette partie on verra ensemble la stratégie de **Git "branching"** qu'on a choisi pour développer et publier notre code source ainsi que **les règles** qu'on doit suivre pendant le développement pour avoir une bonne organisation et surtout réduire les **conflits de code**.

#### La "base branch"
Dans ce projet, la "base branch" est la branche **MASTER**. <br/>
Master est la branche par défaut qui contient toujours un code stable.
Il est strictement interdit de merger directement dans cette branche, la bonne méthode est de passer par une **Pull request**.

#### Comment contribuer ?
Pour contribuer au projet, merci de suivre les étapes suivantes :
#### Etape1 : Rafraîchir "Master local"
  Toujours commencer par télécharger la dernière mise à jour depuis **Origin Master** jusqu'à notre **local Master** :
  ```
  git checkout master
  git pull origin master
  ```
  **git checkout master** : Se déplacer vers la branche master <br/>
  **git pull origin master** : Télécharger la dernière màj de la branche master <br/>
  
#### Etape2 : Créer une branche depuis master
  Pour brancher à partir de Master, il faut toujours se positionner sur Master puis créer une nouvelle branche, dans l'exemple suivant on crée     une branche pour la fonctionnalité loginDg : <br/>
  ```
  git checkout master
  git checkout -b test-loginDg
  ```
  **git checkout master** : Se déplacer vers la branche master <br/>
  **git checkout -b test-loginDg** : Créer une nouvelle branche "test-loginDg" <br/>
  
  La branche est créée et on est rediriger vers elle automatiquement, pour vérifier où on est positionner éxécuter cette commande : <br/>
   ```
  git status
  ```
  
#### Etape3 : Faites des changements dans le code, "commit" les changements et "push" vers Origin(GitHub)
  Après avoir fait des changements, on est prêt pour un premier commit <br/>
  ```
  git status
  git add .
  git status
  git commit -m "mon premier commit"
  git push origin HEAD
  ```
  **git status** : Affiche le statut du projet, les fichiers qu'on a modifié seront affichés en rouge <br/>
  **git add .** : Prépare les fichiers qu'on a modifié à étre commités <br/>
  **git status** : Les fichiers qui étaient affichés en rouge sont maintenant en vert, on peut désormais faire un commit <br/>
  **git commit -m "mon premier commit"** : screenshot du code actuel <br/>
  **git push origin HEAD** : cette commande va créer une branche "test-loginDg" au niveau de l'Origin(Github) et uploader le code qu'on a commité <br/>
  
#### Etape 5 : Allez sur "[Github project](https://github.com/acialatlantique/intranet)"
  En général, une fois qu'une nouvelle branche est "push", Github la détecte automatiquement et vous demandera de créer une nouvelle **Pull request**.
  Créer la PR et demander des **"Reviews"** aux autres contributeurs.
  
#### Etape 6 : 
  Une fois que la PR est approuvée, elle sera prête pour le **Merge** vers **Master**, pour le faire il suffit de se rediriger vers la PR et cliquer sur le buton **Merge pull request**.
  
  
#### Les règles à suivre
**naming branch convention** :
<table>
  <thead>
    <tr>
      <th>Branch</th>
      <th>Description</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>test-</td>
      <td>un changement lié au tests</td>
      <td>test-loginDg</td>
    </tr>
    <tr>
      <td>fix-</td>
      <td>un fix ou une maintenance de tests</td>
      <td>fix-creationContrat</td>
    </tr>
    <tr>
      <td>conf-</td>
      <td>un changement lié à la configuration ou à l'environnement</td>
      <td>conf-updateCodeceptJsVersion</td>
    </tr>
  </tbody>
</table>

**Aucun code ne doit être mergé directement dans master** : ne jamais executer cette commande **"git push origin master"**

**Versionning et Tags** : A définir selon la stratrégie du test


## L'architecture du projet
//TODO structure des fichier et dossier, page object, ide
