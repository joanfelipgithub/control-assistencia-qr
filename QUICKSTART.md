# 🚀 Guía Rápida de Inicio

## Para el Vigilante/Acompañante

### Primera Vez (5 minutos)

1. **Abre la app en tu móvil:**
   ```
   https://tu-usuario.github.io/control-asistencia-qr
   ```

2. **Instala la app** (opcional pero recomendado):
   - **iPhone**: Safari → Compartir → "Añadir a Inicio"
   - **Android**: Chrome → Menú → "Instalar aplicación"

3. **¡Listo!** Ya puedes usar la app offline.

### Uso Diario (2 minutos)

1. **Abre la app**
2. **Toca "📷 Iniciar Escáner"**
3. **Escanea el QR de cada estudiante** al subir
   - Verás su nombre aparecer inmediatamente
   - Escucharás un "bip" de confirmación
4. **Al final, toca "📤 Exportar"**
5. **Elige "💬 WhatsApp"**
6. **Envía al administrador**

¡Eso es todo!

---

## Para el Administrador

### Primera Vez (10 minutos)

1. **Genera las tarjetas QR:**
   - Abre `tarjetas-qr.html` en tu navegador
   - Click en "🖨️ Imprimir Tarjetas"
   - Imprime y entrega a cada estudiante

2. **Prepara el script:**
   - Guarda `procesar-asistencia.js` en tu ordenador
   - Tenlo listo para cuando recibas el archivo

### Uso Diario (1 minuto)

1. **Recibes el archivo por WhatsApp** del vigilante
2. **Copia el contenido** del archivo (los números)
3. **Abre ClickEdu** → F12 (consola)
4. **Pega y ejecuta** el script con los números
5. **✅ Los ausentes se marcan automáticamente**

---

## Preguntas Frecuentes

**¿Necesita internet?**
Solo para abrir la app la primera vez. Después funciona 100% offline.

**¿Es seguro?**
Sí, todos los datos se quedan en el móvil del vigilante. No se envían a ningún servidor.

**¿Qué pasa si escaneo el mismo QR dos veces?**
La app te avisa que ya está registrado y no lo duplica.

**¿Puedo usar la app en varios móviles?**
Sí, cada móvil tiene sus propios datos. No se sincronizan entre sí.

**¿Los QR caducan?**
No, los QR son permanentes. Sirven todo el curso escolar.

---

## Ayuda Rápida

**El escáner no funciona:**
- Verifica permisos de cámara
- Usa HTTPS (necesario para acceso a cámara)
- Prueba con mejor iluminación

**El QR no se lee:**
- Acerca/aleja la cámara
- Limpia la lente
- Verifica que el QR esté completo y sin daños

**No puedo exportar:**
- Verifica que hay estudiantes registrados
- Prueba descargando primero y luego compartiendo el archivo manualmente

---

## Contacto

¿Necesitas más ayuda? Abre un [Issue en GitHub](https://github.com/tu-usuario/control-asistencia-qr/issues)
