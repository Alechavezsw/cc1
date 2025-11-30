# Comandos para subir a GitHub

## Paso 1: Crear el repositorio en GitHub
1. Ve a: https://github.com/new
2. Nombre del repositorio: `cosecha-creativa` (o el que prefieras)
3. Elige público o privado
4. **NO marques** las opciones de inicializar con README, .gitignore o licencia
5. Haz clic en "Create repository"

## Paso 2: Conectar y subir el código

Una vez creado el repositorio, ejecuta estos comandos:

```bash
# Conectar el repositorio remoto
git remote add origin https://github.com/Alechavezsw/cosecha-creativa.git

# Cambiar el nombre de la rama a 'main' (si GitHub usa main en lugar de master)
git branch -M main

# Subir el código
git push -u origin main
```

**Nota:** Si tu repositorio usa `master` en lugar de `main`, usa:
```bash
git push -u origin master
```

## Paso 3: Desplegar en Vercel desde GitHub

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en "Add New Project"
3. Conecta tu cuenta de GitHub si no lo has hecho
4. Selecciona el repositorio `cosecha-creativa`
5. Vercel detectará automáticamente la configuración y desplegará tu proyecto

¡Listo! Tu aplicación estará disponible en: `https://cosecha-creativa.vercel.app/languages`



