const CACHE_NAME = 'gastos-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

---

## 🚀 PASO 3: Subir a GitHub Pages (GRATIS)

### **Opción A: Usando GitHub Web (sin instalar nada)**

1. **Crea una cuenta en GitHub** (si no tienes): https://github.com/signup

2. **Crea un nuevo repositorio:**
   - Click en el botón verde **"New"** o **"+"** arriba a la derecha
   - Repository name: `gestor-gastos`
   - Public
   - ✅ Add a README file
   - Click en **"Create repository"**

3. **Agrega los archivos:**
   - Click en **"Add file"** → **"Create new file"**
   - Filename: `index.html`
   - Pega el contenido del Archivo 1
   - Click en **"Commit changes"**
   - Repite para `manifest.json` y `sw.js`

4. **Activar GitHub Pages:**
   - Ve a **Settings** (⚙️) del repositorio
   - En el menú lateral, click en **"Pages"**
   - En "Branch", selecciona **"main"**
   - Click en **"Save"**
   - ¡Espera 1-2 minutos!

5. **Tu app estará en:**
```
   https://TU-USUARIO.github.io/gestor-gastos
