# 📱 Control de Asistencia QR

Sistema web progresivo (PWA) para control de asistencia mediante escaneo de códigos QR. Diseñado específicamente para entornos educativos donde se necesita registrar rápidamente la asistencia de estudiantes.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PWA](https://img.shields.io/badge/PWA-ready-purple.svg)

## ✨ Características

- 📷 **Escaneo QR en tiempo real** - Usa la cámara del dispositivo
- 📊 **Acumulación automática** - Los IDs se van acumulando en la lista
- 💾 **Almacenamiento local** - Los datos se guardan en el dispositivo
- 📤 **Exportación múltiple** - Descarga archivo `.txt` o comparte por WhatsApp
- 🔄 **Funciona offline** - No requiere conexión a internet después de instalarse
- 📱 **PWA** - Se puede instalar como app nativa
- 🎨 **Interfaz moderna** - Diseño responsive y fácil de usar
- 🔒 **100% privado** - No se envían datos a servidores externos

## 🚀 Demo

**[Ver Demo en Vivo →](https://tu-usuario.github.io/control-asistencia-qr)**

## 📸 Capturas de Pantalla

### Pantalla Principal
![Pantalla Principal](screenshots/main.png)

### Escaneo de QR
![Escaneo](screenshots/scanner.png)

### Exportación
![Exportar](screenshots/export.png)

## 🎯 Caso de Uso

Este sistema está diseñado para:

1. **Vigilante/Acompañante** en un autobús escolar
2. Cada estudiante tiene una **tarjeta con código QR**
3. Al subir, el vigilante **escanea el QR**
4. El ID se **acumula automáticamente** en la lista
5. Al final del trayecto, **exporta un archivo `.txt`**
6. Envía el archivo por **WhatsApp al administrador**
7. El admin procesa el archivo y marca ausentes en el sistema

## 🛠️ Instalación

### Opción 1: Usar directamente desde GitHub Pages

1. Abre en tu navegador: `https://tu-usuario.github.io/control-asistencia-qr`
2. En Safari (iOS): Toca el botón "Compartir" → "Añadir a la pantalla de inicio"
3. En Chrome (Android): Toca el menú → "Instalar aplicación"

### Opción 2: Clonar y ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/control-asistencia-qr.git

# Entrar en el directorio
cd control-asistencia-qr

# Abrir con un servidor local (por ejemplo con Python)
python -m http.server 8000

# O con Node.js
npx http-server

# Abrir en navegador
open http://localhost:8000
```

### Opción 3: Deploy en otros servicios

#### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tu-usuario/control-asistencia-qr)

#### Vercel
```bash
vercel deploy
```

## 📋 Uso

### 1. Preparación (Administrador)

1. Genera las tarjetas con códigos QR usando `tarjetas-qr.html`
2. Imprime y entrega una tarjeta a cada estudiante
3. Instala la aplicación en el dispositivo del vigilante

### 2. Durante el Viaje (Vigilante)

1. Abre la aplicación
2. Toca "📷 Iniciar Escáner"
3. Apunta la cámara al código QR de cada estudiante
4. Verifica que el nombre aparece en la lista
5. Repite con todos los estudiantes

### 3. Exportación

1. Toca "📤 Exportar"
2. Elige:
   - **⬇️ Descargar**: Guarda archivo `.txt` en el dispositivo
   - **💬 WhatsApp**: Comparte directamente por WhatsApp

### 4. Procesamiento (Administrador)

El archivo exportado tiene este formato:

```txt
4810
4815
4820
4830
```

Usa el script `procesar-asistencia.js` (incluido) para marcar automáticamente los ausentes en tu sistema.

## 🗂️ Estructura del Proyecto

```
control-asistencia-qr/
├── index.html              # Aplicación principal
├── manifest.json           # Configuración PWA
├── tarjetas-qr.html       # Generador de tarjetas QR
├── procesar-asistencia.js # Script para el administrador
├── README.md              # Este archivo
├── LICENSE                # Licencia MIT
└── screenshots/           # Capturas de pantalla
    ├── main.png
    ├── scanner.png
    └── export.png
```

## ⚙️ Configuración

### Personalizar Lista de Estudiantes

Edita el objeto `ESTUDIANTES_DB` en `index.html` (línea ~312):

```javascript
const ESTUDIANTES_DB = {
    '4810': 'Jordi Casals i Guiu',
    '4815': 'Laia Font i Soler',
    '4820': 'Marc Rovira i Costa',
    // Añade más estudiantes aquí
};
```

### Cambiar Colores

Modifica las variables CSS en `index.html`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--color-primary: #667eea;
--color-success: #25d366;
```

## 📱 Compatibilidad

| Navegador | Versión | Soporte |
|-----------|---------|---------|
| Safari iOS | 11+ | ✅ Completo |
| Chrome Android | 60+ | ✅ Completo |
| Chrome Desktop | 60+ | ✅ Completo |
| Firefox | 60+ | ✅ Completo |
| Safari macOS | 11+ | ✅ Completo |
| Edge | 79+ | ✅ Completo |

**Nota**: Requiere HTTPS para acceso a la cámara (GitHub Pages lo proporciona automáticamente).

## 🔒 Privacidad y Seguridad

- ✅ **Sin servidores externos**: Todos los datos se guardan localmente
- ✅ **Sin cookies**: No se rastrean usuarios
- ✅ **Sin analytics**: No se envían estadísticas
- ✅ **Sin dependencias externas**: Solo usa CDN para librería QR (puede usar versión local)
- ✅ **Código abierto**: Puedes auditar todo el código
- ✅ **GDPR/LOPD Compatible**: Diseñado para cumplir normativas de protección de datos

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un [Issue](https://github.com/tu-usuario/control-asistencia-qr/issues) con:

- Descripción del problema
- Pasos para reproducirlo
- Navegador y versión
- Capturas de pantalla (si aplica)

## 📝 Roadmap

- [ ] Soporte para múltiples grupos/clases
- [ ] Exportación a Excel/CSV
- [ ] Modo oscuro
- [ ] Estadísticas y gráficos
- [ ] Sincronización en la nube (opcional)
- [ ] Traducción a otros idiomas
- [ ] Integración directa con sistemas escolares populares

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- [html5-qrcode](https://github.com/mebjas/html5-qrcode) - Librería para escaneo QR
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/) - Generación de códigos QR
- Comunidad de código abierto

## 📞 Soporte

Si necesitas ayuda:

1. Revisa la sección [Uso](#-uso)
2. Busca en [Issues existentes](https://github.com/tu-usuario/control-asistencia-qr/issues)
3. Abre un [nuevo Issue](https://github.com/tu-usuario/control-asistencia-qr/issues/new)

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella!

**[⬆ Volver arriba](#-control-de-asistencia-qr)**
