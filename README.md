# Sistema de Control de Asistencia QR - Con Identificación de Dispositivo

## 📱 Nuevas Características

### 1. Identificación Única de Dispositivo
Cada teléfono ahora genera un **ID único y persistente** que se mantiene incluso después de cerrar y reabrir la aplicación. Este ID se basa en:
- Características del navegador
- Información del dispositivo
- Timestamp de primera instalación
- Componente aleatorio

**Formato del ID:** `D####-####XXXXX` (ejemplo: `D4A2B-8F3DE12A`)

### 2. Configuración Inicial
La primera vez que un estudiante usa la aplicación, se le pedirá que introduzca su nombre. Esta información se guarda localmente y se usa para identificar todos los archivos exportados desde ese dispositivo.

### 3. Nuevo Formato de Nombres de Archivo
Los archivos exportados ahora tienen un formato más descriptivo:

**Antes:** `Assist_2026-01-30_20-28.txt`

**Ahora:** `Assist_D4A2B-8F3DE12A_Jordi-Casals_2026-01-30_20-28.txt`

Estructura:
```
Assist_[DEVICE-ID]_[NOMBRE-ESTUDIANTE]_[FECHA]_[HORA].txt
```

### 4. Información en el Encabezado del Archivo
Cada archivo exportado incluye un encabezado completo con:
```
===========================================
CONTROL DE ASISTENCIA
===========================================
Fecha: 30/1/2026
Hora: 20:28:15
Dispositivo: D4A2B-8F3DE12A
Responsable: Jordi Casals
Total Presentes: 8
===========================================

LISTADO DE ASISTENCIA:
-------------------------------------------
20:15:30 - 4810 - Jordi Casals i Guiu
20:16:45 - 4815 - Laia Font i Soler
...
```

### 5. Visualización del Dispositivo
En la pantalla principal, ahora se muestra:
- El nombre del estudiante
- El ID del dispositivo

Esto permite verificar fácilmente desde qué dispositivo se está registrando la asistencia.

## 🎯 Beneficios para el Administrador

### Control de Envíos
El administrador puede ahora:

1. **Identificar rápidamente** qué estudiante NO ha enviado su archivo
2. **Detectar duplicados** si un estudiante envía el mismo archivo varias veces
3. **Rastrear dispositivos** específicos si hay problemas técnicos
4. **Verificar responsabilidad** - cada archivo tiene un responsable identificado

### Ejemplo de Uso en la Escuela

**Escenario:** 8 estudiantes deben enviar sus archivos de asistencia después del transporte.

El administrador recibirá archivos como:
```
✅ Assist_D4A2B-8F3DE12A_Jordi-Casals_2026-01-30_20-28.txt
✅ Assist_D7F3C-9B2AC34E_Laia-Font_2026-01-30_20-29.txt
✅ Assist_D1E5D-3A4FB56D_Marc-Rovira_2026-01-30_20-30.txt
❌ Falta: Eulàlia Serra
❌ Falta: Pau Martí
✅ Assist_D9C8F-5D6EA78B_Mireia-Vilalta_2026-01-30_20-32.txt
❌ Falta: Andreu Camps
✅ Assist_D2B4E-7C8FD90A_Aina-Torrent_2026-01-30_20-33.txt
```

**Resultado:** El administrador puede ver inmediatamente que faltan 3 archivos (Eulàlia, Pau, y Andreu) y puede contactarlos específicamente.

## 🔧 Características Técnicas

### Persistencia de Datos
- El ID de dispositivo se guarda en `localStorage`
- El nombre del estudiante se guarda en `localStorage`
- Los datos persisten incluso después de cerrar el navegador
- Solo se borra si el usuario limpia los datos del navegador

### Privacidad
- No se recopilan datos personales más allá del nombre que el estudiante introduce
- El ID de dispositivo es generado localmente, no se envía a ningún servidor
- Toda la información se mantiene en el dispositivo del estudiante

### Compatibilidad
- Funciona en todos los navegadores modernos (Chrome, Safari, Firefox)
- Compatible con iOS y Android
- No requiere conexión a internet (excepto para compartir por WhatsApp)

## 📲 Instrucciones de Uso

### Para Estudiantes:

1. **Primera vez:**
   - Abrir la aplicación
   - Introducir tu nombre cuando se solicite
   - ✅ Tu dispositivo está configurado

2. **Registro de asistencia:**
   - Abrir la aplicación
   - Iniciar el escáner
   - Escanear códigos QR de compañeros
   - Exportar el archivo

3. **Envío al administrador:**
   - Presionar "Exportar"
   - Elegir "WhatsApp"
   - Enviar al contacto del administrador

### Para Administradores:

1. **Recepción de archivos:**
   - Recibir archivos por WhatsApp
   - Los nombres de archivo identifican automáticamente al remitente

2. **Verificación:**
   - Revisar qué archivos has recibido
   - Identificar quién NO ha enviado
   - Contactar a los estudiantes faltantes

3. **Auditoría:**
   - Cada archivo tiene un encabezado con información completa
   - Puedes verificar hora de envío, dispositivo usado, etc.

## 🔒 Seguridad y Limitaciones

### Ventajas:
- Identificación única y persistente
- Trazabilidad completa
- Difícil de falsificar (requiere acceso al dispositivo específico)

### Limitaciones:
- Si un estudiante borra los datos del navegador, se generará un nuevo ID
- Si un estudiante usa múltiples dispositivos, cada uno tendrá su propio ID
- El sistema confía en la honestidad del estudiante al introducir su nombre

## 🚀 Mejoras Futuras Posibles

- Registro de estudiantes en base de datos central
- Verificación de identidad mediante código PIN
- Sincronización automática con servidor escolar
- Generación de reportes automáticos
- Notificaciones push para recordar envío

---

## 📞 Soporte

Si tienes problemas con el sistema:
1. Verifica que el navegador permite el uso de localStorage
2. Asegúrate de dar permisos de cámara
3. Si el ID cambia, puede que hayas borrado datos del navegador
4. Para reconfigurar, borra los datos del sitio web y vuelve a introducir tu nombre
