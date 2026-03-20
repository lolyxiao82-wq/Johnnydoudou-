# Johnnydoudou - Groupe Chat IA en Temps Réel 🤖💬 Une application de groupe chat innovante où 4 bots IA (Gemini, Claude, Copilot, Le Chat) et vous pouvez converser, débattre et trouver des solutions ensemble en temps réel.

## 🎯 Fonctionnalités
✅ **Chat en Temps Réel** - Communication instantanée via WebSocket
✅ **4 Bots IA Indépendants** - Gemini, Claude, Copilot, Le Chat (français)
✅ **Débats Automatiques** - Les bots peuvent débattre et proposer des solutions
✅ **Messages Importants Auto** - Les bots peuvent envoyer des alertes sans votre autorisation
✅ **Interface WhatsApp-like** - Interface utilisateur intuitive et moderne
✅ **Historique Persistant** - Toutes les conversations sont sauvegardées

## 🚀 Démarrage Rapide
### Prérequis
- Node.js (v14+)
- npm ou yarn

### Installation
1. **Cloner le repository**
   ```
   git clone https://github.com/lolyxiao82-wq/Johnnydoudou-.git
   cd Johnnydoudou-
   ```
2. **Installer les dépendances**
   ```
   npm install
   ```
3. **Configurer les variables d'environnement**
   ```
   cp .env.example .env
   ```
   Ajouter vos clés API dans `.env`:
   ```
   GEMINI_API_KEY=votre_clé_gemini
   CLAUDE_API_KEY=votre_clé_claude
   COPILOT_API_KEY=votre_clé_copilot
   LECHAT_API_KEY=votre_clé_lechat
   PORT=3000
   ```
4. **Démarrer le serveur**
   ```
   npm start
   ```
5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du Projet
```plaintext
johnnydoudou/
├── server.js # Serveur Express + WebSocket
├── config.js # Configuration centrale
├── database.js # Gestion SQLite
���── package.json # Dépendances
├── bots/
│   ├── geminiBot.js # Bot Gemini
│   ├── claudeBot.js # Bot Claude
│   ├── copilotBot.js # Bot Copilot
│   └── lechatBot.js # Bot Le Chat (français)
├── public/
│   ├── index.html # Interface web
│   ├── style.css # Styling
│   └── client.js # Communication client
├── data/
│   └── chat.db # Base de données SQLite
└── README.md # Ce fichier
```

## 🤖 Les Bots
### Gemini
Bot IA de Google - Spécialisé dans l'analyse et la résolution de problèmes complexes.
### Claude
Bot IA d'Anthropic - Excellent pour les discussions nuancées et la rédaction.
### Copilot
Bot IA de Microsoft - Spécialisé dans le code et l'assistance technique.
### Le Chat
Bot IA français de Mistral - Parfait pour les conversations en français naturel.

## 🎮 Comment Utiliser
1. **Envoyer un Message** - Tapez votre message dans la zone de saisie - Cliquez sur "Envoyer" - Les 4 bots répondront automatiquement
2. **Lancer un Débat** - Cliquez sur le bouton "Débat" - Les 4 bots vont discuter et proposer des solutions - Vous verrez toutes les perspectives en temps réel
3. **Messages Importants** - Les bots peuvent envoyer des messages d'alerte automatiquement - Si une information importante est détectée - Vous serez notifié en priorité

## 🔧 Configuration Avancée
### Modifier les délais de réponse
Dans `config.js`:
```plaintext
BOT_RESPONSE_DELAY: 500, # Délai avant réponse (ms)
AUTO_MESSAGE_CHANCE: 0.3, # 30% de chance de message auto
```

## 📊 API Endpoints
- `GET /api/messages` - Récupérer tous les messages
- `GET /api/bots` - Lister les bots connectés

## 🔌 WebSocket Events
- `send-message` - Envoyer un message au groupe
- `receive-message` - Recevoir un message
- `trigger-debate` - Lancer un débat
- `load-messages` - Charger l'historique

## 📝 Fichier .env
```plaintext
GEMINI_API_KEY=your_gemini_key
CLAUDE_API_KEY=your_claude_key
COPILOT_API_KEY=your_copilot_key
LECHAT_API_KEY=your_lechat_key
PORT=3000
NODE_ENV=development
DB_PATH=./data/chat.db
```

## 🐛 Dépannage
**Le serveur ne démarre pas?** - Vérifiez que le port 3000 est disponible - Vérifiez que Node.js est installé: `node --version`

**Les bots ne répondent pas?** - Vérifiez les clés API dans `.env` - Vérifiez les logs du serveur

**Les messages ne s'affichent pas?** - Vérifiez la connexion WebSocket - Rafraîchissez la page

## 🚀 Améliorations Futures
- [ ] Authentification utilisateur
- [ ] Sauvegarde dans le cloud
- [ ] Machine learning pour améliorer les réponses
- [ ] Support multi-langues
- [ ] Mobile app

## 📄 Licence
MIT License

## 👤 Auteur
**lolyxiao82-wq**

## 🤝 Contribution
Les contributions sont les bienvenues! Veuillez forker le repository et soumettre une pull request.

--- 
**Amusez-vous bien avec Johnny Doudou!** 🤖💬