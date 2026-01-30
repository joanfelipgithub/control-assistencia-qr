# 📤 Cómo Subir el Proyecto a GitHub

## Opción 1: Interfaz Web de GitHub (Más Fácil)

### Paso 1: Crear el Repositorio

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura:
   - **Repository name**: `control-asistencia-qr`
   - **Description**: `Sistema de control de asistencia mediante códigos QR`
   - **Public** o **Private** (elige según prefieras)
   - ✅ Marca "Add a README file"
   - **License**: MIT License
4. Click en **"Create repository"**

### Paso 2: Subir los Archivos

1. En tu repositorio, click en **"Add file"** → **"Upload files"**
2. Arrastra TODOS estos archivos:
   ```
   index.html
   manifest.json
   tarjetas-qr.html
   procesar-asistencia.js
   QUICKSTART.md
   .gitignore
   ```
3. En "Commit changes", escribe: `Primera versión del sistema`
4. Click en **"Commit changes"**

### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (⚙️)
2. En el menú lateral, click en **"Pages"**
3. En "Branch", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click en **"Save"**
5. ¡Espera 1-2 minutos!
6. Verás el mensaje: **"Your site is live at https://tu-usuario.github.io/control-asistencia-qr"**

### Paso 4: Probar la Aplicación

1. Abre la URL: `https://tu-usuario.github.io/control-asistencia-qr`
2. ✅ ¡La app debería funcionar!
3. Prueba en tu móvil y prueba el escáner QR

---

## Opción 2: Línea de Comandos (Para Usuarios Avanzados)

### Paso 1: Instalar Git

Si no tienes Git instalado:
- **Windows**: Descarga de [git-scm.com](https://git-scm.com)
- **Mac**: `brew install git`
- **Linux**: `sudo apt install git`

### Paso 2: Configurar Git (si es tu primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 3: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) → New repository
2. Nombre: `control-asistencia-qr`
3. NO marques "Initialize with README"
4. Create repository

### Paso 4: Subir el Código

```bash
# Navegar a la carpeta con los archivos
cd /ruta/a/tus/archivos

# Inicializar repositorio Git
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primera versión del sistema de asistencia QR"

# Conectar con GitHub (cambia tu-usuario)
git remote add origin https://github.com/tu-usuario/control-asistencia-qr.git

# Subir el código
git branch -M main
git push -u origin main
```

### Paso 5: Activar GitHub Pages

```bash
# Ir a Settings → Pages en GitHub
# O usar GitHub CLI:
gh repo edit --enable-pages --pages-branch main
```

---

## Opción 3: GitHub Desktop (Interfaz Gráfica)

### Paso 1: Instalar GitHub Desktop

1. Descarga [GitHub Desktop](https://desktop.github.com)
2. Instala y inicia sesión con tu cuenta de GitHub

### Paso 2: Crear Repositorio

1. File → New Repository
2. Name: `control-asistencia-qr`
3. Local Path: Elige la carpeta con tus archivos
4. Initialize with Git
5. Create Repository

### Paso 3: Publicar

1. Click en **"Publish repository"**
2. Desmarca "Keep this code private" si quieres que sea público
3. Click en **"Publish repository"**

### Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub.com
2. Settings → Pages
3. Branch: `main` → Save

---

## 📱 Configurar para Uso en Producción

### 1. Cambiar Base de Datos de Estudiantes

Edita `index.html`, busca `ESTUDIANTES_DB` (línea ~312):

```javascript
const ESTUDIANTES_DB = {
    '4810': 'Jordi Casals i Guiu',
    '4815': 'Laia Font i Soler',
    // ... añade tus estudiantes reales aquí
};
```

### 2. Personalizar Colores (Opcional)

Busca en `index.html` (línea ~20):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Cambia los colores a los de tu institución.

### 3. Actualizar README

Edita `README.md`:
- Cambia `tu-usuario` por tu usuario real de GitHub
- Añade capturas de pantalla reales
- Actualiza la información de contacto

### 4. Hacer Commit y Push

```bash
git add .
git commit -m "Configuración personalizada"
git push
```

---

## 🔒 Consideraciones de Privacidad

### Si el repositorio es PÚBLICO:

- ✅ La app funciona para cualquiera con el enlace
- ⚠️ Los nombres de estudiantes son visibles en el código
- 💡 **Solución**: Usa solo IDs o iniciales:
  ```javascript
  const ESTUDIANTES_DB = {
      '4810': 'Est. 001',
      '4815': 'Est. 002',
  };
  ```

### Si el repositorio es PRIVADO:

- ✅ Solo tú y colaboradores autorizados pueden ver el código
- ⚠️ GitHub Pages en repos privados requiere cuenta Pro (gratis para educación)
- 💡 **Alternativa**: Usa Netlify o Vercel (soportan repos privados gratis)

---

## 🚀 Alternativas a GitHub Pages

### Netlify (Recomendado si tu repo es privado)

1. Ve a [netlify.com](https://netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Conecta tu cuenta de GitHub
4. Selecciona tu repositorio
5. Deploy!

### Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Import Git Repository
3. Selecciona tu repo
4. Deploy!

### Netlify Drop (Sin GitHub)

1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta con todos los archivos
3. ¡Listo! Te da una URL

---

## ✅ Checklist Final

Antes de compartir con el vigilante:

- [ ] Repositorio creado y subido
- [ ] GitHub Pages activado y funcionando
- [ ] Probado en móvil (iOS/Android)
- [ ] Escáner QR funciona correctamente
- [ ] Base de datos de estudiantes actualizada
- [ ] README con instrucciones claras
- [ ] URL compartida con el vigilante

---

## 📞 Problemas Comunes

**"GitHub Pages no se activa"**
- Verifica que hay un archivo `index.html` en la raíz
- Espera 2-3 minutos después de activarlo
- Recarga la página de Settings

**"La cámara no funciona"**
- GitHub Pages requiere HTTPS (lo proporciona automáticamente)
- Verifica permisos de cámara en el navegador
- Prueba en otro navegador

**"Los cambios no se reflejan"**
- GitHub Pages puede tardar 1-2 minutos en actualizar
- Limpia caché del navegador (Ctrl+Shift+R)
- Verifica que hiciste `git push` correctamente

---

## 🎓 Para Instituciones Educativas

GitHub ofrece **GitHub Education** que incluye:
- Repositorios privados ilimitados
- GitHub Pages en repos privados
- Herramientas de desarrollo gratis

Solicita en: [education.github.com](https://education.github.com)

---

**¿Necesitas más ayuda?** Abre un Issue en el repositorio o contacta al administrador del sistema.
